function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        className="button"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
