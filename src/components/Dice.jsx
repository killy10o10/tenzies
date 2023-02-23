import { useState } from 'react';

const Dice = () => {
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }
    return diceArray;
  };

  const [numbers, setNumbers] = useState(allNewDice());

  const die = numbers.map((element, index) => {
    return (
      <span className="dice" key={index}>
        {element}
      </span>
    );
  });

  return (
    <>
      <div className="dice-container">{die}</div>
    </>
  );
};

export default Dice;
