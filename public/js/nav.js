const userMenu = document.querySelector(".user-menu");

userMenu.addEventListener("click", function () {
    const userMenuOptions = document.querySelector(".user-menu-options");
    if (
        userMenuOptions.style.height == "0px" ||
        !userMenuOptions.style.height
    ) {
        userMenuOptions.style.height = "auto";
        arrow.style.rotate = "90px";
    } else {
        userMenuOptions.style.height = "0px";
    }
});
