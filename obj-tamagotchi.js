let tamogucci = {
    hunger: 4,
    energy: 4,
    mood: 4
};

const estado = document.getElementById("mostrarEstado");

document.getElementById("btnPlay").addEventListener("click", play);
document.getElementById("btnEat").addEventListener("click", eat);
document.getElementById("btnSleep").addEventListener("click", sleep);

function play() {
    tamogucci.hunger++;
    tamogucci.mood++;
    tamogucci.energy--;

    knowStatus();
}

function eat() {
    tamogucci.hunger -= 2;
    tamogucci.energy--;

    knowStatus();
}

function sleep() {
    tamogucci.energy += 2;

    knowStatus();
}

function knowStatus() {
    if (tamogucci.energy === 0) {
        estado.textContent = "(-_-) zZZ (dormido)"; // Dormido
        tamogucci.energy += 3; // Recuperar energía automáticamente
        return;
    }

    if (tamogucci.energy < 3) {
        estado.textContent = "(-_-) (cansado)"; // Cansado
    } else if (tamogucci.mood > 8) {
        estado.textContent = ":-) (contento) "; // Contento
    } else if (tamogucci.mood < 2) {
        estado.textContent = "ఠ_ఠ (enfadado)"; // Enfadado
    } else {
        estado.textContent = ":-| (normal)"; // Normal
    }
}
