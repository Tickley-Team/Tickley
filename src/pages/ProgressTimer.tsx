import { useState } from "react";

import ProgressTimerQuitPopup from "../components/ProgressTimerQuitPopup";

const ProgressTimer = () => {
  const [isShowQuitPopup, setShowQuitPopup] = useState(false);
  const handleClickTimeStop = () => {
    // TODO: 시간 멈추기
  }
  return(
    <>
      <div>
        <h1>15분 명상하기</h1>
        <p>자투리시간 15분간 <br/>몸과 마음을 리프레시 해보아요</p>
        <div>시간 영역</div>
        <div>프로그레스바</div>
        <button onClick={handleClickTimeStop}>일시정지</button>
        <button onClick={() => setShowQuitPopup(true)}>그만두기</button>
      </div>
      {isShowQuitPopup && <ProgressTimerQuitPopup onClickClose={() => setShowQuitPopup(false)} />}
    </>
  );
}

export default ProgressTimer;