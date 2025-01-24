document.getElementById("calculerBtn").addEventListener("click", () => {
  const rows = document.querySelectorAll("tbody tr");
  let totalNotes = 0;
  let totalCoef = 0;
  let hasError = false;

  rows.forEach((row) => {
    const coef = parseFloat(row.children[1].textContent); // Coefficient
    const noteInput = row.children[2].querySelector("input");
    const note = parseFloat(noteInput.value); // Notevalue 

    // Contrôle de saisie
    if (isNaN(note) || note < 0 || note > 20) {
      hasError = true;
      noteInput.style.borderColor = "red"; // Indiquer une erreur avec une bordure rouge
    } else {
      noteInput.style.borderColor = ""; // Réinitialiser la bordure si valide
      totalNotes += coef * note;
      totalCoef += coef;
    }
  });

  // Affichage d'un message d'erreur ou du résultat
  const resultatDiv = document.getElementById("resultat");
  if (hasError) {
    resultatDiv.textContent =
      "Veuillez saisir des notes valides (entre 0 et 20).";
    resultatDiv.style.color = "red"; // Afficher le message d'erreur en rouge
  } else {
    const moyenne = totalCoef ? (totalNotes / totalCoef).toFixed(2) : 0;
    resultatDiv.textContent = `La moyenne est : ${moyenne}`;
    resultatDiv.style.color = ""; // Réinitialiser la couleur du texte
  }
});
