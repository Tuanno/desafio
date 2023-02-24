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

window.onload = function() {
  let descendentes = document.querySelectorAll(".header a");
    
  for (let i = 0; i < descendentes.length; i++) {
    descendentes[i].addEventListener("click", function (event) {
      // alert('O elemento clicado foi o ' + this.innerHTML);
      
      fetch('https://www.mdsystemweb.com.br/projects/api/v1/test/about.php')
        .then((response) => response.json())
        .then((data) => {
          if (this.innerHTML === 'Missão') {
            return document.querySelector('#response').innerText = data[0].description;
          }

          if (this.innerHTML === 'Visão') {
            return document.querySelector('#response').innerText = data[1].description;
          }

          if (this.innerHTML === 'Valores') {
            return document.querySelector('#response').innerHTML = data[2].description;
          }
        });
    })
  }
}

// Services
function getServicesUs(){
  fetch('https://www.mdsystemweb.com.br/projects/api/v1/test/services.php')
      .then((response) => response.json())
      .then((data) => console.log(data));
}