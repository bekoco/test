// Fonction pour démarrer un compte à rebours
function startCountdown(id, endDate) {
    const countdownElement = document.getElementById(id);
    const countdownInterval = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = new Date(endDate).getTime() - now;
  
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Le tournoi a commencé !";
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = days + "j " + hours + "h " 
          + minutes + "m " + seconds + "s ";
      }
    }, 1000);
  }
  
  // Démarrage des comptes à rebours pour chaque tournoi
  document.addEventListener("DOMContentLoaded", function() {
    startCountdown("countdown-lol", "Sep 21, 2024 19:00:00");
    startCountdown("countdown-rl", "Sep 21, 2024 21:00:00");
    startCountdown("countdown-cod", "Sep 22, 2024 14:00:00");
    // Ajoutez d'autres appels pour les autres tournois
  });

  
  