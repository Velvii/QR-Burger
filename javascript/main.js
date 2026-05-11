let scene = "create"; // create or scan
const createBut = document.getElementById("createBut");
const scanBut = document.getElementById("scanBut");
const burgLimitCounter = document.getElementById("burgLimit")
let burgLimit = 0
const burgMax = 12
let length = 2
let burger = []
burgLimitCounter.textContent = burgLimit+"/"+burgMax


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

createBut.onclick = function(){
    scene = "create";
    createBut.classList.add("selected");
    scanBut.classList.remove("selected");
}

scanBut.onclick = function(){
    scene = "scan";
    scanBut.classList.add("selected");
    createBut.classList.remove("selected");
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