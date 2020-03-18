import React from "react";
import ReactDOM from 'react-dom';
import ContractList from "../pages/Hook.js";
export function Hook(){
    ReactDOM.render(<ContractList />, document.querySelector("#app"))
}
