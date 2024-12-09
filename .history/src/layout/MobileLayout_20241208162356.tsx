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
        margin: '0 auto',
        backgroundColor: 'white',
        height: '100vh', // 화면 세로 크기 100%
        display: 'flex', // Flexbox를 사용하여 콘텐츠 정렬
        flexDirection: 'column', // 세로 방향으로 콘텐츠 배치
        justifyContent: 'center', // 콘텐츠를 세로 중앙에 배치
        alignItems: 'center', // 가로 중앙 배치
      }}
      {...restProps}
    >
      {/* 여기에 콘텐츠를 추가 */}
      {children}
    </Container>
  )
}
