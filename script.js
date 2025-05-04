document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        fetch(form.action, {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(result => {
            form.reset();
            alert("Inquiry submitted successfully!");
        })
        .catch(error => {
            alert("Submission failed. Please try again.");
            console.error("Error:", error);
        });
    });
});
