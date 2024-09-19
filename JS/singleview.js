const urlParams = new URLSearchParams(window.location.search);
const Objektkode = urlParams.get("Objektkode");
console.log(urlParams);
const url = `https://symziivzktkqwdifbaap.supabase.co/rest/v1/products/${Objektkode}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  document.querySelector("h2").textContent = produkt.produktnavn;
  document.querySelector(".brand").textContent = produkt.brand;
  document.querySelector(".objektkode").textContent = produkt.Objektkode;
}

getProduct();
