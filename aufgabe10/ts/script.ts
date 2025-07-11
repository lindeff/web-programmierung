const questionElement = document.getElementById("question")!;
const input = document.getElementById("name-input") as HTMLInputElement;

document.getElementById("name-form")?.addEventListener("submit", (event) => {
    event.preventDefault()
    questionElement.style.display = "none";

    const userNameElement = document.getElementById("user-name");
    if (userNameElement) {
        userNameElement.textContent = input.value;
    }
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.style.display = "block";
    }
});