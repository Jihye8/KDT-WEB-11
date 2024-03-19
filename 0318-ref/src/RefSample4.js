import React, { useRef, useState } from "react";

export default function RefSampls4(){
    const idRef = useRef(1);
    const [id, setId] = useState(10);
    const plusIdRef =() =>{idRef.current+=1;}
    const plusIdState =()=>{setId(id+1);}
    return(
        <div>
            <h1>Ref Sample - 로컬변수</h1>
            <h2>{idRef.current}</h2>
            <button onClick={plusIdRef}>plus Ref</button>

            <h2>{id}</h2>
            <button onClick={plusIdState}>plus State</button>
        </div>
    )
}