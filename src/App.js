import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Views/Login';
import Home from './Views/Home';
import Form from './Views/Form';
import RandomColorBox from './Views/RandomColorBox';
import Validator from './Views/Validator';
import Quiz from './Collection/Quiz/Quiz';
import TextConverter from './Collection/TextConverter/TextConverter';
import JokeGenerator from './Collection/JokeGenerator/JokeGenerator';
import Dice from './Collection/Dice/Dice';
import RPS from './Collection/RPSgame/RPS'
import Hangman from './Collection/Hangman/Hangman'
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
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path ='/text-converter' element={<TextConverter/>}/>
        <Route path="/JokeGenerator" element={<JokeGenerator/>}/>
        <Route path="/dice" element={<Dice/>}/>
        <Route path="/rps" element={<RPS/>}/>
        <Route path="/hangman" element={<Hangman/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
