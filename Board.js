import React,{useState} from 'react';
import Square from '../Square/Square';
import './Board.css';

const Board=()=>{
   
  //  const initialSquare=[
  //    null,null,null,
  //    null,null,null,
  //    null,null,null
  //  ]
   const initialSquare=Array(9).fill(null);
     //both above works same

   const[square, setSquare]=useState(initialSquare);
   const[xIsNext, setXIsNext]=useState(true);

   const handleClickEvent=i=>{
     //alert(`square ${i} clicked`);

     //1. make a copy of squares state array
      const newSquare=[...square];
      
      const winnerDeclared=Boolean(calculateWinner(newSquare));
      const squareFilled= Boolean(newSquare[i]);
      if(winnerDeclared|| squareFilled){
        return;
      }
     //2. mutate the copy, setting an ith element to 'X'
      newSquare[i]=xIsNext ? 'X' : 'O';
      //newSquare[i]='X';
     //3. call the setSquare function with the mutated copy.
     setSquare(newSquare);
     setXIsNext(!xIsNext);
   }

  const renderSquare=(i)=>{
    return(
      <div >
      <Square 
         value={square[i]}
         onClickEvent={()=>handleClickEvent(i)}/>
      </div>
    )
  }

  const winner=calculateWinner(square);
  const status= winner?
     `winner:${winner}`:
     `Next Player: ${xIsNext ? 'X': 'O'}`;

    return(
      <div>
      <div className="status">{status}</div>
      
        <div className="board-row">
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        </div>

        <div className="board-row">
           {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        </div>

        <div className="board-row">
           {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
        </div>
        </div> 
      
    );   
}

function calculateWinner(square){
  const lines=[
    [0,1,2],[3,4,5],[6,7,8], //rows
    [0,3,6],[1,4,7],[2,5,8], //colums
    [0,4,8],[2,4,6], //diagonals
  ]


  for(let line of lines){
   const[a,b,c]= line;

    if(square[a] && square[a]===square[b] && square[a]===square[c]){
    return square[a];
    }
  }
  return null;
}

export default Board;

