import './App.css';
import Registration from './screen/Register/registration';

import Login from './screen/Login/login';
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './screen/dashboard/dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Container>  
      
      <Routes> 
      <Route path='/'  element={ <Registration />} /> 
      <Route path='/login' element={ <Login />} /> 
      




      <Route path='/dashboard' element={ <Dashboard />} /> 
      

      </Routes>


      {/* <Registration></Registration> */}
      </Container>
      </BrowserRouter> 
      
    </div>
  );
}
export default App;