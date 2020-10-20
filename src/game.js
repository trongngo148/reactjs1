import React, {useState , useEffect} from 'react'
import Board from './board.js'

function Game() {
    const [isWin, setIsWin] = useState(false);
    const [squares, setSquares] = useState([Array(9).fill]);
    const [xIsNext, setxIsNext] = useState(true);
    useEffect(() => {
      if(calculateWinner(squares)){
        console.log("Win")
        setIsWin(true)
        return
      }
    }, [squares]);
    const handleClick = i => {
      console.log(squares.length)
      const squaresTemp = squares.slice()
      if(isWin) return
      if(squaresTemp[i] !== "X" && squaresTemp[i] !== "O"){
        squaresTemp[i] = xIsNext ? "X" : "O"
        setSquares(squaresTemp)
        setxIsNext(!xIsNext)
      }
      
    }
  
    const restartGame = () =>{
      setIsWin(false)
      const newSquare = [Array(9).fill]
      setSquares(newSquare)
      setxIsNext(true)
    }
  
    const calculateWinner = squares => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a]
        }
      }
      return null
    }
    return(
      <div className="game">
        <div className="game-board">
          <Board 
            isWin = {isWin}
            square= {squares}
            onClick = {(i) => handleClick(i)}
            reStartGame = {() => restartGame()}
            />
        </div>
      </div>
    );
  }
  
export default Game