import React from 'react'
import Square from './square.js'
const Board = props =>{
  

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
export default Board