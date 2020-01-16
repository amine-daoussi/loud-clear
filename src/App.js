import React from 'react';
import { Switch,Router, Route } from 'react-router-dom'
// import routes from 'shared/generalRoutes'
import Layout from './layout'
import Home from './pages/home/index'
import Impressium from './pages/impressium/index'
import './global.css'

function App (){
  return(
    <div>
     <Layout>
       <Route exact path='/' component={Home}/> 
       <Route exact path='/impressium' component={Impressium}/> 
     </Layout>
    </div>
  )
}
export default App;
