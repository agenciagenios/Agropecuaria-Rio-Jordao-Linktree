function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!name || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  const url = `https://wa.me/+556194378906?text=Olá,%20me%20chamo%20${encodeURIComponent(name)}.%0A%0A${encodeURIComponent(message)}`;
  window.location.href = url;
}
