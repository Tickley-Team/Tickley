import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material'
import notReadyYet from '../assets/icons/notReadyYet.svg'
import CloseIcon from '@mui/icons-material/Close'

//TODO: refactor 공통 컴포넌트로 분리
type BasicDialogProps = {
  isDialogOpen: boolean
  handleClose: () => void
}

export const BasicDialog = ({
  isDialogOpen,
  handleClose,
}: BasicDialogProps) => {
  return (
    <Dialog
      open={isDialogOpen}
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
          color: theme.palette.common.black,
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
