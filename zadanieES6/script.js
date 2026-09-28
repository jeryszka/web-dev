var skillListBox = document.getElementById("skillList"); 
const skills = ["HTML", "CSS", "JavaScript", "SQL", "Git", "Praca w zespole"]; 

skills.forEach((skill) => {
    let newSkill = document.createElement("li");
    newSkill.textContent = skill;
    newSkill.classList.add("skill-badge");
    skillListBox.appendChild(newSkill);
});

const form = document.getElementById("contactForm");
const komunikatBox = document.getElementById("komunikat");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    komunikatBox.textContent = "";
    komunikatBox.style.color = "";

    if (name === "") {
        komunikatBox.textContent = "Błąd: Pole 'Imię' nie może być puste.";
        komunikatBox.style.color = "red";
        return;
    }

    if (email === "") {
        komunikatBox.textContent = "Błąd: Pole 'E-mail' nie może być puste.";
        komunikatBox.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)) {
        komunikatBox.textContent = "Błąd: Wprowadzony adres e-mail jest nieprawidłowy.";
        komunikatBox.style.color = "red";
        return;
    }

    if (topic === "") {
        komunikatBox.textContent = "Błąd: Musisz wybrać temat wiadomości.";
        komunikatBox.style.color = "red";
        return;
    }

    if (message === "") {
        komunikatBox.textContent = "Błąd: Treść wiadomości nie może być pusta.";
        komunikatBox.style.color = "red";
        return;
    }

    komunikatBox.textContent = "Sukces! Formularz został wysłany poprawnie.";
    komunikatBox.style.color = "green";

    form.reset();
});

const themeButton = document.querySelector(".changeColorButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Jasny motyw";
    } else {
        themeButton.textContent = "Zmień motyw";
    }
});