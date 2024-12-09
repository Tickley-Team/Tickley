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
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <img src={notReadyYet} alt="notReadyYet" />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
