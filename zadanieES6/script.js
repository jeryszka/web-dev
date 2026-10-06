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

const filtrujPoKategorii = (lista, kategoria) =>
    kategoria === "wszystkie"
        ? [...lista]
        : lista.filter(u => u.kategoria === kategoria);

const sredniPoziom = (lista) => {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce((razem, { poziom }) => razem + poziom, 0);

    return Math.round((suma / lista.length) * 10) / 10;
};

const podsumowanie = (lista) =>
    lista.length === 0
        ? "Brak umiejętności w tej kategorii."
        : `Umiejętności: ${lista.length} · średni poziom: ${sredniPoziom(lista)}`;

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