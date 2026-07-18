const themeButton = document.getElementById("themeButton");

function applyTheme(isDark) {

    document.body.classList.toggle("dark-mode", isDark);

    const icon = themeButton.querySelector("i");

    if (isDark) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        themeButton.title = "Ativar tema claro";
        themeButton.setAttribute("aria-label", "Ativar tema claro");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        themeButton.title = "Ativar tema escuro";
        themeButton.setAttribute("aria-label", "Ativar tema escuro");

    }

}

function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        applyTheme(true);

    } else {

        applyTheme(false);

    }

}

themeButton.addEventListener("click", () => {

    const darkMode = !document.body.classList.contains("dark-mode");

    applyTheme(darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");

});

loadTheme();