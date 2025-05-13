document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const toggleBtn = document.getElementById('darkToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }

  // Order form confirmation
  const form = document.getElementById('mealForm');
  const confirmationMsg = document.getElementById('confirmationMsg');
  if (form && confirmationMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      confirmationMsg.classList.remove('hidden');
      form.reset();
    });
  }
});
