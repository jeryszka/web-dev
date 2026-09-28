

const budujListe = (tab) => {
    return tab.map( ({nazwa, cena, latwa}) => `
        <li class = "${latwa === true ? "wyrozniony" : ""}">
         ${nazwa} - ${cena} zł
        </li>
    `
    ).join("")
}

const filtruj = rosliny.filter( ({cena}) => cena < 100);

const Podsumowanie = (filtruj) => {
    const lacznaCena = filtruj.reduce(
    (suma, {cena}) => suma + cena, 0)

    return `Roślin: ${filtruj.length} | łączna cena: ${lacznaCena} zł`
}

document.querySelector("#lista").innerHTML = budujListe(filtruj)
document.querySelector("#podsumowanie").innerHTML = Podsumowanie(filtruj)