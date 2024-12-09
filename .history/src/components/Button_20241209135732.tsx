import { Button as BaseButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

type Props = ButtonProps & {
  children: React.ReactNode
}
export const CTAButton = ({ children, ...restProps }: Props) => {
  return <Button {...restProps}>{children}</Button>
}

const Button = styled(BaseButton)(({ theme }) => ({
  height: 48,
  borderRadius: 4,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'inline-flex',
  backgroundColor: theme.palette.gray1000, // theme 사용
  color: theme.palette.grey[100], // theme 사용
}))
