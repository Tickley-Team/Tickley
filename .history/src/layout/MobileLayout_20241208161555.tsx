import { Container } from '@mui/material'

export const MobileLayout = ({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) => {
  return (
    <Container
      sx={{
        maxWidth: '428px', // 최대 너비 428px
        margin: '0 auto', // 화면 중앙 정렬
        padding: '20px', // 여백 추가
        backgroundColor: 'white', // 배경색 흰색
        height: '100vh', // 화면 세로 크기 100%
        display: 'flex', // Flexbox를 사용하여 콘텐츠 정렬
        flexDirection: 'column', // 세로 방향으로 콘텐츠 배치
        justifyContent: 'center', // 콘텐츠를 세로 중앙에 배치
        alignItems: 'center', // 가로 중앙 배치
        '@media (min-width:428px)': {
          width: '428px', // 428px 고정 크기
        },
      }}
      {...restProps}
    >
      {/* 여기에 콘텐츠를 추가 */}
      {children}
    </Container>
  )
}
