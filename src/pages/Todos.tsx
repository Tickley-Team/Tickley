import {
  Backdrop,
  Box,
  Button,
  Fab,
  Popper,
  SwipeableDrawer,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import addIcon from '../assets/icons/addIcon.svg'
import { BasicDialog } from '../components/BasicDialog'
import BottomNavbar from '../components/BottomNavbar'
import { RangeSlider } from '../components/RangeSlider'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { MobileLayout } from '../layout/MobileLayout'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'
import { TodoItem } from '../types'
import { DateNowToUnix } from '../utils'
import readyStatusIcon from '../assets/icons/readyStatusIcon.svg'
import doneStatusIcon from '../assets/icons/doneStatusIcon.svg'
import restIcon from '../assets/icons/rest.svg'
import { useTodoStore } from '../stores/todoStore'
import { CategoryBar, CategoryMapper } from './TodosFind'

const Todos = () => {
  const theme = useTheme()
  const [isAddLayerOpen, setIsAddLayerOpen] = useState(false)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [title, setTitle] = useState('')
  const { spareTime } = useRecommendTodoFilterStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const { addToStoredValue, value: todoList } = useLocalStorage<TodoItem[]>(
    [],
    'todos',
  )
  console.log('todos', todoList)

  const filteredTodoList = todoList.filter(
    (todo) =>
      new Date(todo.registeredDate).toDateString() ==
      new Date(DateNowToUnix()).toDateString(),
  )

  const handleAddLayerOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('anchor', event.currentTarget)

    setAnchorEl(anchorEl ? null : event.currentTarget)
    setIsAddLayerOpen((prev) => !prev)
  }

  const handleAddUrl = () => {
    setIsDialogOpen(true)
  }

  const handleAddTodoLayer = () => {
    setIsAddLayerOpen(false)
    setIsBottomSheetOpen(true)
  }

  const handleCancel = () => {
    setTitle('')
    setIsBottomSheetOpen(false)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = () => {
    // title,
    const todoItem: TodoItem = {
      title,
      estimateTime: spareTime,
      itemStatus: 'ready',
      registeredDate: DateNowToUnix(),
      categoryName,
    }
    addToStoredValue(todoItem)
    setTitle('')
    setIsBottomSheetOpen(false)
  }
  const handleCalendarClicked = () => {
    setIsDialogOpen(true)
  }

  const categoryNames = CategoryMapper.map((category) => category.categoryName)
  return (
    <MobileLayout>
      <div
        style={{
          width: '100%',
          marginTop: '40px',
          marginBottom: '21px',
        }}
      >
        <Typography variant="title-7-extrabold-20">오늘 할일</Typography>
        <Typography>자투리시간 무엇을 할지 계획해보세요</Typography>
      </div>
      <div
        style={{
          width: '100%',
          height: '608px',
          backgroundColor: theme.palette.gray300,
        }}
      >
        <Box onClick={handleCalendarClicked}>2024년 9월</Box>
        {/* 할 일 추가 버튼 */}
        <div
          style={{
            // width: '100%',
            height: '520px',
            margin: '16px',
            backgroundColor: theme.palette.gray100,
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '16px 0',
              width: '90%',
              margin: '0 auto',
            }}
          >
            <Typography
              variant="title-5-medium-16"
              fontWeight={700}
              style={{ marginRight: '8px' }}
            >
              12월 9일(월)
            </Typography>
            <Typography
              variant="title-5-medium-16"
              color={theme.palette.semanticRed}
            >
              오늘
            </Typography>
          </div>
          <div
            style={{
              height: 0,
              width: '90%',
              margin: '0 auto',
              border: '1px solid',
              borderColor: theme.palette.gray400,
            }}
          >
            {filteredTodoList.map((todo) => (
              <Todo
                key={todo.registeredDate.toString()}
                title={todo.title}
                estimateTime={todo.estimateTime}
                itemStatus={todo.itemStatus}
                registeredDate={todo.registeredDate}
                categoryName={todo.categoryName}
              />
            ))}
          </div>
          {/* + 버튼을 눌렀을 때 할일 추가/볼것 추가 모달이 뜸(할일 목록 부분 dim 처리됨(이 부분은 css에서)) */}
          {/* 그리고 할일 추가를 클릭하면 할일 추가/볼것 추가 모달이 사라지고 할일 등록하는 바텀 시트 모달이 뜸 */}
          {/* 볼것 추가를 클릭하면 얼럿으로 처리 */}
          {/* X를 누르게 되면 할일 추가/볼것 추가 모달이 사라짐 */}
          <div
            style={{ position: 'absolute', right: '26px', bottom: '46.01px' }}
          >
            {!isBottomSheetOpen && (
              <Fab
                style={{
                  backgroundColor: isAddLayerOpen
                    ? theme.palette.gray1000
                    : theme.palette.primary100,
                  color: isAddLayerOpen
                    ? theme.palette.gray100
                    : theme.palette.primary900,
                  boxShadow: 'none',
                  fontSize: '2rem',
                }}
                aria-label="add"
                onClick={handleAddLayerOpen}
              >
                {isAddLayerOpen ? 'X' : '+'}
              </Fab>
            )}
          </div>
          {/* 할일 추가/볼것 추가 모달 START */}
          <Backdrop
            open={isAddLayerOpen}
            onClick={() => {
              setIsAddLayerOpen(false)
              setAnchorEl(null)
            }}
          >
            <Popper
              open={isAddLayerOpen}
              anchorEl={anchorEl}
              placement="top-end"
              sx={{
                padding: '16px',
                borderRadius: '4px',
                backgroundColor: 'background.paper',
              }}
            >
              <Box>
                <Box className="add-layer">
                  <Box
                    display={'flex'}
                    gap={'12px'}
                    marginBottom={'16px'}
                    alignItems={'center'}
                    onClick={handleAddTodoLayer}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={addIcon} alt={'addIcon'} />
                    <p>할일 추가</p>
                  </Box>
                  <Box
                    display={'flex'}
                    gap={'12px'}
                    alignItems={'center'}
                    style={{ cursor: 'pointer' }}
                    onClick={handleAddUrl}
                  >
                    <img src={addIcon} alt={'addIcon'} />
                    <p>볼 것(URL 추가)</p>
                  </Box>
                </Box>
              </Box>
            </Popper>
          </Backdrop>
          {/* 할일 추가/볼것 추가 모달 END */}

          {/* 할일 등록하는 바텀 시트 모달 START */}
          {isBottomSheetOpen && (
            <SwipeableDrawer
              anchor={'bottom'}
              open={isBottomSheetOpen}
              onOpen={() => {}}
              onClose={() => {}}
              PaperProps={{
                sx: {
                  height: '345px',
                  padding: '24px 16px',
                },
              }}
            >
              <CategoryBar
                categoryNames={categoryNames}
                onClick={setCategoryName}
                selectedCategoryName={categoryName}
              />
              <TextField
                label="새 할일 입력"
                variant="outlined"
                value={title}
                sx={{
                  '& .MuiInputBase-root': {
                    height: '44px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '4px',
                  },
                  '& .MuiFormLabel-root': {
                    fontSize: '14px',
                  },
                  marginBottom: '16px',
                }}
                onChange={handleChangeTitle}
              />
              <div
                style={{
                  alignSelf: 'stretch',
                  height: 0,
                  border: '1px solid',
                  borderColor: theme.palette.gray400,
                  marginBottom: '16px',
                }}
              ></div>
              <div style={{ width: '100%', marginBottom: '16px' }}>
                <RangeSlider />
              </div>
              <div
                style={{
                  alignSelf: 'stretch',
                  width: '100%',
                  height: 0,
                  border: '1px solid',
                  borderColor: theme.palette.gray400,
                  marginBottom: '16px',
                }}
              ></div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <button
                  onClick={handleCancel}
                  style={{
                    backgroundColor: theme.palette.grey[400],
                    color: theme.palette.common.black,
                    width: '100%',
                    height: '48px',
                    borderRadius: '4px',
                    border: 'none',
                  }}
                >
                  취소
                </button>
                <button
                  disabled={!title}
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: theme.palette.common.black,
                    color: theme.palette.grey[100],
                    width: '100%',
                    height: '48px',
                    borderRadius: '4px',
                    border: 'none',
                  }}
                >
                  추가
                </button>
              </div>
            </SwipeableDrawer>
          )}
          {/* 할일 등록하는 바텀 시트 모달 END */}
        </div>
      </div>

      <BottomNavbar />

      <BasicDialog
        isDialogOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
    </MobileLayout>
  )
}

