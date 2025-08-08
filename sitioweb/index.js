const btnMenu = 
document.getElementById('btnMenu');
const nav = document.getElementById('nav');
const icono = document.getElementById('icono');

btnMenu.addEventListener('click', function(){
 nav.classList.toggle('fullmenu');
    
if(icono.classList.contains('fa-xmark')){
   icono.classList.remove('fa-xmark');
icono.classList.add('fa-bars');
}else{
    icono.classList.add('fa-xmark');
    icono.classList.remove('fa-bars');
    }  
 });