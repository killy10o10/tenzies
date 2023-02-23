import { useState } from 'react';
import { nanoid } from 'nanoid';
import Dice from './Dice';

const TenziBoard = () => {
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  };

  const [numbers, setNumbers] = useState(allNewDice());

  const rollDice = () => {
    setNumbers(allNewDice());
  };

  const holdDice = (id) => {
    console.log(id);
  };

  return (
    <div className="board">
      <div className="play-board">
        <h2 className="title">Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice value={numbers} holdDice={holdDice} />
        <button onClick={rollDice} className="button">
          Roll
        </button>
      </div>
    </div>
  );
};

export default TenziBoard;
