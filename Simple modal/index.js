// Form
document.getElementById('sign-in-btn').onclick = () => {
  document.getElementById('backdrop').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('backdrop').classList.add('hidden');
}

const backdrop = document.getElementById('backdrop');
backdrop.onclick = (e) => {
  if (e.target === backdrop) {
    closeModal();
  }
}
