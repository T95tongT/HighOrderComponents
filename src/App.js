import React from 'react';
import './App.css';
import B from './componments/B';
import C from './componments/C';
import D from './componments/D';
import G from './componments/G';
import Router from './router';
function App() {
  return (
    <div className="App">
     {/* <B name={'tongtong'} age = {18}/>
     <C/>
     <D/>
     <G/> */}
     <Router/>
    </div>
  );
}

export default App;
