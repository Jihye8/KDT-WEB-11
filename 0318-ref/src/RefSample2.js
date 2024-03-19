import React, {Component, createRef} from "react";

export default class RefSample2 extends Component{
    // createRef를 사용해 만들때는 컴포넌트 내부에서 변수에 createRef()를 담아주는 것
    myInput = createRef();
    handleFocus = () =>{
        // createRef()를 이용해 설정한 DOM 요소에 접근하려면 this.myInput.current이용
        this.myInput.current.focus()
        console.log('this',this)
        console.log('this.myInput.current',this.myInput.current)
    }
    render(){
        return(
            <>
            <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            {/* this로 해당 컴포넌트의 ref에 접근! */}
            <input type="text" ref={this.myInput}/>
            <button onClick={this.handleFocus}>focus</button>
            </>
        )
    }
}