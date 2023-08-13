import React from 'react';
import { StyledAppWrapper } from './components/StyledAppWrapper';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator, StackNavigator, DrawerNavigator } from './components/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StyledAppWrapper>
        <TabNavigator/>
        {/* <DrawerNavigator/> */}
        {/* <StackNavigator/> */}
      </StyledAppWrapper>
    </NavigationContainer>
  );
}

export default App

