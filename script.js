setInterval(setHorloge, 1000);

const flecheHeures = document.querySelector("[data-heure-fleche]");
const flecheMinutes = document.querySelector("[data-minute-fleche]");
const flecheSecondes = document.querySelector("[data-seconde-fleche]");

function setHorloge() {
    const dateActuelle = new Date();
    const secondes = dateActuelle.getSeconds() / 60;
    const minutes = (secondes + dateActuelle.getMinutes()) / 60;
    const heures = (minutes + dateActuelle.getHours()) / 12;

    setRotation(flecheHeures, heures);
    setRotation(flecheMinutes, minutes);
    setRotation(flecheSecondes, secondes);
}

function setRotation(element, pourcentatgeRotation) {
    element.style.setProperty("--rotation", pourcentatgeRotation * 360);
}

setHorloge();