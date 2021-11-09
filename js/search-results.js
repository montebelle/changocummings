const liClick = document.querySelector(".li-click")
const liShow = document.querySelectorAll(".li-show")
const navSm = document.querySelector(".nav-sm-2")
const manuToggler = document.querySelector(".manu-toggler")
const sign = document.querySelector(".carousel-control-next-icon")

  liClick.addEventListener("click",()=>{
    sign.classList.toggle("sign")
    console.log("clicked")
    liShow.forEach((value)=>{
      value.classList.toggle("li-show-block")
    })
})

manuToggler.addEventListener("click",()=>{
 
    console.log("clicked")
navSm.classList.toggle("nav-sm-2-show") 

document.querySelector(".carousel-indicators") &&
 document.querySelector(".carousel-indicators").classList.toggle("d-none")
});

//search
const searchBtn1Con =document.querySelectorAll(".search-btn1-con")
const searchInput = document.querySelector(".search-input")
const  searchClassAdd = document.querySelector(".li-search")
console.log(searchClassAdd)
const searchBtn1 =document.querySelector(".search-btn1") ;
searchBtn1 && searchBtn1.addEventListener("click",(v)=>{
  
  console.log("clicked")
  searchBtn1Con.forEach((value)=>{
    value.classList.add("shohag")
   
  })
})
searchBtn1.addEventListener("click",()=>{
  console.log("next")
  searchClassAdd.classList.add("search-add")
})
// show result
let searchInputClickLength = 0
searchInput.addEventListener("input",(value)=>{
  searchInputClickLength +=1
  console.log(searchInputClickLength)
  if(searchInputClickLength >=1){
    
    searchBtn1.addEventListener("click",()=>{
 window.location="./page/search-results.html"
    })
  }
})

//seach sm device
const inputSm = document.querySelector(".input-sm")
const searchBtnSm = document.querySelector(".search-btn-sm")
let inputSmClickLength = 0
searchBtnSm.addEventListener("click",()=>{
    inputSmClickLength +=1
  console.log(searchInputClickLength)
  if(inputSmClickLength >=1){
    window.location="./page/search-results.html"
  }
})





