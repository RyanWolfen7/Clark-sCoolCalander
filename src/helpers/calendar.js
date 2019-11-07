export const daysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const currentMonth = (numDay, month, year) => {
    const numberOfDays = new Date(year, new Date(`${numDay} ${month} ${year}`).getUTCMonth() + 2, 0).getDate()
    const startMonth = new Date(`1 ${month} ${year}`).toDateString().split(' ')[0]
    const daysInMonthArr = [...Array(numberOfDays).keys()].slice(1)

    return { startMonth, daysInMonthArr }
} 

//Finds the day in the week that the month starts on and adds spaces
export const findMonthStartDay = (startMonth, daysInMonthArr) => {
    [...Array(daysArr.findIndex((element) => { return element === startMonth }) + 1).keys()]
    .slice(1)
    .forEach(() => daysInMonthArr.unshift(''))  
}

export const filterCells = (props) => {
    let {element, month, year, numDay } = props
    let styles = {}
    let clickable = true

    if(new Date(`${element} ${month} ${year}`) < new Date()) { styles = pastDates ; clickable = false }
    if(element === '') { styles = blank ; clickable = false } 
    if(daysArr.find(x => x[0] === element)) { styles = headerDays ; clickable = false}
    if(element == numDay) { styles = selectedDay }
    return {clickable, styles}
}

const headerDays = { color: '#1e5d84', border: '0' }
const pastDates = { backgroundColor: 'lightGrey', opacity: '0.5', color: 'darkGrey', border: '0', cursor: 'default' } 
const selectedDay = { backgroundColor: '#e66c55', color: '#ffff' }
const blank = { backgroundColor: '#ffff', border: '0', cursor: 'default'}
// const currentDateStyle = { backgroundColor: '#e66c55', borderRadius: '50%', color: '#fff'} // impliment later
