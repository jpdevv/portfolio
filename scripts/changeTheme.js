document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme");
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        body.classList.add(savedTheme); // Aplica o tema salvo
    } else {
        body.classList.add("dark-theme"); // Define um tema padrão
    }

    // Alterna o tema ao clicar no botão
    themeButton.addEventListener("click", () => {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme"); // Salva a escolha no localStorage
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme"); // Salva a escolha no localStorage
        }
    });
});
