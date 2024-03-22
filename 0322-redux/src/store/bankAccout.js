const initialState =0;

// bank라는 router의 PLUS고 MINUS다.
const PLUS = 'bank/PLUS';
const MINUS = 'bank/MINUS';

export const plus = (value)=>({type : PLUS, value: value});
export const minus =(value)=>({type : MINUS, value : value});

//plus 함수의 액션 action  = {type : PLUS, value: value} 이런 객체
const bankAccout = (state = initialState, action)=>{
    console.log(action);
    switch(action.type){
        case PLUS :
            return Number(state) + Number(action.value);
        case MINUS : 
            return Number(state) - Number(action.value);
        default :
            return state;
    }
};

export default bankAccout;