const url = "https://symziivzktkqwdifbaap.supabase.co/rest/v1/products";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bXppaXZ6a3RrcXdkaWZiYWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTk2NjQsImV4cCI6MjA0MTUzNTY2NH0.jnqs_SZqG2ry9d4WiNown_yXJAmzVQ_K_FX8kFI1zr8";

fetch(url, {
  method: "GET", //Denne er default GET
  headers: {
    apikey: key, //Vi sender vores key med
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(data) {
  console.log(data);
}

// Jeg har leget lidt med at udtrække unikke objektkoder, så vi kan få et overblik over de forskellige produkter
fetch("https://symziivzktkqwdifbaap.supabase.co/rest/v1/products?select=Objektkode", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json()) // Konverter responsen til JSON
  .then((data) => {
    // Udtræk unikke objektkoder
    const objektkoder = [...new Set(data.map((item) => item.Objektkode))];
    // Udskriv de unikke objektkoder
    console.log(objektkoder);
  });
