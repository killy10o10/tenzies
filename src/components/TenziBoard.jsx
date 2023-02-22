const TenziBoard = () => {


  return (
      <div className="board">
          <div className="play-board">
              <h2 className="title">Tenzies</h2>
              <p>
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
              </p>
            <div className="dice-container">
                <span className="dice">
                  6
                </span>
                <span className="dice green">
                  2
                </span>
                <span className="dice">
                  5
                </span>
                <span className="dice">
                  2
                </span>
                <span className="dice">
                  2
                </span>
                <span className="dice">
                  2
                </span>
                <span className="dice">
                  3
                </span>
                <span className="dice">
                  4
                </span>
                <span className="dice green">
                  2
                </span>
                <span className="dice">
                  1
                </span>
            </div>
            <button className="button">Roll</button>
          </div>
      </div>
  )
}

export default TenziBoard;