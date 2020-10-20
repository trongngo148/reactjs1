import React, {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
  return(
    <button 
    className="square"
    onClick= {props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props){
  

  const rederSquare = i =>{
    return(<Square 
    value={props.square[i]}
    onClick={() => props.onClick(i)}
    />
    );
  }

  const winGame = isWin => {
    return isWin ? "You Win !" : "";
  }
  const reStartGame = isWin => {
    return isWin ? <button onClick = {() => props.reStartGame()}>Restart Game</button> : "";
  }
  
  return(
    <div>
      <div className="board-row">
        {rederSquare(0)}
        {rederSquare(1)}
        {rederSquare(2)}
      </div>
      <div className="board-row">
        {rederSquare(3)}
        {rederSquare(4)}
        {rederSquare(5)}
      </div>
      <div className="board-row">
        {rederSquare(6)}
        {rederSquare(7)}
        {rederSquare(8)}
      </div>
      <div><p>{winGame(props.isWin)}</p></div>
      <div>{reStartGame(props.isWin)}</div>
    </div>
  );
}

function Game() {
  const [isWin, setIsWin] = useState(false);
  const [squares, setSquares] = useState([Array(9).fill]);
  const [xIsNext, setxIsNext] = useState(true);
  useEffect(() => {
    if(calculateWinner(squares)){
      console.log("Win");
      setIsWin(true);
      return;
    }
  }, [squares]);
  const handleClick = i => {
    console.log(squares.length);
    const squaresTemp = squares.slice();
    if(isWin) return;
    if(squaresTemp[i] !== "X" && squaresTemp[i] !== "O"){
      squaresTemp[i] = xIsNext ? "X" : "O";
      setSquares(squaresTemp);
      setxIsNext(!xIsNext);
    }
    
  }

  const restartGame = () =>{
    setIsWin(false);
    const newSquare = [Array(9).fill];
    setSquares(newSquare);
    setxIsNext(true);
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
    ];
    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
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


function App(){
  // return <Test fullName = 'trong' />
  return <Game />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

