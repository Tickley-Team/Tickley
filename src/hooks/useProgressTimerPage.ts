import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const useProgressTimerPage = () => {
  const navigate = useNavigate()

  const totalTime = 15 * 60;
  const [isShowQuitPopup, setShowQuitPopup] = useState(false)
  const [isRunning, setIsRunning] = useState(true)
  const [timeLeft, setTimeLeft] = useState(totalTime)

  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    }
    
    if (timeLeft <= 0) {
      navigate('/timer/completed');
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isRunning, timeLeft])

  const handleClickTimeStop = () => {
    setIsRunning(!isRunning)
  }

  const handleClickSwitchQuit = (isStop: boolean) => {
    if (isStop) { setIsRunning(false) }
    if (!isStop) { setIsRunning(true) }

    setShowQuitPopup(isStop)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}:00`
  }

    return { isShowQuitPopup, isRunning, totalTime, timeLeft, handleClickSwitchQuit, handleClickTimeStop, formatTime };
}

export default useProgressTimerPage;
