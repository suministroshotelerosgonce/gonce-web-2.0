const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector('select[name="producto"]');
    if (select) {
      select.value = link.dataset.product;
    }
  });
});

const quoteForm = document.querySelector(".quote-form");
const formStatus = document.querySelector(".form-status");

quoteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = quoteForm.querySelector('button[type="submit"]');
  const formData = new FormData(quoteForm);

  formStatus.textContent = "Enviando solicitud...";
  submitButton.disabled = true;

  try {
    const response = await fetch(quoteForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No se pudo enviar la solicitud.");
    }

    quoteForm.reset();
    formStatus.textContent =
      "Solicitud recibida. Te contactaremos lo antes posible.";
  } catch (error) {
    formStatus.textContent =
      "No pudimos enviar la solicitud. Por favor intenta nuevamente o escríbenos por WhatsApp.";
  } finally {
    submitButton.disabled = false;
  }
});
