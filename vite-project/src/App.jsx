import './App.css'
import UserList from './UserList'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
      <h1 className='pageHeader'>User List</h1>
      <UserList />
    </Routes>
  )
}

export default App
