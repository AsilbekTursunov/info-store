import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, Navbar } from './components';
import { useEffect } from 'react';
import { GetItem } from './components/get-user/preset-storage';
import AuthorInfo from './components/service/axios';
import { useDispatch } from 'react-redux';
import { userEnterSuccess } from './components/slices/author';

function App() {
  const dispatch = useDispatch()
  const getUser = async () =>{
      try {
        const responce = await AuthorInfo.getUser()
        console.log(responce);
        dispatch(userEnterSuccess(responce))
      } catch (error) {
        console.log(`Get user error ${error}`);
      }
  }
  useEffect( () => {
    const token = GetItem('token')
    if (token) {
      getUser()
    }
  } , []);
  return (
    <div >
      <Navbar/>
       <Routes>
          <Route path={'/'} element={<Main />}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
       </Routes>
    </div>
  );
}

export default App;
