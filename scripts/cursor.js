const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Seleciona todos os elementos com a classe "hover"
const interactiveElements = document.querySelectorAll(".hover");

interactiveElements.forEach(element => {
    element.addEventListener("mouseover", () => cursor.classList.add("cursor-hover"));
    element.addEventListener("mouseout", () => cursor.classList.remove("cursor-hover"));
});
