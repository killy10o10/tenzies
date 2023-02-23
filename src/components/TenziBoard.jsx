import { useState } from 'react';
import Dice from './Dice';

const TenziBoard = () => {
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }
    return diceArray;
  };

  const [numbers, setNumbers] = useState(allNewDice());

  const rollDice = () => {
    setNumbers(allNewDice());
  };

  return (
    <div className="board">
      <div className="play-board">
        <h2 className="title">Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice value={numbers} />
        <button onClick={rollDice} className="button">
          Roll
        </button>
      </div>
    </div>
  );
};

export default TenziBoard;
