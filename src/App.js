import React from 'react';
import './App.css';
import B from './componments/B';
import C from './componments/C';
import D from './componments/D';
function App() {
  return (
    <div className="App">
     <B name={'tongtong'} age = {18}/>
     <C/>
     <D/>
    </div>
  );
}

export default App;
