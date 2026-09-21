// 1. GENEROWANIE LISTY UMIEJĘTNOŚCI
var skillListBox = document.getElementById("skillList"); 
const skills = ["HTML", "CSS", "JavaScript", "SQL", "Git", "Praca w zespole"]; 

skills.forEach(function(skill) {
    let newSkill = document.createElement("li");
    newSkill.textContent = skill;
    newSkill.classList.add("skill-badge");
    skillListBox.appendChild(newSkill);
});

// 2. WALIDACJA FORMULARZA KROK PO KROKU
const form = document.getElementById("contactForm");
const komunikatBox = document.getElementById("komunikat");

form.addEventListener("submit", function(event) {
    // Zatrzymujemy domyślne przeładowanie strony po wysłaniu formularza
    event.preventDefault(); 

    // Pobranie wartości pól i usunięcie zbędnych spacji (trim)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    // Proste wyrażenie regularne do weryfikacji poprawności adresu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Czyszczenie poprzedniego komunikatu i stylów
    komunikatBox.textContent = "";
    komunikatBox.style.color = "";

    // Sprawdzanie warunków po kolei
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

    // Jeśli wszystkie warunki są spełnione:
    komunikatBox.textContent = "Sukces! Formularz został wysłany poprawnie.";
    komunikatBox.style.color = "green";

    // Opcjonalne wyczyszczenie pól formularza po udanym wysłaniu
    form.reset();
});

// 3. OBSŁUGA ZMIANY MOTYWU (DARK MODE)
// Znajdujemy przycisk za pomocą jego klasy
const themeButton = document.querySelector(".changeColorButton");

themeButton.addEventListener("click", function() {
    // toggle() dodaje klasę 'dark-theme' jeśli jej nie ma, lub usuwa jeśli już jest
    document.body.classList.toggle("dark-theme");
    
    // Opcjonalna zmiana tekstu wewnątrz przycisku w zależności od aktywnego trybu
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Jasny motyw";
    } else {
        themeButton.textContent = "Zmień motyw";
    }
});