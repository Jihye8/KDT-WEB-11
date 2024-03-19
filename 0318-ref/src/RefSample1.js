import {Component} from 'react'

class RefSample1 extends Component {
    handleFocus = () =>{
        // input focus 처리
        this.myInput.focus()
        console.log('this',this);
        console.log('this.myInput',this.myInput)
    }
    render(){
        return(
            <>
            <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            {/* this로 해당 컴포넌트의 ref에 접근! */}
            <input type="text" ref={(ref)=>{this.myInput = ref; }}/>
            <button onClick={this.handleFocus}>focus</button>
            </>
        )
    }
}

export default RefSample1 