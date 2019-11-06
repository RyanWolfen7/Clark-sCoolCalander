import React, { usestate } from 'react'
import { CalendarWrapper, BoldHeader, CalendarText, StyledButton, DatePicker, Overlay, DateCell, DateItem } from '../../ClarksComponents'

const Calander = (props) => {
    const { day, numDay, month, year } = props.date
    const handleDate = props.handleDate
    const handleClose = props.handleClose
    const daysArr = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
    const numberOfDays = new Date( year, new Date().getUTCMonth(month), 0 ).getDate()
    const startMonth = new Date(`1 ${month} ${year}`).toDateString().split(' ')[0] 
    const daysInMonthArr = [...Array(numberOfDays).keys()].slice(1)
    
    const closeOutsideModal = (event) => {
        const overlay = document.getElementsByClassName('overlay')
        if(event.target === overlay[0] ) { handleClose() }
    }

    const selectDay = (day) => {
        handleDate({...props.date, numDay: day})
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
                <DateItem onClick={() => selectDay(element)}className='date-item' style={ styles }> { element } </DateItem>
            </DateCell> 
        ) 
    }

    const monthChange = ( opperator ) => {
        // const now = new Date(numDay + month + year)
        // const current = new Date(now.getUTCFullYear(), now.getUTCMonth() + 1, 1).toDateString().split(' ')
        // handleDate({day: current[0], numDay: current[1], month: current[2], year: current[3]})
    }

    return (
        <Overlay className="overlay" onClick={event => closeOutsideModal(event)}>
            <div className="modal">
                <CalendarWrapper>
                    <button style={buttonStyle} onClick={() => handleClose()}>X</button>
                    <BoldHeader style={ header }>
                        <button style={ changeMonthButton } onClick={() => monthChange(false)}> {'<'} </button>
                        { month } { year }
                        <button style={ changeMonthButton } onClick={() => monthChange(true)}> {'>'} </button>
                    </BoldHeader>
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
const changeMonthButton = { margin: '10px 10px 0px', border: '0', fontSize: '2.5rem', color: '#1e5d84'}
