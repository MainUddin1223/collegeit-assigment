import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './copmonents/Header';
import Home from './copmonents/Home';
import useUser from './copmonents/Hooks/useUser';
import User from './copmonents/User';

function App() {
  const [users]=useUser()
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home users={users}></Home>}></Route>
        <Route path='/user/:email' element={<User users={users}></User>}></Route>
      </Routes>
    </div>
  );
}

export default App;
