

const budujListe = (tab) => {
    return tab.map( ({nazwa, cena, latwa}) => `
        <li class = "${latwa == true ? "wyrozniony" : ""}">
         ${nazwa} - ${cena} zł
        </li>
    `
    ).join("")
}

const filtruj = rosliny.filter( ({cena}) => cena < 100);

document.querySelector("#lista").innerHTML = budujListe(filtruj)