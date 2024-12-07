const TodoMemoryDatePopup = ({ onClickClose }: { onClickClose: () => void }) => {
  return (
    <div>
      팝업
      <button onClick={onClickClose}>날짜1</button>
      <button onClick={onClickClose}>날짜2</button>
      <button onClick={onClickClose}>날짜3</button>
      <button onClick={onClickClose}>날짜4</button>
      <button onClick={onClickClose}>날짜5</button>
      <button onClick={onClickClose}>날짜6</button>
    </div>
  );
}

export default TodoMemoryDatePopup;
