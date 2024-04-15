let menu = document.querySelector(".document-menu");
let yanMenu = document.querySelector(".document-menuleft");
let exit = document.querySelector(".exit");
let body = document.querySelector("body");
let main = document.querySelector(".document-submit");
let show = document.querySelector(".document-form");
menu.addEventListener("click",function(e)
{
    let menuLeft = e.target;
    menuLeft.style.opacity = "0";
    yanMenu.style.opacity = "1";
    yanMenu.style["z-index"] = "5";
});
exit.addEventListener("click",function()
{
    menu.style.opacity = "1";
    yanMenu.style.opacity = "0";
    yanMenu.style["z-index"] = "-5";
});

let register = document.querySelectorAll(".menu-link")[3];
register.addEventListener("click",run);
function run()
{
    body.style.backgroundImage = "none";
    main.style.opacity = "0";
    main.style["pointer-events"] = "none";
    show.style.opacity = "1";
    document.querySelector(".form-btn").style["pointer-events"] = "auto";
}
const yenile = function()
{
    window.location.assign("asp-example.htm");
}
let home = document.querySelector(".document-link");
let yanHome = document.querySelector(".menu-link");
home.addEventListener("click",yenile);
yanHome.addEventListener("click",yenile);
console.log(home,yanHome)



