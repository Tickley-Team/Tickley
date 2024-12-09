import { useState } from 'react'
import { Typography } from '@mui/material'

import TodoMemoryDatePopup from '../components/TodoMemoryDatePopup'
import TodoMemoryColorStandardPopup from '../components/TodoMemoryColorStandardPopup'
import { MobileLayout } from '../layout/MobileLayout'
import BottomNavbar from '../components/BottomNavbar'

const TodosMemory = () => {
  const [isShowDatePopup, setShowDatePopup] = useState(false)
  const [isShowColorStandard, setShowColorStandard] = useState(false)

  const weekDays = ['일', '월', '화', '수', '목', '금', '토']

  const getDaysInMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month - 1, 1).getDay()
    const lastDate = new Date(year, month, 0).getDate()
    
    const days = []
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    for (let i = 1; i <= lastDate; i++) {
      days.push(i)
    }
    while (days.length < 42) {
      days.push(null)
    }
    return days
  }

  const currentDays = getDaysInMonth(2024, 12)

  return (
    <MobileLayout>
      <div style={{ marginTop: '84px' }}>
        <section style={{ display: 'flex', paddingBottom: '53.5px', textAlign: 'left' }}>
          <div style={{ width: '209px' }} >
            <Typography variant='title-7-extrabold-20'>
              이번달은 모은 자투리 시간이 없어요
            </Typography>
            <br style={{ marginBottom: '16px' }} />
            <Typography variant='title-5-medium-16'>할일을 등록하고<br/>자투리 시간을 모아볼까요?</Typography>
          </div>
          <img src='https://github.com/user-attachments/assets/ec0c7409-9036-4193-8a1f-ec177cb281b6' alt='티끌이' />
        </section>
        <section style={{ backgroundColor: '#F9FAFC', padding: '21px 16px 0px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              onClick={() => setShowDatePopup(true)}
              style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', border: 'solid 1px #D9DAE2', borderRadius: '4px', cursor: 'pointer', color: 'black' }}
            >
              2024년 12월
              <img src='https://github.com/user-attachments/assets/a5d3b450-56e5-43e5-a948-4d6d9e9e1fa6' alt='캘린더' style={{ paddingLeft: '8px' }} />
            </button>
            <button
              onClick={() => setShowColorStandard(true)}
              style={{ border: '0', outline: '0', backgroundColor: '#F9FAFC', cursor: 'pointer' }}
            >
              <img src='https://github.com/user-attachments/assets/4f9765fa-c8bb-4fdb-aee0-d202acc91053' alt='question' />
            </button>
          </div>
          <div style={{ paddingLeft: '8px', paddingBottom: '108px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '8px',
              marginTop: '16px',
              marginBottom: '8px'
            }}>
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    color: '#000000',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '8px'
            }}>
              {currentDays.map((_day, index) => (
                <div
                  key={index}
                  style={{
                    aspectRatio: '1',
                    backgroundColor: '#D9DAE2',
                    borderRadius: '4px',
                    width: '24px',
                    height: '24px',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#000000'
                  }}
                >
                  {''}
                </div>
              ))}
            </div>
          </div>
        </section>
        <BottomNavbar />
      </div>
      <TodoMemoryDatePopup 
        open={isShowDatePopup}
        onClickClose={() => setShowDatePopup(false)} 
      />
      <TodoMemoryColorStandardPopup
        open={isShowColorStandard}
        onClickClose={() => setShowColorStandard(false)}
      />
    </MobileLayout>
  )
}

export default TodosMemory
