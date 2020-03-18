import React from 'react';
import './App.css';
import B from './componments/B';
import Context from "./componments/Context";
import C from './componments/C';
import D from './componments/D';
import G from './componments/G';
import H from './componments/H';
import Router from './router';
import CarouseFigure from "./pages/carouselFigure";
import CarouselFigureByCss from "./pages/carouselFigureByCss";
import Bubble from "./pages/bubbleSort";
import Sort from "./pages/sort";
import ChooseSort from "./pages/chooseSort";
import InsertSort from "./pages/insertSort";
import IncludeRelate from "./componments/IncludeRealte/IncludeRelate";
import IncludeRelateIndex from "./componments/IncludeRealte/index";
import CAboutContext from "./componments/Context/AboutContext";
import GrandPar from "./componments/Props/ParAndSonContedByProps";
import  ConextComponentConsutomer from "./componments/Context/ShowContext";

import Secode from "./componments/CrossOrgin/sconde"
import Thisd from "./componments/CrossOrgin/thisd"

import Main from "./componments/CrossOrgin/main"
import ContractList from "./pages/Hook.js";
function App() {
  return (
    <div className="App" id = 'app'>
     {/* <B name={'tongtong'} age = {18}/> */}
     {/*<C/>
     <D/>
     <G/> */}
     {/* <Router/> */}
     {/* <H/>
     <C/> */}
     {/* <CarouseFigure />
     <CarouselFigureByCss/>
     <Bubble/>
     <Sort/>
     <ChooseSort/>
     <InsertSort/> */}
     {/* <Context /> */}
     {/* <IncludeRelate/> */}
     {/* <IncludeRelateIndex/> */}
     {/* <CAboutContext/>
     <GrandPar/> */}
     {/* <ConextComponentConsutomer/> */}
     <Secode/>
     {/* <Secode/> */}
     {/* <Thisd/>
     <Main/> */}
     <ContractList/>
    </div>
  );
}

export default App;
