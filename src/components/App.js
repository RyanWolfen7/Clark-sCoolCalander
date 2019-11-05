import React from 'react';
import DeliveryDateSection from './DeliveryDateSection/DeliveryDateSection'
import { ContentWrapper, CalenderAppWrapper } from './../ClarksComponents'
function App() {
  return (
    <CalenderAppWrapper>
      <ContentWrapper>
        <DeliveryDateSection/>
      </ContentWrapper>
    </CalenderAppWrapper> 
  )
}

export default App;
