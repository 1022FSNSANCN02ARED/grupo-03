const userMenu = document.querySelector(".user-menu");

if (userMenu) {
    userMenu.addEventListener("click", function () {
        const userMenuOptions = document.querySelector(".user-menu-options");
        if (
            userMenuOptions.style.height == "0px" ||
            !userMenuOptions.style.height
        ) {
            userMenuOptions.style.height = "auto";
        } else {
            userMenuOptions.style.height = "0px";
        }
    });
}

const burguerMenu = document.querySelector(".burguer-menu");

burguerMenu.addEventListener("click", function () {
    const burguerMenuOptions = document.querySelector(".burguer-menu-options");
    if (
        burguerMenuOptions.style.height == "0px" ||
        !burguerMenuOptions.style.height
    ) {
        burguerMenuOptions.style.height = "auto";
    } else {
        burguerMenuOptions.style.height = "0px";
    }
});

const burguerUserMenu = document.querySelector(".burguer-user-menu");

if (burguerUserMenu) {
    burguerUserMenu.addEventListener("click", function () {
        const burguerUserMenuOptions = document.querySelector(
            ".burguer-user-menu-options"
        );
        if (
            burguerUserMenuOptions.style.height == "0px" ||
            !burguerUserMenuOptions.style.height
        ) {
            burguerUserMenuOptions.style.height = "auto";
        } else {
            burguerUserMenuOptions.style.height = "0";
        }
    });
}
