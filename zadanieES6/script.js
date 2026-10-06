import { skills, ADRES_API } from "./dane.js";

import {
    budujListe,
    filtrujPoKategorii,
    podsumowanie
} from "./umiejetnosci.js";

const listaEl = document.querySelector("#lista-umiejetnosci");
const podsumowanieEl = document.querySelector("#podsumowanie");
const filtryEl = document.querySelector("#filtry");

const pokazUmiejetnosci = (kategoria = "wszystkie") => {
    const wybrane = filtrujPoKategorii(skills, kategoria);

    listaEl.innerHTML = budujListe(wybrane);
    podsumowanieEl.textContent = podsumowanie(wybrane);
};

filtryEl.addEventListener("click", (event) => {
    const przycisk = event.target.closest("button");

    if (!przycisk) {
        return;
    }

    filtryEl.querySelectorAll("button").forEach(b =>
        b.classList.remove("aktywny")
    );

    przycisk.classList.add("aktywny");

    pokazUmiejetnosci(przycisk.dataset.kategoria);
});

pokazUmiejetnosci();

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