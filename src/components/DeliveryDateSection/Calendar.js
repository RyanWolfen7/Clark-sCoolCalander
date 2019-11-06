import React from 'react'
import { CalendarWrapper, BoldHeader, CalendarText, StyledButton, DatePicker } from '../../ClarksComponents'

const Calander = (props) => {
    const { day, numDay, month, year } = props.date
    const numberOfDays = new Date( year, new Date().getUTCMonth(month), 0 ).getDate() 

    return (
        <CalendarWrapper>
            <button style={buttonStyle}>X</button>
            <BoldHeader style={ header }> { month } </BoldHeader>
            <DatePicker>
                <div className="date-picker-head"></div>
                <div className="date-picker-body"></div>
            </DatePicker>
            <CalendarText>
                <span className='weekDay'> {day} </span>
                <span> will be your regular delivery day. You can always change this in your account. </span>
            </CalendarText>
            <StyledButton> GOT IT </StyledButton>
        </CalendarWrapper>
    )
}

export default Calander 

const header = { margin: ' 0 0 0 0', textAlign: 'center', fontSize: '2rem' }
const buttonStyle = { position: 'auto', top: '2rem', right: '1.5rem', padding: '1rem', cursor: 'pointer', border: '0', float: 'right', color: '#1e5d84', fontWeight: '900' }
