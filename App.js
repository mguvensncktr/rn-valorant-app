import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import Header from './components/Header';


export default function App() {
  return (
    <>
      <StatusBar translucent={true} />
      <Header />
      <Navigation />
    </>
  );
}

