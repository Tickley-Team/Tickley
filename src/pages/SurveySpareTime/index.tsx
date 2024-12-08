import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useRecommendTodoFilterStore } from '../../stores/recommendTodoFilterStore'

const SurveySpareTime = () => {
  const navigate = useNavigate()
  const handleClickButton = useCallback(() => {
    navigate('/todos/find')
  }, [])
  return (
    <>
      <h2>틈새 시간이 얼마나 있나요?</h2>
      <RangeSlider />
      <button onClick={handleClickButton}>할일 찾기 </button>
    </>
  )
}

/**
 * zustand 테스트용 - 컴포넌트 분리작업은 추후에
 * @returns
 */
const RangeSlider = () => {
  const { spareTime, setSpareTime } = useRecommendTodoFilterStore()
  //   const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpareTime(Number(event.target.value))
  }

  return (
    <div className="range-slider">
      <label htmlFor="range">Select time range:</label>
      <input
        id="range"
        type="range"
        min="0"
        max="4"
        step="1"
        value={spareTime}
        onChange={handleChange}
        className="slider"
      />
      <div className="labels"></div>
      <div className="value">{spareTime}</div>
    </div>
  )
}

export default SurveySpareTime
