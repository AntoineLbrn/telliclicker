import React from 'react';
import './App.css';
import { Game } from './features/game/Game';
import { SignInComponent } from './features/login/Login';
import { useGetUserQuery } from './services/user'

function App() {
  const { data, isLoading } = useGetUserQuery("currentUser")

  if (isLoading) return <>"..."</>;

  return (
    <div className="App">
      {data?.user ? <Game username={data.user.username} /> : <SignInComponent />}
    </div>

  );
}

export default App;
