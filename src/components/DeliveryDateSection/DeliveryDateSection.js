import React from 'react'
import { ClarkSection, TitleContainer, BoldHeader, DeliveryDateWrapper, Button, ButtonContent, ButtonContentDate} from '../../ClarksComponents'
import calender from '../../assets/icons/calander.svg'

const DeliveryDateSection = (props) => {

    return (     
        <DeliveryDateWrapper>
            <ClarkSection>
                <TitleContainer>
                    <BoldHeader style={boldHeaderProps}>
                    Choose your delivery day
                    <span class='free-delivery-notice'> Delivery is always free</span>
                    </BoldHeader>
                </TitleContainer>
                <div display={'block'}>
                    <Button>
                        <ButtonContent>
                            <p> Wed 06 Nov </p>
                            <span> Earliest Delivery</span>
                        </ButtonContent>
                        <ButtonContentDate>
                            <div class='calander'>
                                <span>06</span>
                                <img alt='' src={calender}/>
                            </div>
                        </ButtonContentDate>
                    </Button>
                </div>
            </ClarkSection>
        </DeliveryDateWrapper> 
    )
}

export default DeliveryDateSection

const boldHeaderProps = { color: '#1E5D84' , margin: '6rem 0 2rem', textAlign: 'left' }
