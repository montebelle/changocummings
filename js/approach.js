const plusBtn = document.querySelectorAll(".plus-btn");
const mBtn = document.querySelector(".m-btn");
const plusBtnStore = document.querySelectorAll(".plus-btn-store")
function btnEvent(number){
    plusBtn[number].addEventListener("click",()=>{
        console.log("hello")
        plusBtnStore[number].classList.toggle("plus-btn-store-add")
    
    
    })
}

btnEvent(0)
btnEvent(1)
btnEvent(2)
btnEvent(3)
btnEvent(4)