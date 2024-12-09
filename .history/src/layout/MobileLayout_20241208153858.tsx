import { Container } from '@mui/material'

const MobileLayout = ({ children }: Props) => {
  return (
    <Container
      sx={{
        maxWidth: '428px', // 최대 너비 428px
        margin: '0 auto', // 화면 중앙 정렬
        padding: '20px', // 여백 추가
        backgroundColor: 'white', // 배경색 흰색
        '@media (min-width:428px)': {
          width: '428px', // 428px 고정 크기
        },
      }}
    >
      {children}
    </Container>
  )
}
