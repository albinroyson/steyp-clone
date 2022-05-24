import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import MainRouter from './Componets/routing/routers/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  
  );
}

export default App;
