let steagVertical = document.getElementById("steagVertical");
let steagOrizontal = document.getElementById("steagOrizontal");
let checkBtn = document.getElementById("check-btn");

let changeOne = document.getElementById("change1");
let changeTwo = document.getElementById("change2");
let changeThree = document.getElementById("change3");

let boxOne = document.getElementById("cutie1");
let boxTwo = document.getElementById("cutie2");
let boxThree = document.getElementById("cutie3");
let verificaretext = document.getElementById("verificareText")

steagVertical.addEventListener("click", schimbaInVertical);
steagOrizontal.addEventListener("click", schimbaInOrizontal);

function schimbaInVertical() {
    boxOne.classList.remove("orizontal_unu");
    boxOne.classList.add("vertical_unu");

    boxTwo.classList.remove("orizontal_doi");
    boxTwo.classList.add("vertical_doi");

    boxThree.classList.remove("orizontal_trei");
    boxThree.classList.add("vertical_trei");
}

function schimbaInOrizontal() {
    boxOne.classList.remove("vertical_unu")
    boxOne.classList.add("orizontal_unu");

    boxTwo.classList.remove("vertical_doi")
    boxTwo.classList.add("orizontal_doi");

    boxThree.classList.remove("vertical_trei")
    boxThree.classList.add("orizontal_trei");

}

changeOne.addEventListener("click", changeBoxOne);
changeTwo.addEventListener("click", changeBoxTwo);
changeThree.addEventListener("click", changeBoxThree);

function changeBoxOne() {
    if (boxOne.classList.contains("white")) {
        boxOne.classList.remove("white");
        boxOne.classList.add("yellow");
    } else if (boxOne.classList.contains("yellow")) {
        boxOne.classList.remove("yellow");
        boxOne.classList.add("orange");
    } else if (boxOne.classList.contains("orange")) {
        boxOne.classList.remove("orange");
        boxOne.classList.add("red");
    } else if (boxOne.classList.contains("red")) {
        boxOne.classList.remove("red");
        boxOne.classList.add("green");
    } else if (boxOne.classList.contains("green")) {
        boxOne.classList.remove("green");
        boxOne.classList.add("blue");
    } else if (boxOne.classList.contains("blue")) {
        boxOne.classList.remove("blue");
        boxOne.classList.add("black");
    } else if (boxOne.classList.contains("black")) {
        boxOne.classList.remove("black");
        boxOne.classList.add("white");
    }
}

function changeBoxTwo() {
    if (boxTwo.classList.contains("white")) {
        boxTwo.classList.remove("white");
        boxTwo.classList.add("yellow");
    } else if (boxTwo.classList.contains("yellow")) {
        boxTwo.classList.remove("yellow");
        boxTwo.classList.add("orange");
    } else if (boxTwo.classList.contains("orange")) {
        boxTwo.classList.remove("orange");
        boxTwo.classList.add("red");
    } else if (boxTwo.classList.contains("red")) {
        boxTwo.classList.remove("red");
        boxTwo.classList.add("green");
    } else if (boxTwo.classList.contains("green")) {
        boxTwo.classList.remove("green");
        boxTwo.classList.add("blue");
    } else if (boxTwo.classList.contains("blue")) {
        boxTwo.classList.remove("blue");
        boxTwo.classList.add("black");
    } else if (boxTwo.classList.contains("black")) {
        boxTwo.classList.remove("black");
        boxTwo.classList.add("white");
    }
}

function changeBoxThree() {
    if (boxThree.classList.contains("white")) {
        boxThree.classList.remove("white");
        boxThree.classList.add("yellow");
    } else if (boxThree.classList.contains("yellow")) {
        boxThree.classList.remove("yellow");
        boxThree.classList.add("orange");
    } else if (boxThree.classList.contains("orange")) {
        boxThree.classList.remove("orange");
        boxThree.classList.add("red");
    } else if (boxThree.classList.contains("red")) {
        boxThree.classList.remove("red");
        boxThree.classList.add("green");
    } else if (boxThree.classList.contains("green")) {
        boxThree.classList.remove("green");
        boxThree.classList.add("blue");
    } else if (boxThree.classList.contains("blue")) {
        boxThree.classList.remove("blue");
        boxThree.classList.add("black");
    } else if (boxThree.classList.contains("black")) {
        boxThree.classList.remove("black");
        boxThree.classList.add("white");
    }
}

checkBtn.addEventListener("click", checkAll);

function checkAll() {
    if (boxOne.classList.contains("vertical_unu") &&
        boxOne.classList.contains("blue") &&

        boxTwo.classList.contains("vertical_doi") &&
        boxTwo.classList.contains("yellow") &&

        boxThree.classList.contains("vertical_trei") &&
        boxThree.classList.contains("red")) {
        verificaretext.innerText = "Romania";
    } else if
        (boxOne.classList.contains("vertical_unu") &&
        boxOne.classList.contains("blue") &&

        boxTwo.classList.contains("vertical_doi") &&
        boxTwo.classList.contains("white") &&

        boxThree.classList.contains("vertical_trei") &&
        boxThree.classList.contains("red")) {
        verificaretext.innerText = "France";
    } else if
        (boxOne.classList.contains("vertical_unu") &&
        boxOne.classList.contains("green") &&

        boxTwo.classList.contains("vertical_doi") &&
        boxTwo.classList.contains("white") &&

        boxThree.classList.contains("vertical_trei") &&
        boxThree.classList.contains("orange")) {
        verificaretext.innerText = "Irland";
    } else if
        (boxOne.classList.contains("orizontal_unu") &&
        boxOne.classList.contains("black") &&

        boxTwo.classList.contains("orizontal_doi") &&
        boxTwo.classList.contains("red") &&

        boxThree.classList.contains("orizontal_trei") &&
        boxThree.classList.contains("yellow")) {
        verificaretext.innerText = "Germany";
    } else if
        (boxOne.classList.contains("vertical_unu") &&
        boxOne.classList.contains("black") &&

        boxTwo.classList.contains("vertical_doi") &&
        boxTwo.classList.contains("yellow") &&

        boxThree.classList.contains("vertical_trei") &&
        boxThree.classList.contains("red")) {
        verificaretext.innerText = "Belgium";
    } else if
        (boxOne.classList.contains("orizontal_unu") &&
        boxOne.classList.contains("white") &&

        boxTwo.classList.contains("orizontal_doi") &&
        boxTwo.classList.contains("blue") &&

        boxThree.classList.contains("orizontal_trei") &&
        boxThree.classList.contains("red")) {
        verificaretext.innerText = "Russia";
    } else {
        verificaretext.innerText = "Country is not on the list";
    }
}