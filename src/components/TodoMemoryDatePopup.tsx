import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from "dayjs";

const TodoMemoryDatePopup = ({ open, onClickClose }: { open: boolean, onClickClose: () => void }) => {
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
        <DateCalendar
            defaultValue={dayjs('2022-04-17')}
            views={['month', 'year']}
            openTo="month"
          />
      </DialogContent>
    </Dialog>
  );
}

export default TodoMemoryDatePopup;
