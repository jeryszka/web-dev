

const budujListe = (tab) => {
    return tab.map( ({nazwa, cena, latwa}) => `
        <li class = "${latwa == true ? "wyrozniony" : ""}">
         ${nazwa} - ${cena} zł
        </li>
    `
    ).join("")
}



document.querySelector("#lista").innerHTML = budujListe(rosliny)