let boxes = document.querySelectorAll(".box"); 
let resetbtn = document.querySelector(".btn");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".container2");
let msg = document.querySelector("#win");

let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turno = true;
    enabledBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.style.fontSize = "26px"; 
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    let allFilled = true;

    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showwinner(pos1Val);
                return;
            }
        }
    }

    // Check for tie
    boxes.forEach(box => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        msg.innerText = "It's a tie!";
        msgcontainer.classList.remove("hide");
        disabledBoxes();
    }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
