import React, { useState, useEffect} from 'react'
import { ClarkSection, TitleContainer, BoldHeader, DeliveryDateWrapper, Button, ButtonContent, ButtonContentDate, CalanderDiv, ButtonText } from '../../ClarksComponents'
import Calendar from '../../assets/icons/calendar.svg'

const DeliveryDateSection = (props) => {
  const currentDate = new Date().toDateString().split(' ')
  const [ selectedDate, setSelectedDate ] = useState({ day: currentDate[0], month: currentDate[1], numDay: currentDate[2], year: currentDate[3] })
  const [ calendarOpen, setCalendarOpen ] = useState(false)
  const { day, numDay, month, year } = selectedDate

  const handleCalendar = () => {
    setCalendarOpen(!calendarOpen)
  }

  return (
    <DeliveryDateWrapper>
      <ClarkSection>
        <TitleContainer>
          <BoldHeader style={boldHeaderProps}>
            Choose your delivery day
              <span className='free-delivery-notice'> Delivery is always free</span>
          </BoldHeader>
        </TitleContainer>
        { calendarOpen && <h1>HOME</h1>}
        <div display={'block'}>
          <Button onClick={ () => handleCalendar() } >
            <ButtonContent>
              <p> { day } { numDay } { month } </p>
              <span> Earliest Delivery</span>
            </ButtonContent>
            <ButtonContentDate>
              <CalanderDiv>
                <span>{ numDay }</span>
                <img alt='Calendar' src={Calendar} />
              </CalanderDiv>
              <ButtonText className='change'>
                <p> Change ></p>
              </ButtonText>
            </ButtonContentDate>
          </Button>
        </div>
      </ClarkSection>
    </DeliveryDateWrapper>
  )
}

export default DeliveryDateSection

const boldHeaderProps = { color: '#1E5D84', margin: '6rem 0 2rem', textAlign: 'left' }
