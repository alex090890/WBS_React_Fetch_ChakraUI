import './App.css'
import UserInfo from './UserInfo';
import UserList from './UserList'
import {Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route exact path="/" element={<UserList />} />
      <Route path="/address/:id" element={<UserInfo />} />
    </Routes>
  )
}

export default App
