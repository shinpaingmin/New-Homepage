const hamburgerMenu = document.querySelector(".hamburger_menu_item");
const menu = document.querySelector(".flexContainer_menu");

hamburgerMenu.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        hamburgerMenu.setAttribute("area-expanded", true)
    } else {
        menu.setAttribute("data-visible", false);
        hamburgerMenu.setAttribute("area-expanded", false)
    }
})