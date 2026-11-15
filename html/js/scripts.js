document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    // Configura aquí la URL de tu webhook (Make, Zapier, n8n, etc.)
    const WEBHOOK_URL = 'https://partners.joincaa.team/api/webhooks/solicitud';

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Obtener los valores de los inputs
        const fullName = form.querySelector('input[placeholder="Full Name"]').value;
        const email = form.querySelector('input[placeholder="Email Address"]').value;
        const recommendedBy = form.querySelector('input[placeholder="Recommended by"]').value;

        // Unir los 3 campos de teléfono en formato: (123) 456-7890
        const phoneArea = form.querySelectorAll('input[maxlength="3"]')[0].value;
        const phonePrefix = form.querySelectorAll('input[maxlength="3"]')[1].value;
        const phoneLine = form.querySelector('input[maxlength="4"]').value;
        const fullPhone = `(${phoneArea}) ${phonePrefix}-${phoneLine}`;

        // Validación básica
        if (!fullName || !email || !phoneArea || !phonePrefix || !phoneLine) {
            alert('Please, fill in all required fields.');
            return;
        }

        // Estructura de los datos que recibirá tu webhook
        const payload = {
            fullName: fullName,
            email: email,
            phone: fullPhone,
            recommendedBy: recommendedBy || 'None',
            submittedAt: new Date().toISOString()
        };

        console.log(payload);

        // Cambiar estado del botón de envío
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'SENDING...';

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                form.reset(); // Limpiar formulario
            } else {
                throw new Error('Server responded with an error status');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your application. Please try again.');
        } finally {
            // Restaurar el botón
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
        form.classList.add("fade");
        form.innerHTML = `

        <h2>
            Thank you!
        </h2>

        <p>

        Your application has been received.

        Our recruitment team will review your information and contact you.

        </p>

        `;            
    });
});