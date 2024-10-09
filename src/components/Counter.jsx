import { useState } from "react";


const Counter = () => {
    const [count, setCount]  =useState(0);
    const handleAdding =()=>{
       const newCount = count + 1;
        setCount(newCount)
    }
    const handleSub=()=>{
        const subC = count - 1;
        setCount(subC)
    }
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleAdding} className="m-5 border p-3 bg-red-200 rounded-md">addCount</button>
            <button onClick={handleSub} className="border p-3 bg-blue-200 rounded-md">subCount</button>
        </div>
    );
};

export default Counter;