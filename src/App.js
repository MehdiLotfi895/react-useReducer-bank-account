import { useReducer } from 'react';
import './App.css';
const x={balance:0,loan:0,accountState:false,loanState:false}
function reducer(state,action){
  switch(action.type){
    case "openAccount":
      return({...state,accountState:true})
    case "withdraw":
        return({...state,balance:state.balance-50})
    case "deposit":
      return({...state,balance:state.balance+150})
     case "requestLoan":
      return({...state,loan:5000,loanState:true})
    case "payLoan":
      return({...state,loan:0,balance:state.balance-5000,loanState:false})
    case "closeAccount":
      return({...x})
  }
}

function App() {
  const[state,dispatch]=useReducer(reducer,x);
  console.log(state)
  return (
    <div id="container">
        <div id="title">useReducer Bank Account</div>
        <div className="imformation">Balance:{state.balance}</div>
        <div className="imformation">Loan:{state.loan}</div>
        <button className="bankAction" style={(state.accountState)?{opacity:"40%"}:{}} onClick={()=>{if(!state.accountState){dispatch({type:"openAccount"})}}}>Open Account</button>
        <button className="bankAction" style={(!state.accountState)?{opacity:"40%"}:{}}onClick={()=>{if(state.accountState){dispatch({type:"deposit"})}}}>Deposit 150</button>
        <button className="bankAction" style={(!state.accountState)?{opacity:"40%"}:{}}onClick={()=>{if(state.accountState){if(state.balance>=50){dispatch({type:"withdraw"})}}}}>withdraw 50</button>
        <button className="bankAction" style={(!state.accountState)?{opacity:"40%"}:{}}onClick={()=>{if(state.accountState){if(!state.loanState){dispatch({type:"requestLoan"})}}}}>Requset a loan of5000</button>
        <button className="bankAction" style={(!state.accountState)?{opacity:"40%"}:{}}onClick={()=>{if(state.accountState){if(state.balance>=5000){dispatch({type:"payLoan"})}}}}>Pay loan</button>
        <button className="bankAction" style={(!state.accountState)?{opacity:"40%"}:{}} onClick={()=>{if(state.accountState){if(state.balance==0 && state.loan==0){dispatch({type:"closeAccount"})}}}}>Close account</button>
    </div>

  );
  
}

export default App;

