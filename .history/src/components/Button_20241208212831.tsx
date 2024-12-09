import styled from '@emotion/styled'
import { Button as BaseButton, ButtonProps, useTheme } from '@mui/material'

type Props = ButtonProps & {
  children: React.ReactNode
}
export const CTAButton = ({ color, children, ...restProps }: Props) => {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  )
}
const theme = useTheme()

const Button = styled(BaseButton)({
    height:48,
    borderRadius:4,
    justifyContent:"center",
    alignItems:"center",
    display:"inline-flex",
    backgroundColor:theme.palette.common.black
    
})
 
    height: 48,
    border-radius: 4,
    justify-content: 'center',
    align-items: 'center',
    display: 'inline-flex',
    gap: 4,
    background-color:${theme},
        color,
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        lineHeight: '24px',
  
  `,
)
