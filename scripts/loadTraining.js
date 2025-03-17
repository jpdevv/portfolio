document.addEventListener('DOMContentLoaded', async () => {
    const trainingContainer = document.getElementById('training');

    try {
        // Fazendo o fetch do JSON
        const response = await fetch("../src/util/training.json"); // Caminho do seu JSON
        const data = await response.json();

        // Itera sobre os cursos
        data.name.forEach((curso, index) => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("curso");
            courseDiv.classList.add("hover");

            // Cria o link com a URL do curso
            const courseLink = document.createElement("a");
            courseLink.href = data.link[index];
            courseLink.target = "_blank"; // Para abrir em uma nova aba

            // Cria o parágrafo com o nome do curso
            const courseText = document.createElement("p");
            courseText.textContent = curso;

            // Adiciona o parágrafo ao link
            courseLink.appendChild(courseText);

            // Adiciona o link à div do curso
            courseDiv.appendChild(courseLink);

            // Adiciona a div do curso ao container
            trainingContainer.appendChild(courseDiv);
        });
    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
    }
});
