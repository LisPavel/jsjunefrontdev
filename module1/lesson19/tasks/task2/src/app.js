export default function App() {
  const { body } = document;
  const cookieAccepted = localStorage.getItem("cookieAccepted");
  const cookieConsent = body.querySelector(".cookie-consent");
  if (cookieAccepted) {
    cookieConsent.classList.add("hide");
    return;
  }

  const btn = cookieConsent.querySelector(".cookie-consent__button");
  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    cookieConsent.classList.add("hide");
    localStorage.setItem("cookieAccepted", "true");
  });
  window.addEventListener("storage", (ev) => {
    if (ev.key !== "cookieAccepted") return;
    cookieConsent.classList.add("hide");
  });
}
