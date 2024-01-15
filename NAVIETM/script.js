// window.onload = function(){
//   const sidebar = document.querySelector(".sidebar-logo");
//   const closeBtn = document.querySelector("#btn");


//   closeBtn.addEventListener("click",function(){
//       sidebar.classList.toggle("open")
//       menuBtnChange()
//   })

//   function menuBtnChange(){
//       if(sidebar.classList.contains("open")){
//           closeBtn.classList.replace("fa-bars","fa-bars-alt-right")
//       }else{
//           closeBtn.classList.replace("fa-bars-alt-right","fa-bars")
//       }
//   }
// }

$(document).ready(function(){
    $('.sidebar-dropdown-menu').slideUp('fast')

    $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').click(function(e){
        e.preventDefault()

        $(this).next().slideToggle('fast')
        $(this).parent().toggleClass('focused')
    })
})