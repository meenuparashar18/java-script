// const btn = document.querySelector(".btn"); 
// btn.addEventListener("click", function (){
//     const box = document.getElementById("box");
//     box.classList.add("big-box");
//     box.classList.remove("small-box")
    
    
    
// } )
// const box = document.querySelector(".box");


// const paragraphs = document.querySelectorAll('p');
// paragraphs[0].innerText = // console.log(paragraphs);
const box = document.getElementById("box");
const btn = document.querySelector(".btn"); 
btn.addEventListener("click", function (){
    if (box.classList.contains("small-box")) {
       
        box.classList.remove("small-box");
        box.classList.add("big-box");
    } else {
       
        box.classList.remove("big-box");
        box.classList.add("small-box");
    }
})