import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from './pages/Movies'
import Movie from './pages/Movie'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" exact element={ <Movies /> }/>
        <Route path="/movies" exact element={ <Movies /> }/>
        <Route path="/movies/:page" exact element={ <Movies /> }/>
        <Route path="/movies/:page/:id" exact element={ <Movie /> }/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
