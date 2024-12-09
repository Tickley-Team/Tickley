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
        maxWidth: '375px', // 최대 너비 375px
        margin: '0 auto', // 가운데 정렬
        width: '100%',
        backgroundColor: 'white', // 배경 색상
        height: '100vh', // 화면 전체 높이 사용
        display: 'flex', // Flexbox를 사용하여 콘텐츠 정렬
        flexDirection: 'column',
        justifyContent: 'center', // 세로 방향 중앙 정렬
        alignItems: 'center', // 가로 방향 중앙 정렬
        padding: 0, // 기본 패딩 제거
        '@media (min-width: 1200px)': {
          maxWidth: '375px', // 1200px 이상에서도 375px 고정
        },
      }}
      {...restProps}
    >
      {/* 여기에 콘텐츠를 추가 */}
      {children}
    </Container>
  )
}
