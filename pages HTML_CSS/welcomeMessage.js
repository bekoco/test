function displayWelcomeMessage() {
    const now = new Date();
    const hours = now.getHours();
    let message = "";
  
    if (hours >= 4 && hours < 11) {
      message = "Quoi, si tôt le matin ?! Alors le lait avec les céréales ou les céréales avant le lait ?";
    } else if (hours >= 11 && hours < 16) {
      message = "Salut et bienvenue, 1 heure de pause pour manger, tu es plutôt riz/dinde ou un bon Burgouzz ?";
    } else if (hours >= 16 && hours < 19) {
      message = "Hello, oublie pas tes pépitos pour rester en pleine forme toute l'après-midi !";
    } else if (hours >= 19 || hours < 4) {
      message = "Bonsoir à toi jeune aventurier, c'est l'heure de t'entraîner pour gagner le tournoi du week-end !";
    }
  
    // Créer un overlay pour bloquer l'accès au reste de la page
    const overlay = document.createElement('div');
    overlay.id = 'welcome-overlay';
    overlay.innerHTML = `
      <div id="welcome-popup">
        <p>${message}</p>
        <button id="close-popup-btn">Fermer</button>
      </div>
    `;
    
    document.body.appendChild(overlay);
  
    // Ajout de l'événement pour fermer le popup
    document.getElementById("close-popup-btn").onclick = function() {
      document.getElementById('welcome-overlay').style.display = 'none';
    };
  }
  
  document.addEventListener("DOMContentLoaded", displayWelcomeMessage);
  