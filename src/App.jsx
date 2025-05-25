import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import MainMenu from './pages/MainMenu';

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <MainMenu onExit={() => setStarted(false)} />
  ) : (
    <WelcomePage
      onStart={() => setStarted(true)}
      onExit={() => {
        console.log('Returning to home screen...');
        setStarted(false); // You can replace this with a more complex landing view if needed
      }}
    />
  );
}
