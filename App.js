import React from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { MenuScreen } from './screens/MenuScreen';
import { StyledAppWrapper } from './components/StyledAppWrapper';
import { ContactScreen } from './components/ContactScreen';
import { LoginScreen } from './screens/LoginScreen';

const App = () => {
  return (
    <StyledAppWrapper>
      {/* <WelcomeScreen/> */}
      {/* <MenuScreen/> */}
      {/* <ContactScreen/> */}
      <LoginScreen />
    </StyledAppWrapper>
  );
}

export default App

