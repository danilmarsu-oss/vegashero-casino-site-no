const updatedDate = document.getElementById("updated-date");

if (updatedDate) {
  const today = new Date();
  updatedDate.textContent = new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(today);
}

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const expanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const panel = item.nextElementSibling;
      if (panel) {
        panel.hidden = true;
      }
    });

    button.setAttribute("aria-expanded", String(!expanded));
    if (answer) {
      answer.hidden = expanded;
    }
  });
});
