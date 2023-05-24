const btnItem = document.querySelectorAll(".tabs__btn-item")
const content = document.querySelectorAll(".tabs__content-item")

btnItem.forEach((el)=>{
   el.addEventListener("click", changeContent)
})

function changeContent (el){
   const targetTab = el.currentTarget;
   const button = targetTab.dataset.button;

   btnItem.forEach((el)=>{
      el.classList.remove("tabs__btn-item--active")
   });
   content.forEach((el)=>{
      el.classList.remove("tabs__content-item--active")
   });
   targetTab.classList.add("tabs__btn-item--active")
   document.querySelector(`#${button}`).classList.add("tabs__content-item--active")
}

/*________________________________BURDER MENU_________________________ */
   
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu")

menuBtn.addEventListener("click", function(){
   menu.classList.toggle("menu-active")
})

//_____________SCROLL TO TOP____________________

const btnToTop = document.querySelector(".btn-top");
window.onscroll = function(){scroll()}
btnToTop.addEventListener("click", function(){
   document.documentElement.scrollTop = 0;
});

function scroll (){
   if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      btnToTop.style.display = "block"
   }
   else{
      btnToTop.style.display = "none"
   }
}

