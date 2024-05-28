import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Front from './components/Front/front';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Front /> 
    </div>
  );
}

export default App;
