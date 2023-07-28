import Footer from './Footer';
import Homepage from './Homepage';
import Nav from './Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReservationsPage from './ReservationsPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route path='/reservations' element={<ReservationsPage />}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
