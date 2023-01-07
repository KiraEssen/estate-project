function toggle(){
  let menu = document.getElementById("main-menu");
  let open = document.getElementById("lol");

  if(menu.classList.contains("menu_state") && open.classList.contains("open"))
  {
    menu.classList.remove("menu_state");
    open.classList.remove("open");
  }
  else{
    menu.classList.add("menu_state");
    open.classList.add("open");
  }
}
