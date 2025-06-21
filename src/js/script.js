document.addEventListener('DOMContentLoaded', () => {
    // Data e hora final da contagem regressiva: 21/06/2025 às 16:00:00 (Fuso horário de Brasília - GMT-3)
    // Usamos 'June 21, 2025 16:00:00 GMT-0300' para especificar o fuso horário
    const endDate = new Date('June 21, 2025 16:00:00 GMT-0300').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const messageEl = document.getElementById('message');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        // Calcula tempo em dias, horas, minutos e segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Formata para ter sempre dois dígitos
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            messageEl.textContent = 'O evento começou! Divirta-se!';
        } else {
            messageEl.textContent = 'A contagem regressiva está em andamento!';
        }
    }

    // Atualiza a contagem a cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Chama a função uma vez imediatamente para evitar o "atraso" inicial de 1 segundo
    updateCountdown();
});