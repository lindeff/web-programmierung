var _a;
var questionElement = document.getElementById("question");
var input = document.getElementById("name-input");
(_a = document.getElementById("name-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    questionElement.style.display = "none";
    document.getElementById("user-name").textContent = input.value;
    document.getElementById("greeting").style.display = "block";
});
