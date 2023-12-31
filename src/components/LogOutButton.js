import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const LogOutButton = () => {
    const {logout} = useAuth0();
  return (
    <div>
          <button onClick={() => logout()}>LogOutButton</button>
    </div>
  )
}
