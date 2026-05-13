import {Html5QrcodeScanner} from "https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/+esm";

let scene = "create"; // create or scan
const createBut = document.getElementById("createBut");
const scanBut = document.getElementById("scanBut");
const burgLimitCounter = document.getElementById("burgLimit")
let burgLimit = 0
const burgMax = 99
let length = 2
let burger = []
let sharedBurger = []
burgLimitCounter.textContent = burgLimit+"/"+burgMax
const createDiv = document.getElementsByClassName("create")[0];
const scanDiv = document.getElementsByClassName("scan")[0];
const sharedBurgerDiv = document.getElementById("sharedBurger");
const sharedBurgerStatus = document.getElementById("sharedBurgerStatus");
const ingredientFromCode = {
    A: "top-bun",
    B: "bottom-bun",
    C: "bacon",
    D: "cheese",
    E: "ketchup",
    F: "lettuce",
    G: "mayo",
    H: "mustard",
    I: "pickles",
    J: "tomatoes",
    K: "patty"
};
const ingredientToCode = {
    "top-bun": "A",
    "bottom-bun": "B",
    "bacon": "C",
    "cheese": "D",
    "ketchup": "E",
    "lettuce": "F",
    "mayo": "G",
    "mustard": "H",
    "pickles": "I",
    "tomatoes": "J",
    "patty": "K"
};
// ingredients
// Top-Bun:A
//Bottom-Bun: B
//Bacon: C
//Cheese: D
//Ketchup: E
//Lettuce: F
//Mayo: G
//Mustard: H
//Pickles: I
//Tomatoes: J
//Patty: K
if (scene == "create"){
    createBut.classList.add("selected");
    scanBut.classList.remove("selected");
    createDiv.style.opacity = "1"
    createDiv.style.pointerEvents = "all"
    scanDiv.style.opacity = "0"
    scanDiv.style.pointerEvents = "none"
}else if (scene == "scan"){
    scanBut.classList.add("selected");
    createBut.classList.remove("selected");
    createDiv.style.opacity = "0"
    createDiv.style.pointerEvents = "none"
    scanDiv.style.opacity = "1"
    scanDiv.style.pointerEvents = "all"
}

function generateQRCode(burger){
    // Build QR code from visual stack order (top-to-bottom)
    let burgCode = ""
    const imgs = Array.from(burgerDiv.querySelectorAll('img'))
        .sort((a,b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
    imgs.forEach(img => {
        const cls = Object.keys(ingredientToCode).find(k => img.classList.contains(k))
        if (cls){
            burgCode += ingredientToCode[cls]
        }
    })

    const burgerNameInput = document.getElementById("burgerName").value.trim()
    const burgerName = burgerNameInput.length > 0 ? burgerNameInput : "Untitled Burger"
    return burgCode + "/" + encodeURIComponent(burgerName)
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

createBut.onclick = function(){
    scene = "create";
    createBut.classList.add("selected");
    scanBut.classList.remove("selected");
    createDiv.style.opacity = "1"
    createDiv.style.pointerEvents = "all"
    scanDiv.style.opacity = "0"
    scanDiv.style.pointerEvents = "none"
}


scanBut.onclick = function(){
    scene = "scan";
    scanBut.classList.add("selected");
    createBut.classList.remove("selected");
    createDiv.style.opacity = "0"
    createDiv.style.pointerEvents = "none"
    scanDiv.style.opacity = "1"
    scanDiv.style.pointerEvents = "all"
}

const burgerDiv = document.getElementsByClassName("burger")[0]

const topBunButton = document.getElementById("topBunButton")
topBunButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/top-bun.png"
        e.classList.add("top-bun")
        length+=1
        burger.push("top-bun")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const bottomBunButton = document.getElementById("bottomBunButton")
bottomBunButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/bottom-bun.png"
        e.classList.add("bottom-bun")
        length+=1
        burger.push("bottom-bun")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const baconButton = document.getElementById("baconButton")
baconButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/bacon.png"
        e.classList.add("bacon")
        length+=1
        burger.push("bacon")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
        e.style.rotate = (getRandomIntInclusive(-5,5).toString())+"deg"
    }
}

const cheeseButton = document.getElementById("cheeseButton")
cheeseButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/cheese.png"
        e.classList.add("cheese")
        length+=1
        burger.push("cheese")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const ketchupButton = document.getElementById("ketchupButton")
ketchupButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/ketchup.png"
        e.classList.add("ketchup")
        length+=1
        burger.push("ketchup")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const lettuceButton = document.getElementById("lettuceButton")
lettuceButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/lettuce.png"
        e.classList.add("lettuce")
        length+=1
        burger.push("lettuce")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
        e.style.rotate = (getRandomIntInclusive(-5,5).toString())+"deg"
    }
}

