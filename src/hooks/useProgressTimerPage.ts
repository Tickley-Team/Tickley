import { useState, useEffect } from 'react'

const useProgressTimerPage = () => {
  const [isShowQuitPopup, setShowQuitPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isRunning, timeLeft])

  const handleClickTimeStop = () => {
    setIsRunning(!isRunning)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}:00`
  }

    return { isShowQuitPopup, timeLeft, setShowQuitPopup, handleClickTimeStop, formatTime };
}

export default useProgressTimerPage;
