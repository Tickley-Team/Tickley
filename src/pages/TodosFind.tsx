import { Box, Button, Typography, useTheme } from '@mui/material'
import { useLoaderData, useNavigate } from 'react-router'
import { useFilterTodos } from '../hooks/useFilteredTodos'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DateNowToUnix } from '../utils'

import chore from '../assets/icons/chore.svg'
import circleAddIcon from '../assets/icons/circleAddIcon.svg'
import exercise from '../assets/icons/exercise.svg'
import restIcon from '../assets/icons/rest.svg'
import study from '../assets/icons/study.svg'
import BottomNavbar from '../components/BottomNavbar'
import { RangeSlider } from '../components/RangeSlider'
import { MobileLayout } from '../layout/MobileLayout'
import { useRecommendTodoFilterStore } from '../stores/recommendTodoFilterStore'
import {
  CategoryNames,
  RecommendTodo,
  TodoItem,
  TodoRecommendItemType,
} from '../types'

export const CategoryMapper = [
  {
    categoryName: '휴식',
    icon: restIcon,
  },

  {
    categoryName: '운동',
    icon: exercise,
  },

  {
    categoryName: '공부',
    icon: study,
  },

  {
    categoryName: '부업/재테크',
    icon: chore,
  },
]

const TodosFind = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const todosMockData = useLoaderData<RecommendTodo[]>()?.map((todo) => ({
    ...todo,
    estimateTime: Number(todo.estimateTime),
  }))

  const {
    categoryNames,
    setCategoryName,
    filteredTodos,
    categoryName: selectedCategoryName,
  } = useFilterTodos(todosMockData)

  const { addToStoredValue } = useLocalStorage<TodoItem[]>([], 'todos')

  const addTodo = (selectedRecommendTodo: RecommendTodo) => {
    addToStoredValue({
      title: selectedRecommendTodo.title,
      estimateTime: selectedRecommendTodo.estimateTime,
      itemStatus: 'ready',
      registeredDate: DateNowToUnix(),
      categoryName: selectedRecommendTodo.categoryName,
    })

    navigate('/todos')
  }

  return (
    <MobileLayout>
      <div
        style={{
          position: 'relative',
          marginTop: '40px',
          width: '100%',
          marginBottom: '24px',
        }}
      >
        <RangeSlider />
      </div>

      <div
        style={{
          height: '100%',
          borderTop: '1px solid',
          borderColor: theme.palette.gray400,
          paddingTop: '24px',
        }}
      >
        <Typography width={'100%'} variant="title-5-medium-18">
          추천 할일
        </Typography>

        <Typography width={'100%'}>틈새시간 할일을 추천해드려요.</Typography>

        <CategoryBar
          categoryNames={categoryNames}
          onClick={setCategoryName}
          selectedCategoryName={selectedCategoryName}
        />

        <TodoList list={filteredTodos} onAddTodo={addTodo} />
      </div>

      <div>
        {/* 하단 고정 네비게이션바*/}

        <BottomNavbar />
      </div>
    </MobileLayout>
  )
}

export default TodosFind

export const TodoList = ({
  list,
  onAddTodo,
}: {
  list: RecommendTodo[]
  onAddTodo: (todo: RecommendTodo) => void
}) => {
  return (
    <>
      {list.map((todo) => (
        <TodoRecommendItem
          key={todo.id}
          {...todo}
          onClick={() => onAddTodo(todo)}
        />
      ))}
    </>
  )
}

type CategoryBarProps = {
  selectedCategoryName: string
  categoryNames: CategoryNames
  onClick: (e: string) => void
}

export const CategoryBar = ({
  selectedCategoryName,
  categoryNames,
  onClick,
}: CategoryBarProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        gap: '12px',
        margin: '16px 0 32px 0',
      }}
    >
      {categoryNames.map((categoryName, idx) => (
        <Button
          style={{
            border: 'none',
            width: 'auto',
            padding: '6px, 12px',
            background:
              categoryName === selectedCategoryName
                ? theme.palette.gray1000
                : theme.palette.gray300,

            borderRadius: '4px',

            color:
              categoryName === selectedCategoryName
                ? theme.palette.gray100
                : theme.palette.gray1000,
          }}
          key={`${categoryName}_${idx}`}
          variant="outlined"
          onClick={() => onClick(categoryName)}
        >
          {categoryName}
        </Button>
      ))}
    </Box>
  )
}

export type TodoRecommendItemProps = TodoRecommendItemType & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const TodoRecommendItem = ({
  title,
  estimateTime,
  onClick,
}: TodoRecommendItemProps) => {
  const { categoryName: selectedCategoryName } = useRecommendTodoFilterStore()
  const theme = useTheme()
  return (
    <Box
      display={'flex'}
      justifyContent="space-between"
      alignItems={'flex-start'}
      width={'100%'}
      marginBottom={'16px'}
    >
      <Box display={'flex'} width={'100%'}>
        <Box className={'icon'} width={24} height={24} marginRight={'12px'}>
          <img
            src={
              CategoryMapper.find(
                ({ categoryName }) => categoryName === selectedCategoryName,
              )?.icon
            }
            alt={'categoryIcon'}
          />
        </Box>

        <Box>
          <Box display="flex">
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
        onClick={onClick}
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
        <img src={circleAddIcon} alt={'circle_add_icon'} />
      </Button>
    </Box>
  )
}
