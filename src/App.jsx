import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Private from './pages/Private'
import Home from './pages/Home'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Spinner from 'react-bootstrap/Spinner';

function App() {

  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })

    return ()=>unsubscribe()
  },[])

  if(isFetching){
    // return <h2>Loading...</h2>
    return <Spinner animation="border" />;
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home/>}></Route>
      <Route path='/Private' element={<ProtectedRoute user={user}><Private/></ProtectedRoute>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App