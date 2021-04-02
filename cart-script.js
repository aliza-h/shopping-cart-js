// Defining page sections/screens
let catalogueDisplay = document.querySelector("#catalogue");
let cartDisplay = document.querySelector("#user-cart");
let paidDisplay = document.querySelector("#complete");

// Defining cart buttons
let hOmnitoolButton = document.querySelector("#h-omnitool");
let hARKButton = document.querySelector("#h-ark");
let hDiveSuitButton = document.querySelector("#h-dive-suit");
let hPowerSuitButton = document.querySelector("#h-power-suit");
let hBatteryPackButton = document.querySelector("#h-battery-pack");
let hTerminalButton = document.querySelector("#h-terminal");
let hTabletButton = document.querySelector("#h-tablet");
let cGel1Button = document.querySelector("#c-gel-1");
let cGel5Button = document.querySelector("#c-gel-5");
let cBlackboxButton = document.querySelector("#c-blackbox");

// Defining page buttons
let viewCartButton = document.querySelector("#view-cart");
let checkoutButton = document.querySelector("#checkout");
let homeButton = document.querySelector("#home-button");


// Creating the catalogue array
let catalogueArray = [
    {
        name: "hOmnitool",
        price: 100
    },
    {
        name: "hARK",
        price: 1000
    },
    {
        name: "hDiveSuit",
        price: 10000
    },
    {
        name: "hPowerSuit",
        price: 12000
    },
    {
        name: "hBatteryPack",
        price: 200
    },
    {
        name: "hTerminal",
        price: 20000
    },
    {
        name: "hTablet",
        price: 200
    },
    {
        name: "cGel1",
        price: 150
    },
    {
        name: "cGel5",
        price: 600
    },
    {
        name: "cBlackbox",
        price: 4000
    }
];

// Creating cart array
let cartArray = [];

/* TEMPLATE:
function addProduct(i) {
    let itemName = catalogueArray[i].name;
    cartArray.push(itemName);
    console.log(itemName);
}
*/

function addOmnitool() {
    let itemName = catalogueArray[0].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addARK() {
    let itemName = catalogueArray[1].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addDiveSuit() {
    let itemName = catalogueArray[2].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addPowerSuit() {
    let itemName = catalogueArray[3].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addBatteryPack() {
    let itemName = catalogueArray[4].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addTerminal() {
    let itemName = catalogueArray[5].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addTablet() {
    let itemName = catalogueArray[6].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addGel1() {
    let itemName = catalogueArray[7].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addGel5() {
    let itemName = catalogueArray[8].name;
    cartArray.push(itemName);
    console.log(itemName);
}

function addBlackbox() {
    let itemName = catalogueArray[9].name;
    cartArray.push(itemName);
    console.log(itemName);
}



// the page functions
function viewCart() {
    catalogueDisplay.remove();
    cartDisplay.style.visibility = "visible";
}

function checkout() {
    cartDisplay.remove();
    paidDisplay.style.visibility = "visible";
}

viewCartButton.addEventListener("click", viewCart);
checkoutButton.addEventListener("click", checkout);



hOmnitoolButton.addEventListener("click", addOmnitool);
hARKButton.addEventListener("click", addARK);
hDiveSuitButton.addEventListener("click", addDiveSuit);
hPowerSuitButton.addEventListener("click", addPowerSuit);
hBatteryPackButton.addEventListener("click", addBatteryPack);
hTerminalButton.addEventListener("click", addTerminal);
hTabletButton.addEventListener("click", addTablet);
cGel1Button.addEventListener("click", addGel1);
cGel5Button.addEventListener("click", addGel5);
cBlackboxButton.addEventListener("click", addBlackbox);