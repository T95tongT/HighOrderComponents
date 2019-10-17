import React from 'react';
import './App.css';
// import B from './componments/B';
// import C from './componments/C';
// import D from './componments/D';
// import G from './componments/G';
// import H from './componments/H';
// import Router from './router';
import CarouseFigure from "./pages/carouselFigure";
import CarouselFigureByCss from "./pages/carouselFigureByCss";

function App() {
  return (
    <div className="App" id = 'app'>
     {/* <B name={'tongtong'} age = {18}/>
     <C/>
     <D/>
     <G/> */}
     {/* <Router/> */}
     {/* <H/>
     <C/> */}
     <CarouseFigure />
     <CarouselFigureByCss/>
    </div>
  );
}

export default App;
