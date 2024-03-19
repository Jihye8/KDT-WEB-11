import {useState} from 'react'

export default function PracticeMap(){
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [registerName, setRegisterName] =useState('');
    const [registerEmail, setRegisterEmail] = useState('')
   
    const register =()=>{
        setRegisterName(name);
        setRegisterEmail(email);
    }
    const handleKeyDown= (e)=>{
        if(e.keyCode == 13){
            register();
        }
    }
    const deleteName =()=>{
        setRegisterName('')
    }
    const deletEmail = ()=>{
        setRegisterEmail('')
    }
    return(
        <>
        <input type="text" value={name} placeholder="이름" onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" value={email} placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}} onKeyDown={(e)=>{handleKeyDown(e)}}/>
        <button onClick={register}>등록</button>
        <div key={registerName} onDoubleClick={deleteName}>이름 : {registerName}</div>
        <div key={registerEmail} onDoubleClick={deletEmail}>이메일 : {registerEmail}</div>
        </>
       
    )
}