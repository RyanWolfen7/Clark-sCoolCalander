import React from 'react';
import DeliveryDateSection from './DeliveryDateSection/DeliveryDateSection'
import { ContentWrapper, CalenderWrapper } from './../ClarksComponents'
function App() {
  return (
    <CalenderWrapper>
      <ContentWrapper>
        <DeliveryDateSection/>
      </ContentWrapper>
    </CalenderWrapper> 
  )
}

export default App;
