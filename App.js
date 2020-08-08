import React from 'react';
import './App.css';
import Board from './Component/Board/Board';

const App=()=>{
  return (
    <div className="body">
      <div className="Game"> 
        Tic Tac Toc
        <Board/>
      </div>
      <h6>Developed By Siddhi Shah</h6>
    </div>
  );
}

export default App;
