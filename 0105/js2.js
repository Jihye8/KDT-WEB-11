// //object는 여러가지 데이터가 하나로 묶여 있는 형태
// let cat={
//     name: "나비",
//     age : 1,
//      iscute :true,
//      Mew : function(){
//   		return '냐옹'
//      }
// }

// console.log(cat.name);
// console.log(cat.age);
// console.log(cat.iscute);
// console.log(cat.Mew());

// let person= {
//     name : "김지혜",
//     age : 24,
//     phone:"010-5006-0000",
//     gender : 'woman',
//     occupation : 'student'
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.address);
// console.log(person.phone);
// console.log(person.occupation);

// typeof : 데이터가 어떤 타입인지 알려주는 연산자

// console.log(typeof "hello");
// console.log(typeof true);
// const types= 20;
// console.log(typeof types);

//실습3
// console.log(typeof 20,"isn't",typeof "string","data type")


// const number =1;
// const str= "str";
// const bool= true;
// const data = `${number} isn't ${str} data type`;

// console.log("Type of를 ",typeof true,"이나 ",typeof" ","에 사용하면 ",
// typeof true," 결과를 얻을 수 있습니다.")

// 형변환 : 데이터의 타입을 변환시켜주는 것
// prompt() 사용자에 데이터를 입력받게 하는 것
// let mathscore = prompt("수학 점수를 입력하세요 :");
// let engscore =prompt("영여 점수를 입력하세요 :");
// let sum = mathscore + engscore;
// let avg = (mathscore + engscore) / 2;
// console.log(avg);
// console.log(typeof mathscore)


//문자형 변환
// let num = 123;

// let a = String(num);
// console.log(typeof a);

// let b = num.toString();
// console.log(typeof b);

//숫자형변환
// let num2='1234';
// let num3='5678';

// let c= Number(num2);
// let d=Number(num3);
// console.log(c);
// console.log(typeof c);
// console.log((c+d)/2);

// let mathscore="77";
// let engscore="88";

// let m = Number(mathscore); //명시적 형변환
// let e = Number(engscore);
// let avgScore = (m+e)/2;

// //  let avgScore = (Number(mathscore)+Number(engScore))/2;
// console.log(avgScore);

//연산자
// console.log(1+1);//2
// console.log(1-1);//0
// console.log(1*5);//5
// console.log(4/2);//2

// //나머지 연산자
// console.log(100%2); //짝수 -0
// console.log(99%2); //홀수-1

// //거듭제곱
// console.log(2**3); //8

// let num = 5;
// num +=10 //num = num + 10
// console.log(num); //15

// let result1, result2;
// let num1=10, num2=20;

// //증가 감소연산자
// result1=num1++;
// console.log(result1); //여기 까지는 10 
// result1=num1++;//다음줄로 넘어가는 순간 11
// console.log(result1); //여기까지는 11
// result1=num1;//여기서는 12
// console.log(result1); //12

// result2=++num2;//여기서 바로 21
// console.log(result2);//21
// result2=++num2;//여기서 바로 22
// console.log(result2);//22

// //
// let a="123";
// let b=123;

// console.log(a==b); //true
// console.log(a===b); //false
// console.log(a!=b);//true

// //논리연산자
// let name = "뽀로로";
// let age = "19";
// let isAdult = age >19;
// if(name ==="뽀로로"|| age >19){
//     console.log('통과')
// }else{
//     console.log('돌아가')
// } //통과
// if(name ==="뽀로로"&& age >19){
//     console.log('통과')
// }else{
//     console.log('돌아가')
// } //돌아가
// if(isAdult){
//     console.log('성인')
// }else{
//     console.log('미성년자')
// } //미성년자
// if(!isAdult){
//     console.log('미성년자')
// }else{
//     console.log('성인')
// } //미성년자






