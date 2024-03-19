import React, { useRef } from "react";
export default function RefSample3(){
    const inputRef = useRef(null);
    const handleFocus = ()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <p>(함수형 컴포넌트) 버튼 클릭시 input에 focust 처리</p>
        <input type="text"ref={inputRef} />
        <button onClick={handleFocus}>foucs</button>
        </>
    )
}