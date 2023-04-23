async function incrementCount() {
  const response = await fetch('https://api.countapi.xyz/hit/namespace/piyushgupta.me');
  const data = await response.json();
  const countSpan = document.getElementById('count');
  countSpan.textContent = data.value;
}
