function CustomButton(props) {
  const { isDone, onClick } = props;
  if (isDone === false) {
    return (
      <button className="done-btn" onClick={onClick}>
        완료
      </button>
    );
  } else {
    return (
      <button className="undone-btn" onClick={onClick}>
        취소
      </button>
    );
  }
}

export default CustomButton;
