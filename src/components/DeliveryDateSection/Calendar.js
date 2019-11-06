import React from 'react'
import { CalendarWrapper, BoldHeader, CalendarText, StyledButton, DatePicker, Overlay, DateCell, DateItem } from '../../ClarksComponents'

const Calander = (props) => {
    const { day, numDay, month, year } = props.date
    const handleClose = props.handleClose
    const numberOfDays = new Date( year, new Date().getUTCMonth(month), 0 ).getDate()
    const daysInMonthArr = [...Array(numberOfDays).keys()].slice(1);
    const startMonth = new Date(`1 ${month} ${year}`).toDateString().split(' ')[0] 
    const daysArr = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]

    const closeOutsideModal = (event) => {
        const overlay = document.getElementsByClassName('overlay')
        if(event.target === overlay[0] ) { handleClose() }
    }
    const createCalendar = () => {
        [...Array(daysArr.findIndex((element) => {return element === startMonth}) + 1).keys()].slice(1).forEach(() => daysInMonthArr.unshift('')) //Finds the day in the week that the month starts on and adds spaces 
        return daysInMonthArr.map(element => createCells(element))
    }
    const createCells = (element) => { 
        let styles = {}
        if (daysArr.find(x => x[0] === element)) { styles = headerDays}
        if (element == numDay) { styles = selectedDay}
        if (element < new Date().getDate()) { styles = oldDates(element)}
        return ( 
            <DateCell className='date-cell' >
                <DateItem className='date-item' style={ styles }> { element } </DateItem>
            </DateCell> 
        ) 
    }

    return (
        <Overlay className="overlay" onClick={event => closeOutsideModal(event)}>
            <div className="modal">
                <CalendarWrapper>
                    <button style={buttonStyle} onClick={() => handleClose()}>X</button>
                    <BoldHeader style={ header }> { month } { year }</BoldHeader>
                    <DatePicker>
                        <div className="date-picker-head"> { daysArr.map( element => createCells(element[0]))} </div>
                        <div className="date-picker-body"> { createCalendar() } </div>
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
const oldDates = (element) => { return { backgroundColor: element === '' ? '#ffff' : 'lightGrey', opacity: '0.5', color: 'darkGrey', border: '0'} }
const selectedDay = { backgroundColor: '#e66c55', color: '#ffff'}
