import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutPage from './pages'
import LoginPage from './pages/Login'
const App : React.FC = () => {
  const [logined, setLogined] = useState('true')

  return logined ? <LayoutPage/> : <LoginPage/>
}
export default App;