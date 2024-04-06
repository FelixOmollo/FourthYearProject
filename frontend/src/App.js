import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom'; // Import NavLink
import PrivateRoute from "./utils/PrivateRoute"


import Homepage from './views/Homepage'
import About from './views/About'
import Footer from "./views/footer"
import Loginpage from './views/Loginpage'
import Registerpage from './views/Registerpage'
import Navbar from './views/Navbar'
import Dashboard from './views/Dashboard'




const App = () => {
  return (
    <><Router>
      <Navbar />
      <AuthProvider>

        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Homepage} path="/" exact />
          <Route component={About} path="/about" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />          
        </Switch>
      </AuthProvider>

    </Router>
    
    <Footer />

    </>
    
  );
}

export default App;
