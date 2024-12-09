import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material'
import { useNavigate } from 'react-router'
import { useTodoStore } from '../stores/todoStore'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ProgressTimerQuitPopup = ({
  open,
  onClickClose,
}: {
  open: boolean
  onClickClose: () => void
}) => {
  const { todo, setTodoStatus } = useTodoStore()
  const navigate = useNavigate()
  const { updateStoredValue } = useLocalStorage([])
  const handleClickQuit = () => {
    if (todo?.registeredDate) {
      updateStoredValue(todo.registeredDate, { itemStatus: 'done' })
    }
    setTodoStatus('done')
    navigate('/timer/completed')
  }

  return (
    <Dialog
      open={open}
      aria-labelledby="progress-timer-quit-title"
      aria-describedby="progress-timer-quit-description"
    >
      <DialogContent style={{ width: '304px' }}>
        <DialogContentText variant="title-5-medium-16" id="progress-timer-quit">
          기록하고 그만둘까요?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickQuit}>네</Button>
        <Button onClick={onClickClose}>아니오</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ProgressTimerQuitPopup
