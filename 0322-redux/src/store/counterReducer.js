// 이때, reducer가 여러개 생성 될 수 있기 때문에 앞에 reducer 이름 붙혀서 중복 방지
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
// return 생략 버전
export const plus =()=>({type : PLUS});
// return 안생략
export const minus =()=>{
    return {type : MINUS};
}

//  state 초기값 정의
const initialState = {
    number : 50
};

// reducer 정의 : 상태 변화를 일으키는 함수
const counterReducer = (state = initialState, action) =>{
    // action은 객체 형태로 정의 -> 객체 : {type : 'xxx', payload : ?}

    switch(action.type){
        case PLUS:
            return {number : state.number + 1}; 
        case MINUS :
            return {number : state.number - 1};
        default :
            // 현재 state만 반환
            return state;
    }
}

export default counterReducer; 