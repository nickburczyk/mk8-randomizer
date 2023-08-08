import React from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MenuScreen } from './components/MenuScreen';
import { StyledAppWrapper } from './components/StyledAppWrapper';
import { ContactScreen } from './components/ContactScreen';

const App = () => {
  return (
    <StyledAppWrapper>
      {/* <WelcomeScreen/> */}
      {/* <MenuScreen/> */}
      <ContactScreen/>
    </StyledAppWrapper>
  );
}

export default App

