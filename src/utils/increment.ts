async function incrementCount() {
  const response = await fetch('https://api.countapi.xyz/hit/namespace/piyushgupta.me');
  const data = await response.json();
  console.log(data.value);
}
