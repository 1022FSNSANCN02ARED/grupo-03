const optionProfile = document.querySelectorAll(".option-profile");
const articles = document.querySelectorAll(".profile-article");

optionProfile.forEach((option) => {
    option.addEventListener("click", (e) => {
        const optionSelected = e.target;
        const idSelected = optionSelected.id;

        // Elimina la clase "option-profile-selected" de todos los botónes.
        optionProfile.forEach((option) => {
            if (option.classList.contains("option-profile-selected")) {
                option.classList.remove("option-profile-selected");
            }
        });
        // Se lo agregamos al seleccionado
        if (!optionSelected.classList.contains("option-profile-selected")) {
            optionSelected.classList.add("option-profile-selected");
        }
        // Oculta todos los articles
        articles.forEach((article) => {
            if (!article.classList.contains("hide")) {
                article.classList.add("hide");
            }
        });

        // Muestra el seleccionado
        const articleSelected = document.querySelector(`.${idSelected}`);
        if (articleSelected.classList.contains("hide")) {
            articleSelected.classList.remove("hide");
        }
    });
});
