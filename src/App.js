import React from 'react';
import { Switch,Router, Route } from 'react-router-dom'
// import routes from 'shared/generalRoutes'
import Home from './pages/home/index'
import Impressium from './pages/impressium/index'
import './global.css'

function App (){
  return(
    <div>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/impressium' component={Impressium}/> 
    </div>
  )
}
export default App;
