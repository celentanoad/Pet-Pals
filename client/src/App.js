import React from 'react';
import { Grommet, Clock } from 'grommet';
import './App.css';

function App() {
  return (
    <Grommet>
    <div>Welcome to Pet Pals</div>
    <Clock 
      type="digital" 
      alignSelf="center" 
      hourLimit="12"
      margin="large"
      size="xlarge"
      />
    </Grommet>
  );
}

export default App;
