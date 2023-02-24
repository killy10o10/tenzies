import { useState } from 'react';
import { nanoid } from 'nanoid';
import Dice from './Dice';

const TenziBoard = () => {
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }
    return diceArray;
  };

  const [numbers, setNumbers] = useState(allNewDice());

  const rollDice = () => {
    setNumbers((prevNum) =>
      prevNum.map((die) => (die.isHeld ? die : generateNewDie()))
    );
  };

  const holdDice = (id) => {
    setNumbers((prevNum) =>
      prevNum.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
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
