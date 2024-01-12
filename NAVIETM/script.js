window.onload = function(){
  const sidebar = document.querySelector(".sidebar-logo");
  const closeBtn = document.querySelector("#btn");


  closeBtn.addEventListener("click",function(){
      sidebar.classList.toggle("open")
      menuBtnChange()
  })

  function menuBtnChange(){
      if(sidebar.classList.contains("open")){
          closeBtn.classList.replace("fa-bars","fa-bars-alt-right")
      }else{
          closeBtn.classList.replace("fa-bars-alt-right","fa-bars")
      }
  }
}
