const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(urlParams);

const url = `https://symziivzktkqwdifbaap.supabase.co/rest/v1/products?id=eq.${id}`;

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bXppaXZ6a3RrcXdkaWZiYWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTk2NjQsImV4cCI6MjA0MTUzNTY2NH0.jnqs_SZqG2ry9d4WiNown_yXJAmzVQ_K_FX8kFI1zr8";

function getProduct() {
  fetch(url, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then(visProdukter);
}

function visProdukter(produkter) {
  console.log("produkter", produkter);
  const produkt = produkter[0];

  document.querySelector("h2").textContent = produkt.produktnavn;
  document.querySelector(".brand").textContent = produkt.brand;
  document.querySelector(".objektkode").textContent = produkt.Objektkode;
}

getProduct();
