const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Formulaire de démonstration : prépare un e-mail, sans envoyer de données à un serveur.
// Remplace l'adresse ci-dessous par l'adresse professionnelle de Réani'Tech.
const BUSINESS_EMAIL = "REMPLACE-MOI-PAR-TON-EMAIL";

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name");
  const email = form.get("email");
  const service = form.get("service");
  const message = form.get("message");
  const feedback = document.querySelector("#form-feedback");

  if (BUSINESS_EMAIL.startsWith("REMPLACE")) {
    feedback.textContent = "Le formulaire est prêt : ajoute d'abord ton adresse e-mail dans script.js.";
    return;
  }

  const subject = encodeURIComponent(`Demande Réani'Tech — ${service}`);
  const body = encodeURIComponent(
    `Nom : ${name}\nE-mail : ${email}\nPrestation : ${service}\n\nDemande :\n${message}`
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  feedback.textContent = "Ton application e-mail va s'ouvrir pour préparer le message.";
});
