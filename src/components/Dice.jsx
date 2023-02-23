const Dice = (props) => {
  const die = props.value.map((element, index) => {
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
