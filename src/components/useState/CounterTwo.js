import React, { useState } from 'react'

function CounterTwo() {
    const initialValue = 0;
    const [count,setCount]=useState(initialValue);
    return (
        <div>
            <div>
            Count: {count}
            </div>
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            {/* <button onClick={()=>setCount(count+5)}>Increment 5</button> */}
        </div>
        
    )
}
export default CounterTwo
