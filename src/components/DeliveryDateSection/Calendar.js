import React from 'react'
import { CalendarWrapper, BoldHeader, CalendarText, StyledButton, DatePicker, Overlay, DateCell, DateItem } from '../../ClarksComponents'
import { currentMonth, daysArr, findMonthStartDay, filterCells, currentDateChecker } from '../../helpers/calendar'

const Calander = (props) => {
  const { day, numDay, month, year } = props.date
  const { handleDate, handleClose } = props
  const { startMonth, daysInMonthArr } = currentMonth(numDay, month, year)

  const closeOutsideModal = (event) => {
    const overlay = document.getElementsByClassName('overlay') //fix later
    if (event.target === overlay[0]) { handleClose() }
  }

  const selectDay = (selected) => {
    const updatedDay = new Date(`${selected} ${month} ${year}`).toDateString().split(' ')[0]
    handleDate({ ...props.date, ...{ day: updatedDay, numDay: selected, month: month } })
  }
  const createCalendar = () => {
    findMonthStartDay(startMonth, daysInMonthArr)
    return daysInMonthArr.map((element, index) => createCells(element, index))
  }
  const createCells = (element, index) => {
    let { clickable, styles } = filterCells({element, month, year, numDay})
    
    return (
      <DateCell className='date-cell' key={index}>
        <DateItem onClick={() => clickable ? selectDay(element) : ''} className='date-item' style={styles}> {element} </DateItem>
      </DateCell>
    )
  }

  const monthChange = ( op ) => {
    const now = new Date(`${numDay} ${month} ${year}`)
    const current = new Date(now.getFullYear(), now.getMonth() + ( op ?  1 :  -1), 1).toDateString().split(' ')
    handleDate({ day: current[0], numDay: current[2], month: current[1], year: current[3] })
  }

  return (
    <Overlay className="overlay" onClick={event => closeOutsideModal(event)}>
      <div className="modal">
        <CalendarWrapper>
          <button style={buttonStyle} onClick={() => handleClose()}>X</button>
          <BoldHeader style={header}>
            <button style={changeMonthButton} onClick={() => monthChange(false)}> {'<'} </button>
            {month} {year}
            <button style={changeMonthButton} onClick={() => monthChange(true)}> {'>'} </button>
          </BoldHeader>
          <DatePicker>
            <div className="date-picker-head"> {daysArr.map((element, index) => createCells(element[0], index))} </div>
            <div className="date-picker-body"> {createCalendar()} </div>
          </DatePicker>
          <CalendarText>
            <span className='weekDay'> {day} </span>
            <span> will be your regular delivery day. You can always change this in your account. </span>
          </CalendarText>
          <StyledButton onClick={() => handleClose(!currentDateChecker(numDay, month, year))}> GOT IT </StyledButton>
        </CalendarWrapper>
      </div>
    </Overlay>
  )
}

export default Calander

const header = { margin: ' 0 0 0 0', textAlign: 'center', fontSize: '2rem', color: '#1e5d84' }
const buttonStyle = { position: 'auto', top: '2rem', right: '1.5rem', padding: '1rem', cursor: 'pointer', border: '0', float: 'right', color: 'lightGrey', fontWeight: '900', backgroundColor: '#ffff' }
const changeMonthButton = { margin: '10px 10px 0px', border: '0', fontSize: '2.5rem', color: '#1e5d84', backgroundColor: '#ffff' }
