const btn = document.querySelector(".btn");
const coupon = document.querySelector('.coupon');
function copyText() {
    
    coupon.select();
    coupon.setSelectionRange(0, 99999);
    document.execCommand('copy');
  
     btn.textContent = "copied!!!"
     setTimeout(() => {
        btn.textContent = "copy";
     }, 3000);
};
btn.addEventListener("click",copyText );