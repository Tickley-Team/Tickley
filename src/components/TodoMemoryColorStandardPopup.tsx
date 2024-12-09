import { Box, Dialog, DialogContent, DialogContentText, Typography } from "@mui/material";

import tickley001 from '../assets/memory/tickley-001.svg';
import tickley002 from '../assets/memory/tickley-002.svg';
import tickley003 from '../assets/memory/tickley-003.svg';
import tickley004 from '../assets/memory/tickley-004.svg';

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
          <Box className={'icon'} width={24} height={24}>
            <img src={tickley001} alt='잔디1' style={{ marginRight: '8px' }}/>
          </Box>
          30분 미만</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src={tickley002} alt='잔디2' style={{ marginRight: '8px' }}/>
          30분 이상 ~ 1시간 미만</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src={tickley003} alt='잔디3' style={{ marginRight: '8px' }}/>
          1시간 이상 ~ 1시간 30분 미만</Typography>
        <Typography variant='title-5-medium-12' style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          <img src={tickley004} alt='잔디4' style={{ marginRight: '8px' }}/>
          1시간 30분 이상</Typography>
      </DialogContent>
    </Dialog>
  );
}

export default TodoMemoryColorStandardPopup;
