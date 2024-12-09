import AddTodoMainButton from '../components/AddTodoMainButton'
import { useState } from 'react'
import { Link } from 'react-router'
import { TodoItem } from '../types'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'
import { DateNowToUnix } from '../utils'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { RangeSlider } from '../components/RangeSlider'
import addIcon from '../assets/icons/addIcon.svg'
import {
  TextField,
  SwipeableDrawer,
  Box,
  Popper,
  Backdrop,
} from '@mui/material'

const Todos = () => {
  const [isAddLayerOpen, setIsAddLayerOpen] = useState(false)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [title, setTitle] = useState('')
  const { spareTime } = useRecommendTodoFilterStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

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

  const handleAddLayerOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log('anchor', event.currentTarget)

    setAnchorEl(anchorEl ? null : event.currentTarget)
    setIsAddLayerOpen(true)
  }

  const handleAddLayerClose = () => {
    setIsAddLayerOpen(false)
  }

  const handleAddUrl = () => {
    alert('준비중인 서비스입니다')
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
    }
    addToStoredValue(todoItem)
    setTitle('')
    setIsBottomSheetOpen(false)
  }
  const open = Boolean(anchorEl)
  return (
    <div>
      <p>할일 목록 페이지입니다.</p>

      {/* 할 일 추가 버튼 */}
      <AddTodoMainButton />

      {filteredTodoList.map((todo) => (
        <Todo
          key={todo.registeredDate.toString()}
          title={todo.title}
          estimateTime={todo.estimateTime}
          itemStatus={'ready'}
          registeredDate={todo.registeredDate}
        />
      ))}
      {/* + 버튼을 눌렀을 때 할일 추가/볼것 추가 모달이 뜸(할일 목록 부분 dim 처리됨(이 부분은 css에서)) */}
      {/* 그리고 할일 추가를 클릭하면 할일 추가/볼것 추가 모달이 사라지고 할일 등록하는 바텀 시트 모달이 뜸 */}
      {/* 볼것 추가를 클릭하면 얼럿으로 처리 */}
      {/* X를 누르게 되면 할일 추가/볼것 추가 모달이 사라짐 */}
      <div>
        {!isBottomSheetOpen && (
          <button
            onClick={isAddLayerOpen ? handleAddLayerClose : handleAddLayerOpen}
          >
            {isAddLayerOpen ? 'X' : '+'}
          </button>
        )}
      </div>
      {/* 할일 추가/볼것 추가 모달 START */}

      <Backdrop
        sx={(theme) => ({ color: '#fff' })}
        open={isAddLayerOpen}
        onClick={() => setIsAddLayerOpen(false)}
      >
        <Popper
          // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
          sx={{ zIndex: 12000, backgroundColor: '#fff', padding: '24px' }}
          open={open}
          anchorEl={anchorEl}
          placement={'top-end'}
          transition
        >
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
        >
          <TextField
            label="새 할일 입력"
            variant="outlined"
            value={title}
            onChange={handleChangeTitle}
          />
          <RangeSlider />
          <button onClick={handleCancel}>취소</button>
          <button disabled={!title} onClick={handleSubmit}>
            추가
          </button>
        </SwipeableDrawer>
      )}
      {/* 할일 등록하는 바텀 시트 모달 END */}

      <div>
        <Link to="/todos">
          <button>오늘 할일</button>
        </Link>
        <Link to="/todos/find">
          <button>할일 찾기</button>
        </Link>
        <Link to="/todos/memory">
          <button>기록</button>
        </Link>
      </div>
    </div>
  )
}

export default Todos

const Todo = ({ estimateTime, itemStatus, title }: TodoItem) => {
  return (
    <div>
      <Box style={{ flex: 'column' }}>
        <Box>
          <div>{<img src="#" alt="" />}</div>
          <div>{title}</div>
          <div>{`${estimateTime}분`}</div>
        </Box>
        <Box>{itemStatus}</Box>
      </Box>
    </div>
  )
}
