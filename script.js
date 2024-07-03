// special countdown
let day=document.querySelector("#days");
let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
let countDown = () =>{
    let futureDate= new Date("05 July 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    
let d = Math.floor(myDate/ 1000 / 60 / 60 /24);
let h = Math.floor(myDate/ 1000 / 60 / 60) % 24;
let m = Math.floor(myDate/ 1000 / 60 ) % 60;
let s = Math.floor(myDate/ 1000 ) % 60;
 day.innerHTML=d;
 hr.innerHTML=h;
 min.innerHTML=m;
 sec.innerHTML=s;

}
countDown();
setInterval(countDown, 1000);
//scroll
function scrollTopBack (){
    let scrollTopButton = document.querySelector('#scrollUp');
    window.onscroll =function(){
        var scroll=document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollActive');
        }else{
            scrollTopButton.classList.remove('scrollActive');

        }
    }
}
scrollTopBack();
//Hiide nav bar
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})