import logo from './logo.svg';
import './App.css';
import Appointment from './component/appointment';
import ScheduleAppointment from './component/schedule_appointment';
import ReviewAppoinment from './component/review_appointment';
import Routes from './routes';
import PatientState from './context/patientDetails/patientState';

function App() {

  return (

     <PatientState>
     
      <Routes />
    
    </PatientState>
    
  );
}

export default App;
