import React, {Component} from 'react'

class Counter extends Component{
    // state 선언 - 컴포넌트 안에서 선언하고 변경가능 
    state = {
        number : 0,
        name : '코딩온'
    }
    render(){
        // state 선언 = this.state로 접근
        // console.log(this.state)
        const {number} = this.state
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    // this.setState() : state 값ㅇ르 바꾸는 함수
                    // state 값은 직접 변경 x 꼭 setState()이용으로만 값 변경 가능
                    this.setState({number:number+1})
                }}>+1</button>
            </div>
        )
    }
}

export default Counter;