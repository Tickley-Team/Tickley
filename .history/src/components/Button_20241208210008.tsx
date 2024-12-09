import styled from '@emotion/styled'
import { Button as BaseButton, ButtonProps } from '@mui/material'

type Props = ButtonProps & {
  children: React.ReactNode
}
export const CTAButton = ({ color, children, ...restProps }: Props) => {
  return (
    <Button sx={{}} {...restProps}>
      {children}
    </Button>
  )
}

const Button = styled(BaseButton)(
  ({ theme }) => `
    height: 48,
    border-radius: 4,
    justify-content: 'center',
    align-items: 'center',
        display: 'inline-flex',
        gap: 4,
        background-color:backgroundColor,
        color,
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        lineHeight: '24px',
  
  `,
)