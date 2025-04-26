document.getElementById('va-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('agent-name');
  const name = nameInput.value.trim();
  const error = document.getElementById('error');

  // Validate name (1–25 characters, letters/numbers only)
  if (!/^[A-Za-z0-9]{1,25}$/.test(name)) {
    error.classList.remove('hidden');
    error.textContent = 'Error: Name must be 1-25 characters, letters or numbers only.';
    return;
  }

  // Check if an agent already exists
  if (localStorage.getItem('voidAgent')) {
    error.classList.remove('hidden');
    error.textContent = 'Error: Agent already exists. Clear browser data to register again.';
    return;
  }

  // Generate random agent ID
  const id = 'VA-749-' + Math.floor(1000 + Math.random() * 9000);

  // Save agent data
  const agent = { agentName: name, agentId: id };
  localStorage.setItem('voidAgent', JSON.stringify(agent));
  localStorage.setItem('voidAgentName', name);
  localStorage.setItem('voidAgentId', id);

  // Redirect to secret room
  window.location.href = 'va-initiate.html';
});