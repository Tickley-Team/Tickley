import { Dialog, DialogContent, DialogContentText, Typography } from "@mui/material";

const TodoMemoryColorStandardPopup = ({ open, onClickClose }: { open: boolean, onClickClose: () => void }) => {
  return (
    <Dialog
      open={open}
      onClick={onClickClose}
      aria-labelledby="memory-question-title"
      aria-describedby="memory-question-description"
    >
      <DialogContent>
        <DialogContentText variant='title-5-medium-12' id="memory-question" style={{ marginBottom: '20px', color: 'black', fontSize: '14px', textAlign: 'center' }}>
          칸 색상 기준
        </DialogContentText>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', color: 'black', fontSize: '14px' }}>
          모은 자투리 시간이</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src='https://github.com/user-attachments/assets/d4adc553-827f-412f-9f2e-f1ce7c5ca375' alt='잔디1' style={{ marginRight: '8px' }}/>
          30분 미만</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src='https://github.com/user-attachments/assets/0a6a2ae1-c283-4be2-805f-83ddf04126a1' alt='잔디2' style={{ marginRight: '8px' }}/>
          30분 이상 ~ 1시간 미만</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src='https://github.com/user-attachments/assets/a93e2e6f-2525-430e-b3be-9dc6a9f7481f' alt='잔디3' style={{ marginRight: '8px' }}/>
          1시간 이상 ~ 1시간 30분 미만</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src='https://github.com/user-attachments/assets/877b5027-a843-4bef-a4b3-03c1cf08fd43' alt='잔디4' style={{ marginRight: '8px' }}/>
          1시간 30분 이상</Typography>
      </DialogContent>
    </Dialog>
  );
}

export default TodoMemoryColorStandardPopup;
