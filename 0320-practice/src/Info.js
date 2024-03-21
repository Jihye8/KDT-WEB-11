import React, { useState } from 'react'
import InfoList from './Components/InfoList'

export default function Info() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [list, setList] = useState([]);
    const registerList =() =>{
        const newList = list.concat({name:name, age:age});
        return setList(newList);
    }
    return (
        <div>
            <div className='input'>
                이름 : <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                나이 : <input type="text" onChange={(e)=>setAge(e.target.value)} />
                <button onClick={registerList}>등록</button>
            </div>
            {list.length>0&&<InfoList list={list}/>}
        </div>
  )
}
