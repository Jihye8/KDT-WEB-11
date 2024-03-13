import  {useState} from 'react';


const SayFunction = ()=>{
    // useState('welcome!')는 배열 형태로 출력 -> ['welcome!',ƒ()]
    const [message, setMessage] = useState('welcome!')
    // console.log(useState('welcome!'))
    // 'welcome!' : message 변수의 초기값으로 들어감
    // useState(초기값) : 숫자, 문자, 배열 등등 자유롭게 넣을 수 있다. 
    // ƒ() : setMessage() = message state 값을 바꾸는 함수

    const onClickEnter = ()=>{
        setMessage('안녕하세요~')
    }
    const onClickLeave = (e)=>{
        console.log(e.target)
        setMessage('안녕히가세요~')
    }
    const alertMessage = (e,msg)=>{

        // event 객체 사용 가능 
        // e.target -> 버튼 요소 출력된다.
        console.log(e.target)
        alert(`${msg}입니다!`);
    }
    return(
        <div>
            <h1>{message}</h1>
            {/* react는 괄호 없이 함수 사용!
                왜냐면, 
                -HTML : onclick ="onClickEneter()" 문자열 형식으로 호출문을 등록한 것
                -JS : addEventListener('click', 함수명) 함수를 괄호 없이 클릭 발생했을 떄 실행되게 함수명을 넣어 놓음. 
                -react : onClick = {함수명} JS 같이 괄호 없이 함수명만 넣어 이벤트 발생 시 호출시 실행되게 
                */}
            <button onClick={onClickEnter}>입장</button>
            {/* 기본적으로 이벤트 객체는 굳이 명시할 필요가 없다.  */}
            {/* 하지만, 다른 전달받는 인자가 있는 경우엔 충돌이 날 수 있기 때문에 이벤트 객체를 같이 적어줘야 한다. */}
            <button onClick={onClickLeave}>퇴장</button>
            {/* 만약 함수에 전달받는 인자가 필요한 경우엔 익명함수로 감싸서 함수 호출 처리 */}
            <button onClick={(e)=>{alertMessage(e,'msg')}}>alert출력</button>
        </div>
    )
}

export default SayFunction;