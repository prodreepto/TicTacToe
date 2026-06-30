const boxes = document.querySelectorAll(".col");

let turn = "X";

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "X" || box.textContent === "O") {
            return;
        }

        box.textContent = turn;

        if (turn === "X") {
            box.style.backgroundColor = "red";
            turn = "O";
        } else {
            box.style.backgroundColor = "green";
            turn = "X";
        }

        checkWinner();

    });
});

function checkWinner() {
    let wincombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < wincombo.length; i++) {
        const [a, b, c] = wincombo[i];
        if (
            boxes[a].textContent === boxes[b].textContent &&
            boxes[b].textContent === boxes[c].textContent &&
            boxes[a].textContent !== ""
        ) {
            alert(`${boxes[a].textContent} wins!`);
        }
    }
}