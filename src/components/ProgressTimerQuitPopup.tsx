import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useNavigate } from "react-router";

const ProgressTimerQuitPopup = ({ open, onClickClose }: { open: boolean, onClickClose: () => void }) => {
  const navigate = useNavigate()
  const handleClickQuit = () => {
    navigate('/timer/completed');
  }

  return(
    <Dialog
    open={open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        기록하고 그만둘까요?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClickClose}>닫기</Button>
      <Button onClick={handleClickQuit}>네</Button>
      <Button onClick={onClickClose}>아니오</Button>
    </DialogActions>
  </Dialog>
  );
}

export default ProgressTimerQuitPopup;