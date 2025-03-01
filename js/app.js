document.getElementById('test-button').addEventListener('click', () => {
    alert('Firebase is connected!');
});
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
