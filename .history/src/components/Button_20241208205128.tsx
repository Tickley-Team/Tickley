import { Button } from '@mui/material'

export const MainButton = ({ title, ...restProps }: Props) => {
  return (
    <Button
      sx={{
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        gap: 4,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        lineHeight: '24px',
      }}
    ></Button>
  )
}
