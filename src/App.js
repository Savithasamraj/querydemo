
import './App.css';
import Login from "./Login";
import Register from './Register';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form1 from './Form1';
import Dashboard from './Dashboard';
import { UserProvider } from './UserContxt';
import Mentorlogin from './Mentorlogin';
import Admin from './Admin';
import Adminportal from './Adminportal';
import Creatementor from './Creatementor';
import Mentorpage from './Mentorpage';
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path="/form" element={<Form1 />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route  path="/mentor" element={<Mentorlogin />}></Route>
            <Route  path="/admin" element={<Admin/>}></Route>
            <Route  path="/adminportal" element={<Adminportal/>}></Route>
            <Route  path="/creatementor" element={<Creatementor/>}></Route>
            <Route  path="/mentorpage" element={<Mentorpage/>}></Route>

          </Routes>
        </UserProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
