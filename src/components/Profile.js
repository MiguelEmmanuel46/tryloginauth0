import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 

export const Profile = () => {
    const {user, isAuthenticated} = useAuth0();

  return( 
    isAuthenticated && (
    <div>
        <p>{user.given_name}</p>
        <p>{user.picture}</p>
        <p>{user.email}</p>
       <img src={user.picture}/>
    </div>
  )
  );
}


