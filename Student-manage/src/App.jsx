
import './App.css'
import { Route, Routes } from "react-router-dom"
import AllStudent from './page/AllStudent'
import Dashboard from './page/Dashboard'
import Attendence from './page/Attendence'
import Student from './page/Student'
import Fees from './page/fees'
import EditStudent from './page/EditStudent'
import Editfee from './page/editfees'
import Fee from './page/fee'
import AllAttend from './page/AllAttend'
import EditAttendence from './page/EditAttendence'
import Login from './loginRegister/Login'
import Register from "./loginRegister/Register"
import Sidebaar from './component/Sidebaar'
import GetRegister from './page/Register1'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/allAttend" element={<AllAttend />} />
        <Route path="/allstudent" element={<AllStudent />} />
        <Route path="/student" element={<Student />} />
        <Route path="/editStudent/:id" element={<EditStudent />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/editAttendence/:id" element={<EditAttendence />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editfees/:id" element={<Editfee />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/user" element={<Sidebaar />} />
        <Route path="/registerGet" element={<GetRegister />} />

      </Routes>
    </>
  )
}

export default App
