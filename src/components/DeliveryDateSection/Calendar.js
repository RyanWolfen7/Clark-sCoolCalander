import React from 'react'
import { CalendarWrapper, BoldHeader, CalendarText, StyledButton, DatePicker, Overlay } from '../../ClarksComponents'

const Calander = (props) => {
    const { day, numDay, month, year } = props.date
    const handleClose = props.handleClose
    const numberOfDays = new Date( year, new Date().getUTCMonth(month), 0 ).getDate()
    const daysArr = [ 'M', 'T', 'W', 'T', 'F', 'S', 'S' ]

    const closeOutsideModal = (event) => {
        const overlay = document.getElementsByClassName('overlay')
        if(event.target === overlay[0] ) { handleClose() }
    }

    const createCalendar = () => {
        const monthStart = new Date(`1 ${month} ${year}`).toDateString().split(' ')[0][0] 
        console.log(monthStart)
    }

    const createCells = (element) => { return ( <div className='date-cell'> <div className='date-item'> { element } </div> </div> ) }

    return (
        <Overlay className="overlay" onClick={event => closeOutsideModal(event)}>
            <div className="modal">
                <CalendarWrapper>
                    <button style={buttonStyle} onClick={() => handleClose()}>X</button>
                    <BoldHeader style={ header }> { month } </BoldHeader>
                    <DatePicker>
                        <div className="date-picker-head"> { daysArr.map( element => createCells(element))} </div>
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

const header = { margin: ' 0 0 0 0', textAlign: 'center', fontSize: '2rem' }
const buttonStyle = { position: 'auto', top: '2rem', right: '1.5rem', padding: '1rem', cursor: 'pointer', border: '0', float: 'right', color: '#1e5d84', fontWeight: '900' }
