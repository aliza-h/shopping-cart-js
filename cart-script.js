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


let totalCostDisplay = document.querySelector("#total-cost");
let totalCost = 0;

// Creating the catalogue array
let catalogueArray = [
    {
        name: "Omnitool",
        manufacturer: "Haimatsu Technologies",
        price: 100
    },
    {
        name: "ZA-X2 Experimental Module",
        manufacturer: "Haimatsu Technologies",
        price: 1000
    },
    {
        name: "Ductile Suit",
        manufacturer: "Haimatsu Technologies",
        price: 10000
    },
    {
        name: "Power Suit",
        manufacturer: "Haimatsu Technologies",
        price: 12000
    },
    {
        name: "Energy Pal S.3 Battery Pack",
        manufacturer: "Haimatsu Technologies",
        price: 200
    },
    {
        name: "In-Ground Station Terminal",
        manufacturer: "Haimatsu Technologies",
        price: 20000
    },
    {
        name: 'Standard Field Tablet (7x5")',
        manufacturer: "Haimatsu Technologies",
        price: 200
    },
    {
        name: "Structure Gel (1L)",
        manufacturer: "Carthage Industries",
        price: 150
    },
    {
        name: "Structure Gel (5L)",
        manufacturer: "Carthage Industries",
        price: 600
    },
    {
        name: "CCRV-7 Blackbox",
        manufacturer: "Carthage Industries",
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

// Making the cart items show up on the webpage
function addCartVisual(n) {
    let cartTable = document.querySelector("#user-cart-table");
    let newRow = document.createElement("tr");

    let itemName = document.createElement("td");
    itemName.innerHTML = catalogueArray[n].name;
    newRow.appendChild(itemName);

    let itemManufacturer = document.createElement("td");
    itemManufacturer.innerHTML = catalogueArray[n].manufacturer;
    newRow.appendChild(itemManufacturer);

    let itemPrice = document.createElement("td");
    itemPrice.innerHTML = ("$ " + catalogueArray[n].price + ".00");
    newRow.appendChild(itemPrice);

    cartTable.appendChild(newRow);

    totalCost += catalogueArray[n].price;
    totalCostDisplay.innerHTML = (" $ " + totalCost + ".00");
}

function addOmnitool() {
    let item = catalogueArray[0];
    cartArray.push(item);
    addCartVisual(0);
}

function addARK() {
    let item = catalogueArray[1];
    cartArray.push(item);
    addCartVisual(1);
}

function addDiveSuit() {
    let item = catalogueArray[2];
    cartArray.push(item);
    addCartVisual(2);
}

function addPowerSuit() {
    let item = catalogueArray[3];
    cartArray.push(item);
    addCartVisual(3);
}

function addBatteryPack() {
    let item = catalogueArray[4];
    cartArray.push(item);
    addCartVisual(4);
}

function addTerminal() {
    let item = catalogueArray[5];
    cartArray.push(item);
    addCartVisual(5);
}

function addTablet() {
    let item = catalogueArray[6];
    cartArray.push(item);
    addCartVisual(6);
}

function addGel1() {
    let item = catalogueArray[7];
    cartArray.push(item);
    addCartVisual(7);
}

function addGel5() {
    let item = catalogueArray[8];
    cartArray.push(item);
    addCartVisual(8);
}

function addBlackbox() {
    let item = catalogueArray[9];
    cartArray.push(item);
    addCartVisual(9);
}



// the page functions
function viewCart() {
    catalogueDisplay.remove();
    cartDisplay.style.visibility = "visible";
}

function checkout() {
    //cartDisplay.remove();
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