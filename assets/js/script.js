// Crée une référence à l'élément de tableau
const table = document.createElement("table");
const body = document.querySelector("body");

// Position le body

body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";

// Génère 9 lignes
for (let i = 0; i < 9; i++) {
  const row = document.createElement("tr");
  row.style.display = "flex";

  // Génère 9 (cellules) par ligne

  for (let j = 0; j < 9; j++) {
    let letters = "ABCDEFGH";
    let numbers = "12345678";
    const cell = document.createElement("td");
    cell.style.display = "flex";
    cell.style.justifyContent = "center";
    cell.style.width = "15px";
    cell.style.height = " 15px";
    cell.style.backgroundColor = (i + j) % 2 ? "white" : "black";
    cell.style.border = "0.1px solid black";

    if (j === 0) {
      cell.textContent = numbers[i - 1];
      cell.style.backgroundColor = "white";
      cell.style.border = "white";
    }

    if ((i === 0) & (j > 0)) {
      cell.textContent = letters[j - 1];
      cell.style.backgroundColor = "white";
      cell.style.border = "white";
    }

    row.appendChild(cell);
  }

  // Ajoute la ligne au tableau
  table.appendChild(row);
}

// Ajoute le tableau au document
document.body.appendChild(table);
