let playText = document.getElementById("playText")
let restartbtn = document.getElementById("restartbtn")
let boxs = Array.from(document.getElementsByClassName("box"))


let kazananrenk = getComputedStyle(document.body).getPropertyValue("--kazananrenk")



const X_Text = "X"
const O_Text = "O"

let currentPlayer = X_Text
let spaces = Array(9).fill(null)

const start = ()=>{
    boxs.forEach(box=> box.addEventListener("click", boxClick))
}


function boxClick(e){
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playText.innerHTML = `${currentPlayer} Kazandı  !!!`
            let kazananrenk = playerHasWon()

            kazananrenk.map(box => boxs[box].style.backgroundColor= kazananrenk)
            return
        }

        currentPlayer = currentPlayer == X_Text ? O_Text : X_Text
    }
}

function playerHasWon(){
    for(const condition of kazanmaCombosu){
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return[a,b,c]
        }
    }

    return false
}

const kazanmaCombosu = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,5,8],
    [2,4,6]
]

restartbtn.addEventListener("click",restart)


function restart(){
    spaces.fill(null)
    boxs.forEach(box =>{
        box.innerText= ''
        box.style.backgroundColor= ''
    })

    playText.innerHTML= "Tic Tac Toe"

    currentPlayer = X_Text
}

start()