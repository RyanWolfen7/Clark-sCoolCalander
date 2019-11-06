import React from 'react'
import { CalendarWrapper, BoldHeader, CalendarText, StyledButton, DatePicker, Overlay, DateCell, DateItem } from '../../ClarksComponents'

const Calander = (props) => {
  const { day, numDay, month, year } = props.date
  const handleDate = props.handleDate
  const handleClose = props.handleClose
  const daysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const numberOfDays = new Date(year, new Date(`${numDay} ${month} ${year}`).getUTCMonth() + 1, 0).getDate()
  const startMonth = new Date(`1 ${month} ${year}`).toDateString().split(' ')[0]
  const daysInMonthArr = [...Array(numberOfDays).keys()].slice(1)
  const closeOutsideModal = (event) => {
    const overlay = document.getElementsByClassName('overlay') //fix later
    if (event.target === overlay[0]) { handleClose() }
  }

  const selectDay = (selected) => {
    const updatedDay = new Date(`${selected} ${month} ${year}`).toDateString().split(' ')[0]
    handleDate({ ...props.date, ...{ day: updatedDay, numDay: selected, month: month } })
  }
  const createCalendar = () => {
    [...Array(daysArr.findIndex((element) => { return element === startMonth }) + 1).keys()].slice(1).forEach(() => daysInMonthArr.unshift('')) //Finds the day in the week that the month starts on and adds spaces 
    return daysInMonthArr.map((element, index) => createCells(element, index))
  }
  const createCells = (element, index) => {
    let styles = {}
    let clickable = true
    if (new Date(`${element} ${month} ${year}`) < new Date()) { styles = oldDates(element) ; clickable = false }
    if (element == '') { styles = blank ; clickable = false } 
    if (daysArr.find(x => x[0] === element)) { styles = headerDays ; clickable = false}
    if (element == numDay) { styles = selectedDay }
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
          <StyledButton> GOT IT </StyledButton>
        </CalendarWrapper>
      </div>
    </Overlay>
  )
}

export default Calander

const header = { margin: ' 0 0 0 0', textAlign: 'center', fontSize: '2rem', color: '#1e5d84' }
const headerDays = { color: '#1e5d84', border: '0' }
const buttonStyle = { position: 'auto', top: '2rem', right: '1.5rem', padding: '1rem', cursor: 'pointer', border: '0', float: 'right', color: 'lightGrey', fontWeight: '900' }
const oldDates = (element) => { return { backgroundColor: 'lightGrey', opacity: '0.5', color: 'darkGrey', border: '0', cursor: 'default' } }
const selectedDay = { backgroundColor: '#e66c55', color: '#ffff' }
const changeMonthButton = { margin: '10px 10px 0px', border: '0', fontSize: '2.5rem', color: '#1e5d84' }
const blank = { backgroundColor: '#ffff', border: '0', cursor: 'default'}
