import React, { useRef } from "react";
import './table.css'

export default function RefPractice2(){
    const writer = useRef('');
    const title = useRef('');
    let idx = 0;
    const handleFoucs = () =>{
        if(writer.current.value.trim()===""){
            writer.current.focus()
        }else if(title.current.value.trim() ===""){
            title.current.focus()
        }else{
            idx +=1;
            const table = document.querySelector('.table');
            const tr = 
            `<tr>
            <td>${idx}</td>
            <td>${writer.current.value}</td>
            <td>${title.current.value}</td>
            </tr>`
            table.insertAdjacentHTML('beforeend',tr )
        }
    }
    return(
        <>
            <div>
                <label htmlFor="">작성자 : </label>
                <input type="text" ref={writer}/>
                <label htmlFor=""> 제목 : </label>
                <input type="text" ref={title} />
                <button onClick={handleFoucs}>작성</button>
            </div>
            <table className="table">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
            </table>
            </>
    )
}