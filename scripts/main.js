const fact = document.getElementById("fact")
loadFact();

async function loadFact(){
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();

  console.log(data);
  fact.textContent = data.fact
}
