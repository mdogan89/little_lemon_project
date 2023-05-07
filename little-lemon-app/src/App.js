import Footer from './Footer';
import Homepage from './Homepage';
import Nav from './Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Reservations from './Reservations';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/reservations' element={<Reservations />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
