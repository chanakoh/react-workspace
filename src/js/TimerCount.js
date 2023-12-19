import React,{useState,useEffect} from "react";

function Timer(){
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        document.title = `${count}`;
    });
    return(
        <div>
        <p>{count}</p>
        <button
            onClick={increment}
        >Click</button>
    </div>
)
}
export default Timer;