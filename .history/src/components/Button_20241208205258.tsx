import { Button, ButtonProps } from '@mui/material'

type Props = ButtonProps & {
  title: string
}
export const CTAButton = ({ color, title, ...restProps }: Props) => {
  return (
    <Button
      sx={{
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        gap: 4,
        color,
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        lineHeight: '24px',
      }}
    ></Button>
  )
}
