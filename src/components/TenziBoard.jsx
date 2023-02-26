import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Dice from './Dice';
import Confetti from 'react-confetti';

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
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const isEveryDiceHeld = numbers.every((die) => die.isHeld);
    const firstDiceValue = numbers[0].value;
    const isAllSame = numbers.every((die) => die.value === firstDiceValue);
    if (isAllSame && isEveryDiceHeld) {
      setTenzies(true);
      console.log('Yay! You Win');
    }
  }, [numbers]);

  const rollDice = () => {
    if (!tenzies) {
      setNumbers((prevNum) =>
        prevNum.map((die) => (die.isHeld ? die : generateNewDie()))
      );
    } else {
      setTenzies(false);
      setNumbers(allNewDice());
    }
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
        {tenzies && <Confetti />}
        <h2 className="title">Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice value={numbers} holdDice={holdDice} />
        <button onClick={rollDice} className="button">
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </div>
  );
};

export default TenziBoard;
