const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) =>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0 ;
        setColor();
    }
});
function setColor(){
    if(count.innerHTML > 0){
        count.style.background= "green";
    }
    else if(count.innerHTML < 0){
        count.style.background = "red";
    }
    else{
        count.style.background = "yellow";
    }
}
// add.addEventListener("click", () =>{
//     count.innerHTML++;
//     setColor();
// })
// subtract.addEventListener("click", () =>{
//     count.innerHTML--;
   
//     setColor();
// })
// reset.addEventListener("click", () =>{
//     count.innerHTML = 0 ;
//     setColor();
// })
// let countEl = document.getElementById("counte")
// let count = 0
// function increase(){
//  count = count + 1
//  countEl.innerText = count

//  if(count>0){
//     document.body.style.background = "red ";  
//  }  else {
//     document.body.style.background = "#284b63 ";
//  }
// }

// function decrease(){
    
//     count = count - 1
//     countEl.innerHTML = count
//     if(count<0){
//         document.body.style.background = "green ";  
//      }  else {
//         document.body.style.background = "#284b63 ";
//      }
//    }

//    function reset(){
//     count = 0
//     countEl.innerText = count
//    }
