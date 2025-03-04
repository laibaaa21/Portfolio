document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            formFeedback.innerHTML = `<div class="alert alert-success">Message sent successfully!</div>`;
            form.reset();
        } else {
            formFeedback.innerHTML = `<div class="alert alert-danger">Please fill in all fields correctly.</div>`;
        }

        form.classList.add("was-validated");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active"); 
    });
});

