document.addEventListener("DOMContentLoaded", () => {
    fetch("../src/util/projects.json")
        .then(response => response.json())
        .then(jsonData => {
            const projectsContainer = document.querySelector(".projects");

            jsonData.projects.forEach(project => {
                if (!project.title) return; // Ignorar projetos vazios

                const projectElement = document.createElement("div");
                projectElement.classList.add("project", "hover");

                projectElement.innerHTML = `
                    <a href="${project.link}" ${project.link ? '' : 'onclick="return false;"'} target="_blank">
                        <div class="top-infos">
                            <div class="infos">
                                <div class="title">
                                    <h1>${project.title}</h1>
                                    <h2>${project.status}</h2>
                                </div>
                                <div class="tools">
                                    ${project.tools.map(tool => `<img src="${tool}" alt="Tool Icon">`).join(" ")}
                                </div>
                            </div>
                            <div class="img" style="background-image: url('${project.img}');"></div>
                        </div>
                        <div class="description">
                            <p>${project.description}</p>
                        </div>
                    </a>
                `;

                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error("Erro ao carregar o JSON:", error));
});