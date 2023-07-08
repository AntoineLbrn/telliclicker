import React from 'react';
import './App.css';
import { Game } from './features/game/Game';
import { SignInComponent } from './features/login/Login';
import { useGetUserQuery } from './services/resources'

function App() {
  const { data, isLoading } = useGetUserQuery("currentUser")

  if (isLoading) return <>"..."</>;

  return (
    <div className="App">
      {data ? <Game username={data.username} /> : <SignInComponent />}
    </div>

  );
}

export default App;
