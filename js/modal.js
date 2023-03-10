(() => {
  const forms = {
    openFormBtn: document.querySelector("[data-form-open]"),
    closeFormBtn: document.querySelector("[data-form-close]"),
    form: document.querySelector("[data-form]"),
  };

  forms.openFormBtn.addEventListener("click", toggleForm);
  forms.closeFormBtn.addEventListener("click", toggleForm);

  function toggleForm() {
    forms.form.classList.toggle("is-hidden");
  }
})();