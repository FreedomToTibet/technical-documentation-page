document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon-line').classList.toggle('menu-icon-active');
  document.querySelector('#nav-bar').classList.toggle('nav-bar-active');
}