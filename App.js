import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))

      } else {
        dispatch(logout({}))

      }
    })
    
  }, [dispatch])
  
  return (
    //BEM naming convention
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
        

      ) : (
        <Login />
      )}
     
    </div>
  );
}

export default App;
