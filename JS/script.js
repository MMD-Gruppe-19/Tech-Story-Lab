const url = "https://github.com/MMD-Gruppe-19/Tech-Story-Lab.git";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bXppaXZ6a3RrcXdkaWZiYWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTk2NjQsImV4cCI6MjA0MTUzNTY2NH0.jnqs_SZqG2ry9d4WiNown_yXJAmzVQ_K_FX8kFI1zr8";


fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
