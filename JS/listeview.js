const urlParams = new URLSearchParams(window.location.search);
const kategori = (urlParams.get("kategori"));
let url = "https://symziivzktkqwdifbaap.supabase.co/rest/v1/products?kategori=eq." + kategori;

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bXppaXZ6a3RrcXdkaWZiYWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTk2NjQsImV4cCI6MjA0MTUzNTY2NH0.jnqs_SZqG2ry9d4WiNown_yXJAmzVQ_K_FX8kFI1zr8";

const skabelon = document.querySelector("template").content;
const container = document.querySelector(".products");


window.addEventListener("load", hentData);

function hentData(){
    fetch(url, {
        method: "GET", 
        headers: {
            apikey: key, 
        },
    })
    .then((res) => res.json())
    .then(visProdukter);
}


/* function hentData() {
    fetch(url)
    .then((res) => res.json())
    .then((produkter) => visProdukter(produkter));
} */

function visProdukter(produkter) {
    produkter.forEach((produkt) => {
        console.log(produkt);
        const kopi = skabelon.cloneNode(true);
        kopi.querySelector("img").src = ``;
        kopi.querySelector("h3").textContent = produkt.brand;
        kopi.querySelector("p").textContent = produkt.produktnavn;
        container.appendChild(kopi);
    });
};

/* if (params.has("category")) {
    url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
  } else {
    url = "https://kea-alt-del.dk/t7/api/products";
  } */