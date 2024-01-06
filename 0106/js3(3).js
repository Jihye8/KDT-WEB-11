//반복문
/*
for(초기값;조건식;증감식){
    반복코드
}
*/

// //step1. 0부터 5까지 1씩 증가
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// //step2.
// for (let l = 5; l >= 0; l--) {
//     console.log(l);
// }

// //step3. 1부터 10까지 중에서 짝수 출력
// for (let even = 1; even <= 10; even++) {
//     if (even % 2 == 0) {
//         console.log(even);
//     }
// }
/*
for (let e = 2; e <= 10; e = e + 2) {
    console.log(e);
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
for (let l = 0; l < colors.length; l++) {
    console.log(`무지개의 ${l + 1}번째 색상은${colors[l]}`);
}
*/
// 실습7.

/*
function tableFunc(num1, num2) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

for (let i = 0; i <= 9; i++) {
    console.log(`---${i + 1}단---`);
    for (let l = 0; l <= 9; l++) {
        tableFunc(i, l);
    }
} */

//while
// while (조건문){
//     반복할 코드
// }
// 주의 사항 : 조건문의 탈출조건이 있어야 하거나 혹은 조건문에 탈출 조건이 없으면 break;를 넣어줘야 한다.

/*let step1 = 1;
while (step1 <= 5) {
    console.log(step1);
    step1++;
}

let step2 = 9;
while (step2 >= 4) {
    console.log(step2);
    step2--;
}

let step3 = 1;
while (step3 <= 10) {
    if (step3 % 2 == 1) {
        console.log(step3);
    }
    step3++;
}

let step4 = 0;

while (true) {
    console.log(step4);
    step4++;
    if (step4 === 10) {
        break;
    }
}

*/

//반복문 제어
//break : 멈추고 빠져나온다.

// for (let i = 0; i < 100; i++) {
//     if (i == 11) {
//         console.log('끝');
//         break;
//     }
// }

// let sum = 0;
// for (let l = 0; l < 100; l++) {
//     if (l % 2 === 0) {
//         continue;
//     }
//     sum += l;
// }
// console.log(sum);
// let sum = 0;
// for (let n = 0; n < 100; n++) {
//     if (n % 2 == 0 || n % 3 == 0) {
//         sum += n;
//     }
//     n++;
// }
// console.log(sum);
let sum = 0;
let n = 0;
while (true) {
    if (n <= 100) {
        if (n % 2 == 0 || n % 3 == 0) {
            sum += n;
        }
    } else {
        break;
    }
}
console.log(sum);
