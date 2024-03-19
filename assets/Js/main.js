let btn_icon = document.querySelector(".btn_icon");
let navbar = document.querySelector(" header .container nav");

btn_icon.onclick = _ => navbar.classList.toggle("active")

//---------------------------------------------------------------
let btn_scroll = document.querySelector("#btn_Scroll_top button");
// --------------  Show Btn When Scroll --------------
window.onscroll = _ => {
  if (window.scrollY > 700) btn_scroll.classList.add("active");
  else btn_scroll.classList.remove("active");
};
// ---------  Go To Top Page When Click On Button -------
btn_scroll.onclick = _ =>   window.scrollTo({ top: 0, behavior: "smooth"})  

