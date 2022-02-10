import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import Header from './components/Header';
import { AppContextProvider } from './context/AppContext';

export default function App() {
  return (
    <>
      <AppContextProvider>
        <StatusBar translucent={true} />
        <Header />
        <Navigation />
      </AppContextProvider>
    </>
  );
}

