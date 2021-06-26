// Human Selection Choices 

document.getElementById("hselectrock").addEventListener("click", humanChoice1);
document.getElementById("hselectpaper").onclick = humanChoice2();
document.getElementById("hselectsissors").onclick = humanChoice3();



function humanChoice1() {
    document.getElementById("h_choice").innerHTML = "Rock";
    document.getElementById("h_imgchoice").src = "images/rock.png";
    document.getElementById("h_imgchoice").style.display = "inline";
    randomSelection(1, 3, cpuChoice);
}

function humanChoice2() {
    document.getElementById("h_choice").innerHTML = "Paper";
    document.getElementById("h_imgchoice").src = "images/paper.png";
    document.getElementById("h_imgchoice").style.display = "inline";
    randomSelection(1, 3, cpuChoice);
}

function humanChoice3() {
    document.getElementById("h_choice").innerHTML = "Sissors";
    document.getElementById("h_imgchoice").src = "images/sissors.png";
    document.getElementById("h_imgchoice").style.display = "inline";
    randomSelection(1, 3, cpuChoice);
}


// CPU Selection Choices 

function cpuChoice(y) {

    if (y = "Rock") {
        document.getElementById("c_choice").innerHTML = "Sissors";
        document.getElementById("c_imgchoice").src = "images/sissors.png";
        document.getElementById("c_imgchoice").style.display = "inline";

    }
    if (y = "Paper") {
        document.getElementById("c_choice").innerHTML = "Sissors";
        document.getElementById("c_imgchoice").src = "images/sissors.png";
        document.getElementById("c_imgchoice").style.display = "inline";

    }
    if (y = "Sissors") {

        document.getElementById("c_choice").innerHTML = "Sissors";
        document.getElementById("c_imgchoice").src = "images/sissors.png";
        document.getElementById("c_imgchoice").style.display = "inline";

    }


}

function randomSelection(max, min, myCallback) {
    let x, y = "";

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    x = getRndInteger(1, 3);

    switch (x) {
        case 1:
            y = "Rock";
            break;

        case 2:
            y = "Paper"
            break;

        case 3:
            y = "Sissors"

    }
    myCallback(y);

}