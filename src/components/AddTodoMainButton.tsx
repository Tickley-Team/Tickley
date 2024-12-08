import { useState } from 'react'
import AddTodoSubButton from './AddTodoSubButton'

const AddTodoMainButton = () => {
  const [showSubButtons, setShowSubButtons] = useState(false)

  const clickMainButton = () => {
    setShowSubButtons((prev) => !prev)
  }

  return (
    <div>
      <button onClick={clickMainButton}>{showSubButtons ? 'x' : '+'}</button>
      {showSubButtons && <AddTodoSubButton />}
    </div>
  )
}

export default AddTodoMainButton
