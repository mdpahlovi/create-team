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
        <img class="w-full" src=${player.img} alt="" />
        <div class="text-center text-light flex flex-col gap-1 mx-4">
            <h3 class="mt-2 text-2xl font-bold">${player.name}</h3>
            <p>${player.goal} Goals . ${player.assist} Assist</p>
            <button id="${player.name}" class="mt-2 mb-4 btn btn-primary" onclick='select(${stringifiedObj})'>Select</button>
        </div>`;
    playerCardContainer.appendChild(div);
}

// Player Card Function Called
playerArray.map((player) => playerCard(player));

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
        selectBtn.classList.add("bg-light", "text-accent");
    } else {
        alert("You All Ready Select 5 Player");
    }
}

// Total Player Cost
document.getElementById("player-cost-btn").addEventListener("click", function () {
    const perPlayerCost = cost("per-player", "Player Cost");
    const listContainer = document.getElementById("list-container");
    if (listContainer.innerHTML == "") {
        alert("Please Add Player First");
    } else {
        const listItem = document.getElementsByClassName("list-decimal");
        const totalPlayerCost = perPlayerCost * listItem.length;
        if (totalPlayerCost != 0) {
            valueOutput("total-player-cost", totalPlayerCost);
        } else {
            valueOutput("total-player-cost");
        }
    }
});

// Total Cost
document.getElementById("total-cost-btn").addEventListener("click", function () {
    const managerCost = cost("manager", "Manager Cost");
    const coachCost = cost("coach", "Coach Cost");
    const totalPlayerCost = parseInt(document.getElementById("total-player-cost").innerText);
    if (totalPlayerCost == 0) {
        alert("Please First Calculate Total Player Cost");
    } else {
        let totalCost = managerCost + coachCost + totalPlayerCost;
        if (managerCost != 0 && coachCost != 0) {
            valueOutput("total-cost", totalCost);
        } else {
            valueOutput("total-cost");
        }
    }
});
