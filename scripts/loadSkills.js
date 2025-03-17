document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fazendo o fetch do JSON
        const response = await fetch("../src/util/skills.json");
        const data = await response.json();

        // Função para criar a estrutura de skills
        const createSkills = (containerId, links, names) => {
            const skillsContainer = document.getElementById(containerId);

            // Verifica se há skills
            if (links.length > 0 && names.length > 0) {
                links.forEach((link, index) => {
                    const skillDiv = document.createElement("div");
                    skillDiv.classList.add("skill");

                    // Cria o elemento de imagem com o link do ícone
                    const iconImg = document.createElement("img");
                    iconImg.src = link;  // Link do ícone

                    // Cria o elemento de texto para o nome da skill
                    const skillText = document.createElement("p");
                    skillText.textContent = names[index];

                    // Adiciona a imagem e o nome à div de skill
                    skillDiv.appendChild(iconImg);
                    skillDiv.appendChild(skillText);

                    // Adiciona a div de skill ao container
                    skillsContainer.appendChild(skillDiv);
                });
            }
        };

        // Chama a função para cada categoria (frontend, backend, etc.)
        createSkills('frontend-skills', data.frontend.link, data.frontend.name);
        createSkills('backend-skills', data.backend.link, data.backend.name);
        createSkills('database-skills', data.database.link, data.database.name);
        createSkills('design-skills', data.design.link, data.design.name);
        createSkills('others-skills', data.others.link, data.others.name);
        
    } catch (error) {
        console.error("Erro ao carregar as skills:", error);
    }
});
