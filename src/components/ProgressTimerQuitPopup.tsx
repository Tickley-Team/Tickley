import { useNavigate } from "react-router";

const ProgressTimerQuitPopup = ({ onClickClose }: { onClickClose: () => void }) => {
  const navigate = useNavigate()
  const handleClickQuit = () => {
    navigate('/timer/completed');
  }

  return(
    <div>
      기록하고 그만둘까요?
      <button onClick={onClickClose}>닫기</button>
      <button onClick={handleClickQuit}>네</button>
      <button onClick={onClickClose}>아니오</button>
    </div>
  );
}

export default ProgressTimerQuitPopup;