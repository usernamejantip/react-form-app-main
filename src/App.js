import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Preview from './Pages/Preview';
import Success from './Pages/Success';
import TaxForm from './Pages/TaxForm';
import TaxResult from './Pages/TaxResult';

function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Register/>}/>
      <Route path='/preview' element={<Preview/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/tax' element={<TaxForm/>} />
      <Route path='/result' element={<TaxResult/>}/>
    </Routes>
  );
}

export default App;

