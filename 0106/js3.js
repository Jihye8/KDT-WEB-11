// 조건문
// if문

/*
if(조건){
    조건이참일 때 실행
}else{
    조건이 false일 때 실행
}
*/
// 조건은 항상과 true / false가 와야 한다.

// if(5>3){
//     console.log("5는 3보다 크다. ") //출력
// }
// else{
//     console.log("5는 3보다 작다.")
// }
// let isShow=true;
// let checked=false;
// if(isShow){
//     console.log("show!") //출력
// }
// if(!checked){  //not일 때 실행되도록
//     console.log("checked!")
// }

// let name='홍길동';
// if (name==='홍길동'){
//     console.log('홍길동')
// }else if(naem==='성춘향'){
//     console.log('성춘향')
// }
// else{
//     console.log('임꺽정')
// }

//if 중첩
// const myid='abc';
// const mypw='1234';

// let inputid=prompt('id 입력하세요');
// let inputpw
// // console.log(inputid, inputpw)
// if(myid===inputid){
//     inputpw=prompt('pw 입력하세요');
//     if(mypw===inputpw){
//         console.log('로그인 완료');
//     }
//     else{
//         console.log('비밀번호가 틀립니다. ');
//     }

// }
// else{
//     console.log('아이디가 틀립니다.');
// }

/*
if(age>=20){
    if(gen==='여'){
        console.log(`성인 ${gen}`)
    }
    else{
        console.log('성인 남성')
    }
}
else{
    if(age>=17){
        if(gen==='여'){
            console.log('여자 고등학생')
        }
        else{
            console.log('남자 고등학생')
        }
    }
    else{
        if(age>=14){
            if(gen==='여'){
                console.log('여자 중학생')
            }
            else{
                console.log('남자 중학생')
            }
        }
        else{
            if(age>=8){
                if(gen==='여'){
                    console.log('여자 초등학생')
                }
                else{
                    console.log('남자 초등학생')
                }
            }
            else{
                if(gen==='여'){
                    console.log('여자아기')
                }
                else{
                    console.log('남자아기')
                }
            }
        }
    }
    
}
*/
/*

const age = Number(prompt('나이 입력하세요.'));
const gen = prompt('성별을 입력하세요 (여자 / 남자)');
if(gen==='남자'){
    ageFunc(age , gen);
}else{
    ageFunc(age , gen);
}

*/
// gen==='남자'?ageFunc(age,gen) : ageFun(age,gen);
/*
function ageFunc(age, gender){
    if(age>=20){
        console.log(`성인${gender}`)
    }
    else if(age>=17){
        console.log(`고등학생${gender}`)
    }
    else if(age>=14){
        console.log(`중학생${gender}`)
    }
    else if(age>=8){
        console.log(`초등학생${gender}`)
    }
    else{
        console.log(`유아${gender}`)
    }
}*/
/*
//if문을 간단하게 표현하는 3항 연산자
let myid='abc';
let mypw=123;
const inputid =prompt('아이디를 입력하세요');
const inputpw = Number(prompt('아이디를 입력하세요'));
myid === inputid ? mypw ===inputpw ? console.log('로그인 성공') : console.log('비밀번호가 틀렸습니다.') : console.log('아이디가 틀립니다.');
*/
/*
let name = '성춘향';
name === '홍길동'
    ? console.log('홍길동')
    : name === '성춘향'
    ? console.log('성춘향')
    : console.log('임꺽정');
    */
/*
let now = new Date().getHours();
console.log(typeof now);
now < 12 ? console.log('오전') : console.log('오후');
*/
