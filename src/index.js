import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Light, Dark} from './style/theme';
import NavigationApp from './component/Navigator/Navigator';

export default function App() {
  const isDarkMode = false; 

  const theme = isDarkMode ? Dark : Light;
  return (
    <PaperProvider theme={theme}>
      <NavigationApp/>
    </PaperProvider>
      
  );
}