import React from 'react';
import './App.css';
import { SignInComponent } from './Login';
import { useGetUserQuery } from './services/user'

function App() {

  const { data, error, isLoading } = useGetUserQuery("currentUser")

  if (isLoading) return <>"..."</>;

  return (
    <div className="App">
      {error ? <SignInComponent /> :

        <>Cookie clicker {data.user.username}</>

      }

      Telliclicker
    </div>
  );
}

export default App;
