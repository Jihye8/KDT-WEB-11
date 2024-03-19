import React, {Component, createRef, useState} from "react";
import "./table.css"

export default class RefPractice1 extends Component{
    writer = createRef();
    title = createRef();
    list = [];
    handleFoucs =()=>{
        if(this.writer.current.value.trim()===""){
            this.writer.current.focus()
        }else if(this.title.current.value.trim()===""){
            this.title.current.focus()
        }else{
            this.list.push({id : this.list.length +1 ,writer : this.writer.current.value, title : this.title.current.value })
            console.log(this.list)
            const listTable = document.querySelector('.list-table');
            const tr = 
            `<tr>
            <td>${this.list.length}</td>
            <td>${this.writer.current.value}</td>
            <td>${this.title.current.value}</td>
            </tr>`
            listTable.insertAdjacentHTML('beforeend',tr )

        }
    }
    
    render(){
        return(
            <>
            <div>
                <label htmlFor="">작성자 : </label>
                <input type="text" ref={this.writer}/>
                <label htmlFor=""> 제목 : </label>
                <input type="text" ref={this.title} />
                <button onClick={this.handleFoucs}>작성</button>
            </div>
            <table className="list-table">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
            </table>
            </>
           
        )
    }
}