import React from 'react'
import { Button, ButtonContent, ButtonContentDate, CalanderDiv, ButtonText } from '../../ClarksComponents'
import Calendar from '../../assets/icons/calendar.svg'

const CalendarButton = (props) => {
  const { day, numDay, month } = props.selectedDate
  const handleCalendar = props.handleCalendar
  console.log(props)

  return (
    <div display={'block'}>
      <Button onClick={() => handleCalendar()} >
        <ButtonContent>
          <p> {day} {numDay} {month} </p>
          <span> Earliest Delivery</span>
        </ButtonContent>
        <ButtonContentDate>
          <CalanderDiv>
            <span>{numDay}</span>
            <img alt='Calendar' src={Calendar} />
          </CalanderDiv>
          <ButtonText className='change'>
            <p> Change ></p>
          </ButtonText>
        </ButtonContentDate>
      </Button>
    </div>
  )
}

export default CalendarButton
