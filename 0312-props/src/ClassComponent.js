import {Component} from 'react';
import PropTypes from 'prop-types';
// props-types 라이브러리를 PropTypes라는 변수로 가져와 사용

class ClassComponent extends Component {
    //클래스형 컴포넌트는 render 함수가 필수
    render(){
        // 클래스형 컴포넌트에서 props에 접근하려면 this.props로 접근해야 한다. 
        // 클래스에서 자기 자신에 접근 -> this
        console.log('props', this.props)
        // this.props.name 으로 접근이 귀찮으니 구조분해할당 미리 해주기
        const {name} = this.props
        return(
            <div>
                <h1>Hi 1 {this.props.name}</h1>
                <h1>Hi 2 {name}</h1>
            </div>
        )
    }
}
// 부모에게서 props 못 받는 경우에는 name의 기본 설정을 홍길동으로 
ClassComponent.defaultProps = {
    name : "홍길동"
}

ClassComponent.propTypes = {
    // isRequired는 필수값으로 들어가야 한다. 
    // default값이 없다면 경고 발생
    name : PropTypes.string.isRequired
}


export default ClassComponent