const urlParams = new URLSearchParams(window.location.search);
const kategori = (urlParams.get("kategori"));
let url = "https://symziivzktkqwdifbaap.supabase.co/rest/v1/products?kategori=eq." + kategori;

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bXppaXZ6a3RrcXdkaWZiYWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTk2NjQsImV4cCI6MjA0MTUzNTY2NH0.jnqs_SZqG2ry9d4WiNown_yXJAmzVQ_K_FX8kFI1zr8";

const skabelon = document.querySelector("template").content;
const container = document.querySelector(".products");


window.addEventListener("load", hentData);

//Her henter jeg dataen fra supabase
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

//Her har jeg lavet en funktion der viser produkterne afhængigt af hvilken kategori man har klikket på
function visProdukter(produkter) {
    document.querySelector("h2").textContent = kategori; //Viser den kategori man er inde på 
    produkter.forEach((produkt) => {
        console.log(produkt);
        // her kloner jeg min template, så jeg kan få vist flere produkter i stedet for bare det ét 
        const kopi = skabelon.cloneNode(true);
        kopi.querySelector("h3").textContent = produkt.produktnavn;
        kopi.querySelector("p").textContent = produkt.brand;
        kopi.querySelector(".read-more").href = `singleview.html?id=${produkt.Objektkode}`;
        container.appendChild(kopi);
    });
};

