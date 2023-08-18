import './App.css';
import { useState, userEffect } from 'react';
import { LoginButton } from './components/LoginButton';
import { Profile } from './components/Profile';
import { LogOutButton } from './components/LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';






function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {  isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;


  return (
    <div className="App">
    {isAuthenticated ? 
        <LogOutButton />
    :
        <LoginButton />
    }
    
  
    <Profile />
    </div>
  );
}

export default App;
