let scene = "create"; // create or scan
const createBut = document.getElementById("createBut");
const scanBut = document.getElementById("scanBut");
const burgLimitCounter = document.getElementById("burgLimit")
let burgLimit = 0
const burgMax = 12
let length = 2
let burger = []
burgLimitCounter.textContent = burgLimit+"/"+burgMax
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


function generateQRCode(burger){
    let burgCode = ""
    burger.forEach(element => {
        if (element == "top-bun"){
            burgCode += "A"
        }
        else if (element == "bottom-bun"){
            burgCode += "B"
        }
        else if (element == "bottom-bun"){
            burgCode += "C"
        }
        else if (element == "bacon"){
            burgCode += "C"
        }
        else if (element == "cheese"){
            burgCode += "D"
        }
        else if (element == "ketchup"){
            burgCode += "E"
        }
        else if (element == "lettuce"){
            burgCode += "F"
        }
        else if (element == "mayo"){
            burgCode += "G"
        }
        else if (element == "mustard"){
            burgCode += "H"
        }
        else if (element == "pickles"){
            burgCode += "I"
        }
        else if (element == "tomatoes"){
            burgCode += "J"
        }
        else if (element == "patty"){
            burgCode += "K"
        }
    });
    const burgerName = document.getElementById("burgerName").value
    burgCode += "/"
    return burgCode
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const createDiv = document.getElementsByClassName("create")[0];
const scanDiv = document.getElementsByClassName("scan")[0];

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
