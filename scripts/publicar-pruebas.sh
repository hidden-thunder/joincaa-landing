#!/usr/bin/env bash
# ==============================================================================
# Publica versiones del landing en https://pruebas.joincaa.team
#
# Uso:
#   scripts/publicar-pruebas.sh                 # las dos propuestas (ramas de rediseño)
#   scripts/publicar-pruebas.sh slug=ref[:Nombre] ...
#
#   slug    carpeta donde queda la versión: https://pruebas.joincaa.team/<slug>/
#   ref     rama, etiqueta o commit de git; «.» = la carpeta html/ tal como está ahora (sin commit)
#   Nombre  lo que se ve en la página de comparación (por defecto, el slug)
#
# Ejemplos:
#   scripts/publicar-pruebas.sh actual=.:"Cambios sin commit" storefront=redesign/landing-storefront
#   scripts/publicar-pruebas.sh produccion=main:Producción varsity=redesign/landing-v2:"Varsity Recruiting"
#
# Cada publicación reemplaza todo lo que había en pruebas. La raíz muestra las dos primeras
# versiones lado a lado (con más de dos, cada panel tiene un selector).
#
# El formulario de cada versión envía a /api/webhooks/solicitud de pruebas.joincaa.team, que
# Traefik manda al Case Desk de PRUEBAS. El script se niega a publicar una versión cuyo
# scripts.js enviaría al Case Desk real.
#
# Variables opcionales: JOINCAA_SERVER (root@72.60.174.244), JOINCAA_PRUEBAS_DIR (/root/joincaa-pruebas)
# ==============================================================================
set -euo pipefail

SERVER="${JOINCAA_SERVER:-root@72.60.174.244}"
REMOTE_DIR="${JOINCAA_PRUEBAS_DIR:-/root/joincaa-pruebas}"
URL="https://pruebas.joincaa.team"

REPO="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
cd "$REPO"

if [ $# -eq 0 ]; then
  set -- "varsity=redesign/landing-v2:Varsity Recruiting" \
         "storefront=redesign/landing-storefront:Now Hiring — Apply Within"
fi

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
mkdir -p "$WORK/site"

json="["
for spec in "$@"; do
  slug="${spec%%=*}"
  rest="${spec#*=}"
  ref="${rest%%:*}"
  name="${rest#*:}"
  [ "$name" = "$rest" ] && name="$slug"

  if [[ ! "$slug" =~ ^[a-z0-9][a-z0-9-]*$ ]] || [ "$spec" = "$slug" ]; then
    echo "✗ «$spec»: usa slug=ref[:Nombre]; el slug va en minúsculas, números y guiones." >&2; exit 1
  fi
  if [ -e "$WORK/site/$slug" ]; then
    echo "✗ El slug «$slug» está repetido." >&2; exit 1
  fi

  dest="$WORK/site/$slug"
  mkdir -p "$dest"
  if [ "$ref" = "." ]; then
    cp -a html/. "$dest/"
    desc="html/ sin commit"
  else
    if ! git rev-parse --verify --quiet "$ref^{commit}" >/dev/null; then
      echo "✗ «$ref» no es una rama, etiqueta ni commit de este repositorio." >&2; exit 1
    fi
    git archive "$ref" html | tar -x -C "$dest" --strip-components=1
    desc="$(git rev-parse --short "$ref")"
  fi

  # Seguridad: sin esto, el formulario de esta versión crearía solicitudes en el Case Desk real.
  if ! grep -q "PRODUCTION_HOSTS" "$dest/js/scripts.js"; then
    echo "✗ $slug ($ref): su html/js/scripts.js no distingue pruebas de producción y enviaría" >&2
    echo "  al Case Desk real. Trae a esa rama el commit «Formulario: Case Desk de pruebas…»." >&2
    exit 1
  fi

  esc_name="${name//\\/\\\\}"; esc_name="${esc_name//\"/\\\"}"
  json+="$( [ "$json" = "[" ] || echo ","){\"slug\":\"$slug\",\"nombre\":\"$esc_name\",\"ref\":\"$ref\",\"commit\":\"$desc\"}"
  echo "• $slug ← $ref ($desc)"
done
json+="]"

printf '%s\n' "$json" > "$WORK/site/versiones.json"
cp pruebas/index.html pruebas/robots.txt "$WORK/site/"
cp pruebas/docker-compose.yml pruebas/nginx.conf "$WORK/"

echo "Subiendo a $SERVER:$REMOTE_DIR …"
tar -C "$WORK" -czf - site docker-compose.yml nginx.conf | ssh "$SERVER" "
  set -e
  mkdir -p '$REMOTE_DIR' && cd '$REMOTE_DIR'
  rm -rf .nuevo && mkdir .nuevo && tar -xzf - -C .nuevo
  mv .nuevo/docker-compose.yml .nuevo/nginx.conf .
  # Se actualiza el contenido DENTRO de site/ (no se reemplaza la carpeta): nginx la tiene
  # montada, y si se cambiara por otra, el contenedor seguiría viendo la anterior (vacía).
  mkdir -p site
  if command -v rsync >/dev/null; then
    rsync -a --delete .nuevo/site/ site/
  else
    find site -mindepth 1 -delete && cp -a .nuevo/site/. site/
  fi
  rm -rf .nuevo
  docker compose up -d --remove-orphans 2>&1 | grep -v '^ *Container .* Running$' || true
  if ! docker ps --format '{{.Names}}' | grep -qx case-desk-pruebas-case-desk-1; then
    echo '⚠ El Case Desk de pruebas está apagado: el formulario dará error al enviar.'
    echo '  Para encenderlo: cd /home/case-desk-pruebas && docker compose up -d'
  fi
"

code="$(curl -s -o /dev/null -w '%{http_code}' "$URL/versiones.json" || true)"
if [ "$code" = "200" ]; then
  echo "✓ Publicado: $URL/"
else
  echo "⚠ Subido, pero $URL/versiones.json respondió $code (el certificado puede tardar un minuto la primera vez)."
fi
