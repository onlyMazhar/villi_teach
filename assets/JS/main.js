
// FAQ function
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {

        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".icon").innerHTML = "&#8594;";
            }
        });

        item.classList.toggle("active");

        const icon = item.querySelector(".icon");
        icon.innerHTML = item.classList.contains("active") ? "&#8593;" : "&#8594;";
    });
});

// contact form validation
const form = document.getElementById("contactForm");
const errorText = document.getElementById("formError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!email.includes("@") || !email.includes(".")) {
        errorText.textContent = "Please enter a valid email address.";
        return;
    }

    if (phone.length < 7) {
        errorText.textContent = "Please enter a valid phone number.";
        return;
    }

    errorText.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
});

