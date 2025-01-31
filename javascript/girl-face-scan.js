// Initialize counter
let counter = 1;
const counterElement = document.getElementById("counter");

// Simulate loading
const interval = setInterval(() => {
    if (counter <= 100) {
        counterElement.textContent = `${counter}%`;
        counter++;
    } else {
        clearInterval(interval);
        showModal(); 
    }
}, 30);


// Function to show modal and redirect
function showModal() {
    const modal = new bootstrap.Modal(document.getElementById('successful'));
    modal.show();

    setTimeout(() => {
        window.location.href = "preferred-lang.html";
    }, 3000);
}