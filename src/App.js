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
     <NavBar />
     <Route exact path='/' component={SignIn} />
     <Route exact path='/register' component={SignUp} />
     <ProtectedRoute exact path='/listings' component={EnhancedTable} />
     <ProtectedRoute exact path='/listings/showing' component={CheckboxContainer} />
     

     
    </BrowserRouter>
  );
}

export default App;
