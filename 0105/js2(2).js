// //함수
// // function sayhello(){
// //     console.log('hello')
// // }
// // sayhello();
// // const num1 =10; // 전역변수
// function sumFunc(num2){ //num2는 매개변수
//     const num1=11;
//     const result=num1 + num2 //지역변수
//     console.log(result);
//     // return은 함수 제일 마지막에 값을 다시 전달하는 
//     return result;
// }
// // console.log(num1);
// sumFunc(50); //num2=50

// let addFunc = sumFunc(50);
// console.log(addFunc);

// let sayfunc=function(){
//     console.log('hello')
// }
// sayfunc();

// let sayfunc=(num)=>{
//     console.log('hello');
//     return num +10;
// }

// console.log(sayfunc(10));

let square=(num)=>{
    console.log(num**2);
} 
square(4);
square(5);
square(11);


// let addFunc=(x, y)=>{      
//     const result4=x+y;
//     console.log(result4);10
// }
// a=Number(prompt("숫자1을 입력하세요"));
// b=Number(prompt("숫자2을 입력하세요"));
// addFunc(a,b);