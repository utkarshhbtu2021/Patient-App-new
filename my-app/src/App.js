import logo from './logo.svg';
import './App.css';
import Appointment from './component/appointment';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { getAccessTokenSilently } = useAuth0();
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  return (
    <div className="App">
     <Appointment/>
    </div>
  );
}

export default App;
