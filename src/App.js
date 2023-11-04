import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './components/Context';
import Home from './components/Home';
import Login from './components/Login';
import PomodoroTimer from './components/PomodoroTimer';
import ProtectedRoutes from './components/ProtectedRoutes';
import SignUp from './components/Signup';
import ForgetPassword from './components/ForgetPassword';
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<ForgetPassword/>} />
          <Route path="/pomodoro" element={
            <ProtectedRoutes>
              <PomodoroTimer />
            </ProtectedRoutes>} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}


export default App;
