const news = document.querySelector(".news-items-2-1 .row-2");
newsData.forEach((value)=>{
 const   newsTemplate =`
 <div class="col-12  pt-1">
 <hr class="news-hr">
 <div class="row">
   <div class="col-lg-10 col-md-8 col-12"><a href="">${value.title}</a></div>
   <div class="col-lg-2 col-md-4 col-12  textSmEnd"><span class="date">${value.date}</span></div>
 </div>

</div>
    `
    news.insertAdjacentHTML("beforebegin",newsTemplate)
 

})

// samll desive news section content
function newsTemplate(){
  const newsRow1 = document.querySelector(".news-items-2-1 .row-1");
newDataSmDevice.forEach((value)=>{
 const   newsTemplate =`
 <div class=" w-100" style="overflow:hidden">
 <a href="#"> <img  style=""  class="w-100" src="${value.img}" alt=""></a>
<div style="margin-left:5px;margin-right:5px">
<a class="py-2" href="#">
 <span class="lg-title mt-2">${value.title}</span>
<span style="color:gray" class="md-title">${value.shortTitle}</span>
<span class="sm-date">${value.date}</span>
</a>
</div>
</div>
    `
    newsRow1.insertAdjacentHTML("beforeend",newsTemplate)
 

})
}
newsTemplate()
//read more
const shohag = document.querySelector(".shohag")
const  readAdd = document.querySelector(".read-add")
console.log(shohag)
const newsReadMore = document.querySelector(".news-read")
newsReadMore.addEventListener("click",()=>{
  console.log("read more")
  newDataSmDevice.forEach((value)=>{
    const   newsTemplate =`
    <div class="col-12  pt-1">
    <hr class="news-hr">
    <div class="row">
      <div class="col-lg-10 col-md-8 col-12"><a href="">${value.title}</a></div>
      <div class="col-lg-2 col-md-4 col-12  textSmEnd"><span class="date">${value.date}</span></div>
    </div>
   
   </div>
       `
      readAdd.insertAdjacentHTML("beforebegin",newsTemplate)
    
   
   })
  
})
