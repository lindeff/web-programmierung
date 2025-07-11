let currentDate = new Date();
let textWithCurrentDate = "Heute ist der " + currentDate;

const copyright = document.getElementById("copyright");
let fullText = textWithCurrentDate + "<br>" + "© " + currentDate.getFullYear() + " Mige Lin - Alle Rechte vorbehalten 😊";
copyright.innerHTML = fullText;

const skills = document.getElementById("skills");
skills.addEventListener("click", function () {
    skills.style.textShadow = "2px 2px 4px bisque";
    skills.style.fontStyle = "italic";
})

refreshFsLightbox();