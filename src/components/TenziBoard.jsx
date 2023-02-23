import Dice from './Dice';

const TenziBoard = () => {
  return (
    <div className="board">
      <div className="play-board">
        <h2 className="title">Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice />
        <button className="button">Roll</button>
      </div>
    </div>
  );
};

export default TenziBoard;
