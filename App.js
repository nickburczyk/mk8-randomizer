import React from "react";
import { StyledAppWrapper } from "./components/StyledAppWrapper";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./components/navigation";

const App = () => {
  return (
    <NavigationContainer>
      <StyledAppWrapper>
        <TabNavigator />
      </StyledAppWrapper>
    </NavigationContainer>
  );
};

export default App;
