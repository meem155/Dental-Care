import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/404/NotFound';
import Doctor from './components/Doctor/Doctor';
import Login from './components/Login/Login';
import Footer from './Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute';
import SingleService from './components/Services/SingleService';
import SignIn from './components/Login/SignIn';
// import monitor from './components/Monitor/Monitor';
import React, { useEffect, useState } from 'react';

function App() {

  const [monitor, setMonitor] = useState(null);
  // useEffect(() => {
  fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
    .then(res => res.json())
    .then(data => setMonitor(data));

  // }, [])
  console.log(monitor)


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/singleService/:serviceId">
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute exact path="/monitor">
              <Doctor monitor={monitor}></Doctor>
            </PrivateRoute >
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
