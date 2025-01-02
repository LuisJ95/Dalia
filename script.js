document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const message = document.getElementById("message");

    heart.addEventListener("click", function() {
        heart.classList.add("hidden");
        message.classList.remove("hidden");
    });
});