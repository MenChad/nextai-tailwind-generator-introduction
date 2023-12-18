const form = document.querySelector('#generate-form') as HTMLFormElement;
const iframe = document.getElementById('generatedCode') as HTMLFormElement;
const code = "Le code HTML récupéré depuis l'API";
iframe.srcdoc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... autres éléments du head ... -->
    <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
  </head>
  <body>
    ${code}
  </body>
</html>`
;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const prompt = formData.get('prompt') as string;
  alert(prompt); // Affiche le prompt pour test
});
