const TodoMemoryColorStandardPopup = ({ onClickClose }: { onClickClose: () => void }) => {
  return (
    <div>
      <p>칸 색상 기준</p>
      <button onClick={onClickClose}>닫기</button>
      <article>
        모든 자투리 시간이
        <p>30분 미만</p>
        <p>30분 이상 ~ 1시간 미만</p>
        <p>1시간 이상 ~ 1시간 30분 미만</p>
        <p>1시간 30분 이상</p>
      </article>
    </div>
  );
}

export default TodoMemoryColorStandardPopup;
