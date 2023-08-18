import { useAuth0 } from '@auth0/auth0-react'; 

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}
