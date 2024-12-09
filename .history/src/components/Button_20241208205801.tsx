import { Button as BaseButton, ButtonProps } from '@mui/material'

type Props = ButtonProps & {
  children: React.ReactNode
}
export const CTAButton = ({ color, children, ...restProps }: Props) => {
  return (
    <Button
      sx={{
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        gap: 4,
        background-color:backgroundColor,
        color,
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        lineHeight: '24px',
      }}
      {...restProps}
    >
      {children}
    </Button>
  )
}
