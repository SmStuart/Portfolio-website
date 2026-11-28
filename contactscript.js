// Mobile navigation and current-year footer.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();


const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    // Clear previous messages
    formStatus.textContent = "";
    formStatus.className = "";

    // Check form validity
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    // Honeypot spam check
    const honeypot = contactForm.querySelector(
        '[name="_gotcha"]'
    );

    if (honeypot.value) {
        return;
    }

    // Loading state
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(
            "https://formspree.io/f/xbgoedkl",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (response.ok) {

            formStatus.textContent =
                "✓ Message sent";

            formStatus.className = "success";

            contactForm.reset();

        } else {

            throw new Error("Submission failed.");

        }

    } catch (error) {

        formStatus.textContent =
            "Something went wrong. Please try again later.";

        formStatus.className = "error";

    } finally {

        submitButton.disabled = false;
        submitButton.textContent = "Send Message →";

    }

});