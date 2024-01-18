const humburger = document.querySelector('#toggle-btn');

humburger.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand")
})