if (!/^[A-Za-z0-9]{1,25}$/.test(name)) {
  error.classList.remove('hidden');
  error.textContent = 'Error: Name must be 1-25 characters, letters or numbers only.';
  return;
}

if (localStorage.getItem('voidAgent')) {
  error.classList.remove('hidden');
  error.textContent = 'Error: Agent already exists. Clear browser data to register again.';
  return;
}

const id = generateId();
const agent = { agentName: name, agentId: id };
localStorage.setItem('voidAgent', JSON.stringify(agent));
window.location.href = '/va-initiate.html';