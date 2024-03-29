import { Component } from "react";
import PropTypes from 'prop-types';

class ClassPractice extends Component{
    render(){
        const {text, valid} = this.props;
        return(
            <>
            <h3>{text}</h3>
            <button onClick={valid}>콘솔 메세지</button>
            </>
        )
    }
}
ClassPractice.defaultProps = {
    text :"이건 기본 text props입니다."
}
ClassPractice.propTypes = {
    text : PropTypes.isRequired
}

export default ClassPractice