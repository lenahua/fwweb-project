// let header = document.querySelector("header");

// window.addEventListener("scroll", () =>{
//     if(window.pageYOffset != 0){
//         header.style.backgroundColor = "white";
//     } else{
//         header.style ="";
//     }
// })

//279 video

// goTop btn
let goTop = document.getElementById("gotop");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        goTop.style.display = "block";
    } else{
        goTop.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// // message click
// var message,x;
// window.onload=function(){
//     message=document.getElementById("message");
//     x=document.getElementById("x");
// }
// function showMessage(){
//     message.style.display="block";
    
// }
// function hideMessage(){
//     message.style.display="none";
// }

// let clickMessage = document.getElementById("clickMessage");
// window.onscroll = function(){hideClickMessage()};
// function hideClickMessage(){
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop>100){
//         clickMessage.style.display = "none";
//     } else{
//         clickMessage.style.display = "block";
//     }
// }
var appoint, x;
window.onload = function(){
  appoint = document.getElementById("showForm");
  x = document.getElementById("x");
}
function showAppointForm(){
  appoint.style.display = "block";
}
function hideAppointForm(){
  appoint.style.display = "none";
}

