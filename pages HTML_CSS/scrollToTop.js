window.onscroll = function() {
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
      scrollBtn.classList.add("show"); // Affiche le bouton
    } else {
      scrollBtn.classList.remove("show"); // Cache le bouton
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Remonte doucement en haut
  }