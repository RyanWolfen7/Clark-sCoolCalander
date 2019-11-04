import React from 'react'
import { ClarkSection, TitleContainer } from '../../ClarksComponents'

const DeliveryDateSection = (props) => {

    return (
        <ClarkSection>
            <TitleContainer>
                <h2>
                    "Choose your delivery day"
                    <span class='free-delivery-notice'> Delivery is always free</span>
                </h2>
            </TitleContainer>
        </ClarkSection>
    )
}

export default DeliveryDateSection
