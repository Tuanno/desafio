// Menu Mobile
function showMenu() {
    let menuMobile = document.querySelector('.menu-mobile');
    let menuIconOpen = document.querySelector('.fa-bars');
    let menuIconClose = document.querySelector('.fa-xmark');
  
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
  
      menuIconOpen.classList.remove('closeMenuIcon');
      menuIconClose.classList.add('closeMenuIcon');
    } else {
      menuMobile.classList.add('open');
  
      menuIconOpen.classList.add('closeMenuIcon');
      menuIconClose.classList.remove('closeMenuIcon');
    }
  }



// About us Tab
function getAboutUs(){
    fetch('https://www.mdsystemweb.com.br/projects/api/v1/test/about.php')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// Services
function getServicesUs(){
  fetch('https://www.mdsystemweb.com.br/projects/api/v1/test/services.php')
      .then((response) => response.json())
      .then((data) => console.log(data));
}


