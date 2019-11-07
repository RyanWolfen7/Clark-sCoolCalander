import React, { useState, useEffect } from 'react'
import { ClarkSection, TitleContainer, BoldHeader, DeliveryDateWrapper } from '../../ClarksComponents'
import CalendarButton from './CalendarButton'
import Calendar from './Calendar'

const DeliveryDateSection = (props) => {
  const currentDate = new Date().toDateString().split(' ')
  const [ selectedDate, setSelectedDate ] = useState({ day: currentDate[0], month: currentDate[1], numDay: currentDate[2], year: currentDate[3] })
  const [ oldDate, setOldDate ] = useState(selectedDate)
  const [ calendarOpen, setCalendarOpen ] = useState(false) 
  
  const handleCalendar = (save) => {
    if(save) {
      setOldDate(selectedDate)
      window.alert(`You've successfully changed your delivery date`)
    } else if(calendarOpen) {
      setSelectedDate(oldDate)
      window.alert(`You've changes have been reverted`)
    } 
    setCalendarOpen(!calendarOpen)
  }

  const handleDate = (payload) => {
    setSelectedDate(payload)
  }

  return (
    <DeliveryDateWrapper>
      <ClarkSection>
        <TitleContainer >
          <BoldHeader style={boldHeaderProps}>
            Choose your delivery day
              <span className='free-delivery-notice'> Delivery is always free</span>
          </BoldHeader>
        </TitleContainer>
        <CalendarButton 
          handler={handleCalendar}
          date={selectedDate}
        /> 
        { calendarOpen && <Calendar
          date={selectedDate}
          handleClose={handleCalendar}
          handleDate={handleDate}
        /> }
      </ClarkSection>
    </DeliveryDateWrapper>
  )
}

export default DeliveryDateSection

const boldHeaderProps = { color: '#1E5D84', margin: '6rem 0 2rem', textAlign: 'left' }
