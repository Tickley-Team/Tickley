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
        padding: 0,

        position: 'relative',
        maxWidth: '375px', // 최대 너비 375px
        margin: '0 auto',
        backgroundColor: 'white',
        height: '100vh',
        display: 'flex', // Flexbox를 사용하여 콘텐츠 정렬
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 600px)': {
          paddingLeft: 0, // 600px 이상에서 padding-left 0 설정
          paddingRight: 0, // 600px 이상에서 padding-right 0 설정
        },
        '@media (min-width: 1200px)': {
          paddingLeft: 0, // 600px 이상에서 padding-left 0 설정
          paddingRight: 0, // 600px 이상에서 padding-right 0 설정

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
