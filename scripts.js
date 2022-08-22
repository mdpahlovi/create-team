// Player Object
const messi = { name: "Lionel Messi", img: "img/messi.png", goal: 36, assist: 120 };
const neymar = { name: "Neymar Jr", img: "img/neymar.png", goal: 50, assist: 170 };
const mbappe = { name: "Kylian Mbappe", img: "img/mbappe.png", goal: 38, assist: 160 };
const vitor = { name: "Vitor Machado", img: "img/machado.png", goal: 34, assist: 130 };
const ramos = { name: "Sergio Ramos", img: "img/ramos.png", goal: 21, assist: 177 };
const sanches = { name: "Renota Sanches", img: "img/sanches.png", goal: 12, assist: 134 };

// Object Array
const playerArray = [messi, neymar, mbappe, vitor, ramos, sanches];

// Player Card Function
function playerCard(player) {
    const playerCardContainer = document.getElementById("playerCardContainer");
    const stringifiedObj = JSON.stringify(player);
    const div = document.createElement("div");
    div.classList.add("bg-dark", "rounded");
    div.innerHTML = `
        <img src=${player.img} alt="" />
        <div class="text-center text-light">
            <h3 class="mt-2 text-2xl font-bold">${player.name}</h3>
            <p>${player.goal} Goals . ${player.assist} Assist</p>
            <button id="${player.name}" class="mt-2 mb-4 btn btn-primary" onclick='select(${stringifiedObj})'>Select</button>
        </div>`;
    playerCardContainer.appendChild(div);
}

// Player Card Function Called
function displayAllCard(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        playerCard(element);
    }
}

// Player Object Array Called
displayAllCard(playerArray);
