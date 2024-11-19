import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainRoute from './routes/MainRoute';
import Currency from './routes/Currency';
function App() {
  return (
   <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<MainRoute />}/>
        <Route path='/Currency/ticker' element={<Currency/>}/>
        <Route />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
