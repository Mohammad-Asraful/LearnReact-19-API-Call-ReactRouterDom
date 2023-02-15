import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Navbar from './ReactRouterComp/Navbar'
import About from './ReactRouterComp/About'
import Contact from './ReactRouterComp/Contact'
// import CompA from './Component/CompA'
import Error from './ReactRouterComp/Error'


const App = () => {
  return (
    <>
      {/* React api call with import axios */}
      {/* <CompA /> */}


      {/* React Router DOM */}
      {/* <About />
      <Contact /> */}

      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='./src/ReactRouterComp/Contact.jsx' component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App