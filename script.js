document.getElementById("calculerBtn").addEventListener("click", () => {
  const rows = document.querySelectorAll("tbody tr");
  let totalNotes = 0;
  let totalCoef = 0;

  rows.forEach((row) => {
    const coef = parseFloat(row.children[1].textContent); // Coefficient
    const note = parseFloat(row.children[2].querySelector("input").value); // Note

    if (!isNaN(coef) && !isNaN(note)) {
      totalNotes += coef * note;
      totalCoef += coef;
    }
  });

  const moyenne = totalCoef ? (totalNotes / totalCoef).toFixed(2) : 0;

  document.getElementById(
    "resultat"
  ).textContent = `La moyenne est : ${moyenne}`;
});
