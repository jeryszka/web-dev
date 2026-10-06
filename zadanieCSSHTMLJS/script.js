const umiejetnosci = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Git",
    "Praca w zespole"
];

const pokazUmiejetnosci = (lista) => {
    const kontener = document.querySelector("#skillList");

    lista.forEach((nazwa) => {
        const element = document.createElement("li");
        element.textContent = nazwa;
        kontener.appendChild(element);
    });
};

pokazUmiejetnosci(umiejetnosci);

const form = document.querySelector("#contactForm");
const komunikatBox = document.querySelector("#komunikat");

const pokazKomunikat = (tresc, rodzaj) => {
    komunikatBox.textContent = tresc;
    komunikatBox.style.color = rodzaj === "blad" ? "red" : "green";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const topic = document.querySelector("#topic").value;
    const message = document.querySelector("#message").value.trim();

    if (name === "") {
        pokazKomunikat("Podaj imię.", "blad");
        return;
    }

    if (email === "") {
        pokazKomunikat("Podaj adres e-mail.", "blad");
        return;
    }

    if (topic === "") {
        pokazKomunikat("Wybierz temat wiadomości.", "blad");
        return;
    }

    if (message === "") {
        pokazKomunikat("Podaj treść wiadomości.", "blad");
        return;
    }

    pokazKomunikat(
        `Dziękuję, ${name}. Wiadomość została przyjęta.`,
        "sukces"
    );

    console.log("Dane z formularza:", {
        name,
        email,
        topic,
        message
    });

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