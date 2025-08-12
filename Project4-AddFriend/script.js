var islate = document.querySelector("h5");
var btn=document.querySelector("#add");
var check=0;

 btn.addEventListener("click", function()
 { if(check==0){
    islate.innerHTML = "Friends👤", 
    islate.style.color="red"
    btn.innerHTML="Remove Friend"
    check=1}
    else{
islate.innerHTML = "Corn Industries"
    islate.style.color=" rgb(30, 143, 230"
    btn.innerHTML="Friend"
    check=0
 }
});
 