import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const App =()=>{
  const [myNum,setMyNum] = useState(0)

  const inputOne =useRef()
  const inputTwo =useRef()

  const getNumBox=()=>{
    console.log("HELLO")
    console.log(inputOne.current.style)
    inputOne.current.style.width="400px"
    inputOne.current.style.backgroundColor="red"
    inputOne.current.style.padding = "50px"
  }

  const getTextBox=()=>{
    console.log("World")
    console.log(inputTwo.current)
  }

  return(
    <>
    <h1>Welcome to useRef</h1>
    <h2>
      CDSTech
    </h2>
    <input 
    ref={inputOne}
     value={myNum}
    type="number"
    style={{width:'100px'}}
    onChange={(e)=>{setMyNum(e.target.value)}}
    />

<input 
ref={inputTwo}
     value={myNum}
    type="number"
    onChange={(e)=>{setMyNum(e.target.value)}}
    />

    <h3>Value is : {myNum}</h3>

    <button onClick={()=>getNumBox()}>Rupees</button>
    <button onClick={()=>getTextBox()}>Dollers</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
