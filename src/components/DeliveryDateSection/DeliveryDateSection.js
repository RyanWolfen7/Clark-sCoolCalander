import React, { useState, useEffect} from 'react'
import { ClarkSection, TitleContainer, BoldHeader, DeliveryDateWrapper, Button, ButtonContent, ButtonContentDate, CalanderDiv, ButtonText } from '../../ClarksComponents'
import Calendar from '../../assets/icons/calendar.svg'

const DeliveryDateSection = (props) => {
  const currentDate = new Date()
  const [ selectedDate, setSelectedDate ] = useState({ day: currentDate.getDay() , month: currentDate.getMonth(), year: currentDate.getYear() })
  const { day, month, year } = selectedDate

  return (
    <DeliveryDateWrapper>
      <ClarkSection>
        <TitleContainer>
          <BoldHeader style={boldHeaderProps}>
            Choose your delivery day
              <span className='free-delivery-notice'> Delivery is always free</span>
          </BoldHeader>
        </TitleContainer>
        <div display={'block'}>
          <Button>
            <ButtonContent>
              <p> Wed { day } { month } </p>
              <span> Earliest Delivery</span>
            </ButtonContent>
            <ButtonContentDate>
              <CalanderDiv>
                <span>{ day }</span>
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
