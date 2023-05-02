import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from './components/login/login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route to="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
