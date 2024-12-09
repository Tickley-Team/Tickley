import { Box, Button as BaseButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

type Props = ButtonProps & {
  children: React.ReactNode
}
export const CTAButton = ({ children, ...restProps }: Props) => {
  return (
    <Box>
      <Button {...restProps}>{children}</Button>
    </Box>
  )
}

const Button = styled(BaseButton)(({ theme }) => ({
  position: 'absolute', // 버튼을 절대 위치로 설정
  bottom: '48px', // 하단에서 48px 떨어지게 설정
  left: '50%', // 가로 중앙 정렬
  transform: 'translateX(-50%)', // 정확한 중앙 정렬
  width: 'calc(100% - 32px)', // 가로 폭을 100%에서 좌우 여백을 제외한 값으로 설정
  height: '48px',
  backgroundColor: '#1976d2', // 버튼 배경색
  color: 'white',
  borderRadius: '4px',
}))
