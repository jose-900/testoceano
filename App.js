import {StatusBar } from 'react-native';
import {NavigationContainer } from "@react-navigation/native"
import Routes from './src/routes';
import KartProvider from './src/contexts/kartContext'

export default function App() {

  return (
    <NavigationContainer>
      <KartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes/>
      </KartProvider>
    </NavigationContainer>
  );
}

 
