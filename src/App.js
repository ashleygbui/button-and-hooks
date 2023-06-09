import React, {useState} from 'react';


function App() {
  const [currCount,updateCount] = useState(0)

  function decrementCount(){
    updateCount(prevCount => prevCount-1)
  }

  function incrementCount(){
    updateCount(prevCount => prevCount+1)
  }
  
  return (
    <div style={{backgroundColor: '#FFC0CB'}}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <button onClick = {decrementCount} style = {{width: "100px"}}>-</button>
        <span style={{ fontSize: 50 }}>{ currCount }</span>
       <button onClick ={incrementCount} style = {{width: "100px"}}>+</button>
      </div>
    </div>
  );
}

export default App;
