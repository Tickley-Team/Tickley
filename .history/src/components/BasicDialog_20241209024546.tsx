import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import notReadyYet from '../assets/icons/notReadyYet'

//TODO: refactor 공통 컴포넌트로 분리
type BasicDialogProps = {
  isDialogOpen: boolean
}

export const BasicDialog = ({ isDialogOpen }: BasicDialogProps) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <img src={} alt="" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
