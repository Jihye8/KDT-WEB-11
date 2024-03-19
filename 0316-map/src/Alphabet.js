import {useState} from 'react'
import App from './App';

export default function Alphabet(){
    const [alphabet, setAlphabet] =useState(['a','p','p','l','e']);
    const [alphabet2, setAlphabet2] =useState([{id : 1, alpha : 'k'},{id : 2, alpha : 'i'},{id : 3, alpha : 'w'},{id : 4, alpha : 'i'}]);
    // const alphabets =alphabet.map((txt, id, arr)=>{
    //     console.log('txt',txt);
    //     console.log('id',id);
    //     console.log('arr',arr);
    //     return txt+id;
    // });
    // console.log(alphabets)
    const [inputAlpha, setInputAlpha] =useState('');
    const [alpha, setAlpha] = useState([]); //단축평가용!
    const addAlpha = ()=>{
        // alphabet2에 inputAlpha 내용 추가
        // 빈값이거나 띄어쓰기만 입력된 경우 추가 안되게
        if(inputAlpha.trim().length===0) return;
        const newAlpha = alphabet2.concat({id : alphabet2.length+1, alpha : inputAlpha});
        setAlphabet2(newAlpha);
    };
    const handelKeyDown = (e) =>{
        // bug fix : IME 문제 해결(한글 마지막 한글자가 더 나옴)
        if(e.nativeEvent.isComposing)return;
        if (e.keyCode == 13){
            addAlpha();
        }
    }
    const deleteAlpha =(id)=>{
        const newAlpha = alphabet2.filter((alpha)=>{
            return alpha.id !==id
        })
        setAlphabet2(newAlpha);
    }
    
    return (
    <div>
        <ol>
        {/* {alphabet.map((value, idx)=>{
            return <li key={idx}>{value}</li>
        })}
        {alphabet.map((value, idx)=>(
            <li key={idx}>{value}</li>
            ))} */}
        {alphabet2.map((value)=>(
            <li key={value.id} onDoubleClick={()=>{deleteAlpha(value.id)}}>{value.alpha}</li>
        ))}
        </ol>
        
        <input type="text" placeholder='알파벳 입력' value={inputAlpha} onChange={(e)=>{setInputAlpha(e.target.value)}} onKeyDown={(e)=>handelKeyDown(e)}/>
        <button onClick={addAlpha}>Add</button>
        <hr />
        {/* 단축평가  */}
        {alpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
        {'exist' ||<span>정의된 값이 없어요!</span>}
        {null ||<span>정의된 값이 없어요!</span>}
    </div>
    )
}