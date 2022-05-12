import "./Game.css"


const Game = ({VerifyLetter}) => {
    return(
        <div>
            <h1>Game</h1>
            <button onClick={VerifyLetter}>finalizar jogo</button>
        </div>
    )
}

export default Game