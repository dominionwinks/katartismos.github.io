const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector(".nav-list")
const acc = document.querySelector('.accommodation');
const reg = document.querySelector('.register');
const hero = document.querySelector('.hero');



const goToRegister = () => {
  hero.style.display = "none";
  register.style.display = "block";
};

if (hamburger) {
  hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('open');
  })
}
acc.addEventListener('click', ()=>{
  
})