const mayoButton = document.getElementById("mayoButton")
mayoButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/mayo.png"
        e.classList.add("mayo")
        length+=1
        burger.push("mayo")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const mustardButton = document.getElementById("mustardButton")
mustardButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/mustard.png"
        e.classList.add("mustard")
        length+=1
        burger.push("mustard")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const picklesButton = document.getElementById("picklesButton")
picklesButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/pickles.png"
        e.classList.add("pickles")
        length+=1
        burger.push("pickles")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
        e.style.rotate = (getRandomIntInclusive(-5,5).toString())+"deg"
    }
}

const tomatoesButton = document.getElementById("tomatoesButton")
tomatoesButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/tomatoes.png"
        e.classList.add("tomatoes")
        length+=1
        burger.push("tomatoes")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
        e.style.rotate = (getRandomIntInclusive(-5,5).toString())+"deg"
    }
}
const pattyButton = document.getElementById("pattyButton")
pattyButton.onclick = function(){
    if (burgLimit < burgMax){
        const e = burgerDiv.appendChild(document.createElement("img"))
        e.src = "./assets/ingredients/patty.png"
        e.classList.add("patty")
        length+=1
        burger.push("patty")
        burgLimit+=1
        burgLimitCounter.textContent = burgLimit+"/"+burgMax
    }
}

const deleteButton = document.getElementById("deleteButton")
deleteButton.onclick = function(){
    burgLimit = 0
    burgLimitCounter.textContent = burgLimit+"/"+burgMax
    burgerDiv.innerHTML = ""
}

const shareQRCodePopup = document.getElementsByClassName("shareQRCodePopup")[0]
const shareButton = document.getElementById("shareButton")
shareButton.onclick = function(){
    let burgCode = generateQRCode(burger).toString()
    if (burgCode.length != 0){
        shareQRCodePopup.getElementsByTagName("img")[0].src = "https://api.qrserver.com/v1/create-qr-code/?data="+burgCode+"&size=100x100"
    }
    else{

    }
    shareQRCodePopup.style.opacity = "1"
    shareQRCodePopup.style.pointerEvents = "all"
}
document.getElementById("shareQRCodePopupCloseButton").onclick = function(){
    shareQRCodePopup.style.opacity = "0"
    shareQRCodePopup.style.pointerEvents = "none"
}

function onScanSuccess(decodedText, decodedResult) {
    const scannedParts = decodedText.split("/");
    const scannedCode = (scannedParts[0] || "").trim().toUpperCase();
    const scannedBurgerName = decodeURIComponent((scannedParts[1] || "Untitled Burger").trim() || "Untitled Burger");
    const scannedIngredients = [];

    for (const char of scannedCode){
        if (ingredientFromCode[char]){
            scannedIngredients.push(ingredientFromCode[char]);
        }
    }

    sharedBurger = scannedIngredients;
    sharedBurgerDiv.innerHTML = "";

    if (sharedBurger.length === 0){
        sharedBurgerStatus.textContent = "Scan did not match a burger code.";
        return;
    }

    // Render preview in visual top-to-bottom order
    Array.from(sharedBurger).reverse().forEach((ingredient) => {
        const ingredientImg = document.createElement("img");
        ingredientImg.src = "./assets/ingredients/" + ingredient + ".png";
        ingredientImg.classList.add(ingredient);
        sharedBurgerDiv.appendChild(ingredientImg);
    });

    sharedBurgerStatus.textContent = scannedBurgerName;
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);