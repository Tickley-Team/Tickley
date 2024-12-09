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
        backgroundColor: 'white', // 배경 색상
        height: '100vh', // 화면 전체 높이 사용
        display: 'flex', // Flexbox를 사용하여 콘텐츠 정렬
        flexDirection: 'column', // 세로로 쌓이게
        justifyContent: 'flex-start', // 세로 방향으로 상단 정렬
        alignItems: 'center', // 가로 방향으로 중앙 정렬
        padding: 0, // 기본 패딩 제거
        boxSizing: 'border-box', // 패딩 및 마진 포함
      }}
      {...restProps}
    >
      {/* 여기에 콘텐츠를 추가 */}
      <div style={{ flexGrow: 1 }}>{children}</div>
    </Container>
  )
}
