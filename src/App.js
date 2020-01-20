import React from 'react';
import SignUp from "./SignUp"
import SignIn from "./Login"
import CheckboxContainer from './Checkbox/CheckboxContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ProtectedRoute} from './protected.route'
import NavBar from './NavBar'
import EnhancedTable from './Showings';
function App() {
  return (
    <BrowserRouter>
    {/* Base URL Component Loads */}
     <Route exact path='/' render={(props) => <NavBar {...props} message={"Movie Seating Powered by React and Material UI"} /> } />
     <Route exact path='/' component={SignIn} />
     
     {/* Register Component Loads */}
     <Route exact path='/register' render={(props) => <NavBar {...props} message={"Movie Seating Powered by React and Material UI"} /> } />
     <Route exact path='/register' component={SignUp} />
     
     {/* Protected Movie Listing URL Component Loads */}
     <Route exact path='/listings' render={(props) => <NavBar {...props} message={"Select Movie Time"} /> } />
     <ProtectedRoute exact path='/listings' component={EnhancedTable} />

     {/* Protected Movie Seating URL Component Loads */}
     <Route exact path='/listings/showing' render={(props) => <NavBar {...props} message={"Select Seats"} /> } />
     <ProtectedRoute exact path='/listings/showing' component={CheckboxContainer} />
         
    </BrowserRouter>
  );
}

export default App;
