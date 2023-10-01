import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import PomodoroTimer from './components/PomodoroTimer';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/pomodoro' element={<PomodoroTimer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
