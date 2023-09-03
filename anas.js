let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat = document.getElementById('mountains7');
window.onscroll = function(){
  let value = scrollY;
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat = document.getElementById('mountains7');
stars.style.left = value + 'px';
moon.style.top = value * 4 + 'px';
mountains3.style.top = value * 2 + 'px';
mountains4.style.top = value * 1.5 + 'px';
river5.style.top = value  + 'px';
mountains7.style. left= value * 2 + 'px';
mountains7.style. top= value  + 'px';
if(scrollY >= 212.18182373046875){
  document.querySelector('.anas').style.background = 'linear-gradient(#abc5db,#00759d)';
}else{
  document.querySelector('.anas').style.background = 'linear-gradient(#200016,#10001f)';
}
}