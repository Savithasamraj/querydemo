
import './App.css';
import Login from "./Login";
import Register from './Register';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from './Form';
import Dashboard from './Dashboard';
import { UserProvider } from './UserContxt';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </UserProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
