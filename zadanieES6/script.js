import { skills } from "./dane.js";

const budujListe = (lista) =>
    lista
        .map(({ nazwa, poziom }) => `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5">
                    ${"●".repeat(poziom)}${"○".repeat(5 - poziom)}
                </span>
            </li>
        `)
        .join("");

const listaEl = document.querySelector("#lista-umiejetnosci");

listaEl.innerHTML = budujListe(skills);

const form = document.getElementById("contactForm");
const komunikatBox = document.getElementById("komunikat");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const dane = Object.fromEntries(new FormData(form));

    const {name, email, topic, message} = dane;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    komunikatBox.textContent = "";
    komunikatBox.style.color = "";

    if (name.trim() === "") {
        komunikatBox.textContent = "Błąd: Pole 'Imię' nie może być puste.";
        komunikatBox.style.color = "red";
        return;
    }

    if (email.trim() === "") {
        komunikatBox.textContent = "Błąd: Pole 'E-mail' nie może być puste.";
        komunikatBox.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)) {
        komunikatBox.textContent = "Błąd: Wprowadzony adres e-mail jest nieprawidłowy.";
        komunikatBox.style.color = "red";
        return;
    }

    if (topic.trim() === "") {
        komunikatBox.textContent = "Błąd: Musisz wybrać temat wiadomości.";
        komunikatBox.style.color = "red";
        return;
    }

    if (message.trim() === "") {
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