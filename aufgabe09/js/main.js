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

const apiKey = '09d39cea254b700be42abc9ef4150f95';
const city = 'Berlin';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('desc').textContent = data.weather[0].description;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

refreshFsLightbox();
