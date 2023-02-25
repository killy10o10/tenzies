const Dice = (props) => {
  const { value, holdDice } = props;

  const die = value.map((element) => {
    const styles = {
      backgroundColor: element.isHeld ? '#59e391' : '#ffffff',
    };
    return (
      <span
        className={`dice ${element.isHeld ? "wiggle" : ""}`}
        onClick={() => holdDice(element.id)}
        style={styles}
        key={element.id}
      >
        {element.value}
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
