import './App.css'
import AppRouter from './Router/AppRouter';
import NavBar from '../src/Components/NavBar/NavBar';
import Footer from '../src/Components/Footer/Footer';
import { LoginContextProvider } from './utils/LoginContext';

function App() {
  return (
    <LoginContextProvider>
      <NavBar />
      <AppRouter />
      <Footer />
    </LoginContextProvider>

  );
}

export default App;
