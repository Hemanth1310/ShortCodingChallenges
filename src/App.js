import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Views/Login';
import Home from './Views/Home';
import Form from './Views/Form';
import RandomColorBox from './Views/RandomColorBox';
import Validator from './Views/Validator';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home/:username/:password' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/random-color-generator" element={<RandomColorBox/>}/>
        <Route path='/validator' element={<Validator/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
