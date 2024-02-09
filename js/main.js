document.getElementById("mainTitle").innerText = "PointAndClickAdventureGame";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Main character
const mainCharacter = document.getElementById("hero");
const offsetCharacter = 16;

const tree1 = document.getElementById("squareTree");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    switch (e.target.id) {
        case "squareTree":
            tree1.style.opacity = 0.2;
        case "key":
            console.log("YOU FOUND KEY");
            break;
        default:
            tree1.style.opacity = 1;
    }
}
