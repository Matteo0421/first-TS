// Ottieni l'elemento HTML con l'id 'container'
const container = document.getElementById('container');

// Assicurati che l'elemento 'container' esista e che non sia null
if (container) {
  // Usa un ciclo for per iterare da 1 a 100
  for (let i = 1; i <= 100; i++) {
    // Inizializza una variabile per la stringa da inserire nell'HTML
    let htmlContent: string;

    // Verifica se il numero è divisibile per 3 e per 5
    if (i % 3 === 0 && i % 5 === 0) {
      htmlContent = `
        <div class="box entrambe">fizzbuzz</div>
      `;
    } else if (i % 5 === 0) {
      htmlContent = `
        <div class="box cinque">buzz</div>
      `;
    } else if (i % 3 === 0) {
      htmlContent = `
        <div class="box tre">fizz</div>
      `;
    } else {
      htmlContent = `
        <div class="box ">${i}</div>
      `;
    }

    // Aggiungi il contenuto HTML al container
    container.innerHTML += htmlContent;
  }
} else {
  console.error("Elemento con id 'container' non trovato.");
}

