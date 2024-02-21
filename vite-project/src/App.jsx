import './App.css'
import UserInfo from './UserInfo';
import UserList from './UserList'
import {Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route exact path="/" component={UserList} />
      <Route path="/address/:id" component={UserInfo} />
    </Routes>
  )
}

export default App
