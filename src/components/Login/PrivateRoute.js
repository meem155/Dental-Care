import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {user,isLoading} = useAuth();
if(isLoading){
   return <Spinner className="spin" animation="border" variant="info" />
}
    return (
       <Route
           {...rest}
           render={({location}) => user.email ?(children ):( <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
              }}
           />

          
           )

           }
           >
       </Route>
    );
};

export default PrivateRoute;