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

// Clicked Add & Disabled li
function select(obj) {
    const listItem = document.getElementsByClassName("list-decimal");
    if (listItem.length < 5) {
        const listContainer = document.getElementById("list-container");
        const li = document.createElement("li");
        li.classList.add("list-decimal");
        li.innerHTML = `
        <h3 class="font-semibold">${obj.name}</h3>`;
        listContainer.appendChild(li);

        // Button Disabled
        const selectBtn = document.getElementById(obj.name);
        selectBtn.style.pointerEvents = "none";
        selectBtn.style.backgroundColor = "#F1F1F1";
        selectBtn.style.color = "#0F3D3E";
    } else {
        alert("You All Ready Select 5 Player");
    }
}

// Total Player Cost
document.getElementById("player-cost-btn").addEventListener("click", function () {
    const perPlayerCost = cost("per-player");
    const listContainer = document.getElementById("list-container");
    if (listContainer.innerHTML == "") {
        alert("Please Add Player First");
    } else {
        const listItem = document.getElementsByClassName("list-decimal");
        const totalPlayerCost = perPlayerCost * listItem.length;
        document.getElementById("total-player-cost").innerText = totalPlayerCost;
    }
});

// Total Cost
document.getElementById("total-cost-btn").addEventListener("click", function () {
    const managerCost = cost("manager");
    const coachCost = cost("coach");
    const totalPlayerCost = parseInt(document.getElementById("total-player-cost").innerText);
    if (totalPlayerCost == 0) {
        alert("Please First Calculate Total Player Cost");
    } else {
        let totalCost = managerCost + coachCost + totalPlayerCost;
        document.getElementById("total-cost").innerText = totalCost;
    }
});