export default Todos

const Todo = ({
  estimateTime,
  itemStatus,
  title,
  registeredDate,
  categoryName,
}: TodoItem) => {
  const { addTodo } = useTodoStore()
  const navigate = useNavigate()
  const theme = useTheme()
  const handleTodoItemStatus = () => {
    if (itemStatus === 'ready') {
      addTodo({ categoryName, estimateTime, itemStatus, registeredDate, title })
      navigate('/timer/progress')
    }
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <Box
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
        width={'100%'}
        marginBottom={'16px'}
      >
        <Box display={'flex'} width={'100%'}>
          <Box className={'icon'} width={24} height={24} marginRight={'12px'}>
            <img src={restIcon} alt={'restIcon'} />
          </Box>
          <Box>
            <Box
              display="flex"
              style={{
                textDecorationLine:
                  itemStatus === 'done' ? 'line-through' : 'none',
              }}
            >
              <Typography
                variant="title-5-medium-16"
                fontWeight={600}
                marginRight={'12px'}
              >
                {title}
              </Typography>
              <Typography
                variant="title-5-medium-16"
                color={theme.palette.semanticPurple1}
              >
                {estimateTime}분
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button
          onClick={handleTodoItemStatus}
          variant="text"
          disableRipple
          disableElevation
          sx={{
            padding: 0,
            minWidth: 0,
            margin: 0,
            border: 'none',
            boxShadow: 'none',
            background: 'none',
            color: 'inherit',
            '&:hover': {
              background: 'none', // Hover 배경 제거
            },
          }}
        >
          <img
            src={itemStatus === 'ready' ? readyStatusIcon : doneStatusIcon}
            alt={'statusIcon'}
          />
        </Button>
      </Box>
    </div>
  )
}
