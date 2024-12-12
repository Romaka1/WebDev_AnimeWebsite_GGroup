document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        let isValid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const contactMethod = document.getElementById("contactMethod");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {
            alert("Please enter your full name.");
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (contactMethod.value === "") {
            alert("Please select a preferred contact method.");
            isValid = false;
        }

        if (message.value.trim() === "") {
            alert("Please enter a message.");
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});