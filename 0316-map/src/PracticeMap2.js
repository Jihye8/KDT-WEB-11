import { useState } from "react";

export default function PracticeMap2(){
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [searchInput, setSearchInput] =useState('');
    const [list, setList] =useState([]);
    const [searchList, setSearchList]=useState([]);
    const registerInfo = ()=>{
       const newList = list.concat({id : list.length+1, name : name, title : title})
       setList(newList);
       console.log(list);
       const table= document.querySelector('.list-tabel');
       const td = `<tr>
       <td>${newList[newList.length-1].id}</td>
       <td>${newList[newList.length-1].name}</td>
       <td>${newList[newList.length-1].title}</td>
        </tr>`
       table.insertAdjacentHTML('beforeend',td )
    }
    const search = () =>{
        const table=document.querySelector('.search-table');
        list.map((info)=>{
            if(info.name.includes(searchInput)||info.title.includes(searchInput)){
                const newSearchList = searchList.concat({id : info.id, name : info.name, title : info.title})
                setSearchList(newSearchList);
                const td = `<tr>
                <td>${info.id}</td>
                <td>${info.name}</td>
                <td>${info.title}</td>
                </tr>`
                table.insertAdjacentHTML('beforeend',td )
            }
        })
        
    }

    return(
        <>
        <div className="inputWrap">
            <label htmlFor="">작성자</label>
            <input type="text" placeholder="작성자" onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="">제목</label>
            <input type="text" placeholder="제목" onChange={(e)=>{setTitle(e.target.value)}}/>
            <button onClick={registerInfo}>등록</button>
        </div>
        <div className="searchWrap">
            <select>
                <option value="name">작성자</option>
                <option value="title">제목</option>
            </select>
            <input type="text"  placeholder="검색" onChange={(e)=>{setSearchInput(e.target.value)}}/>
            <button onClick={search}>검색</button>
            <button>전체</button>
        </div>
        <table className="list-tabel">
            <tr>
                <th>번호</th>
                <th>작성자</th>
                <th>제목</th>
            </tr>
        </table>
        <table className="search-table">
            <tr>
                <th>번호</th>
                <th>작성자</th>
                <th>제목</th>
            </tr>
        </table>
        </>
    )
}