import React, {useState} from 'react';
import './App.css';

function App() {
  const [nug] = useState(true);//to initalize value
    let ve = {
        "eb":"by"
    }
    let se = {}
    console.log(ve);
    console.log(!!ve);
  return (
    <div className="App">
      <p>hello</p>
        <p>{nug}</p>
    </div>
  );
}

export default App;
