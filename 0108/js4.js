// // let str = 'Happy Day~!  ';
// // console.log(str.length); //13
// // console.log(str.toUpperCase()); //HAPPY DAY~!
// // console.log(str.toLowerCase()); //happy day~!
// // console.log(str.indexOf('y')); //4
// // // 단, 첫번째 문자만 검색
// // console.log(str.slice(2)); //ppy Day~!
// // console.log(str.slice(2, -3)); //ppy Day~
// // // 2번째부터 뒤에서 3번째까지 짜른다.
// // // 음수일 때는 뒤에서부터 자른다.
// // console.log(str.slice(5, 9)); // Day
// // console.log(str.replace('p', 'a')); //Haapy day~!
// // //단 첫번째 문자만 변경된다.
// // console.log(str.replaceAll('y', 'i')); //Happi Dai~!
// // // 전체 문자 변경
// // console.log(str.repeat(3)); //Happy Day~!  Happy Day~!  Happy Day~!
// // console.log(str.trim()); //Happy Day~!
// // // 양끝의 공백 없애기
// // console.log(str.split('')); //''안에 공백 없음
// // // (13) ['H', 'a', 'p', 'p', 'y', ' ', 'D', 'a', 'y', '~', '!', ' ', ' ']
// // console.log(str.split(' ')); //''안에 공백 1
// // // (4) ['Happy', 'Day~!', '', '']
// // console.log(str.split('p')); //p가 사라지고 p를 기준으로 나눠진다.
// // // (3) ['Ha', '', 'y Day~!  ']
// // console.log(str.split('Happy'));
// // // (2) ['', ' Day~!  ']

// // const color = ['red', 'orange', 'yellow'];

// // console.log(color.join()); // red,orange,yellow
// // // 다 붙는다!
// // console.log(color.join('-')); //red-orange-yellow
// // console.log(color.join('~')); //red~orange~yellow

// // let hello = 'Hello';
// // console.log(hello.split(''));
// // console.log(hello.split('').reverse());

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ['사과', '바나나', '토마토', '포도', '파인애플'];

// let numbersLength = numbers.length;
// let fruitsLength = fruits.length;

// // for (let number of numbers) {
// //     console.log(number);
// // }

// // for (let fruit of fruits) {
// //     console.log(fruit);
// // }
// // numbers.forEach(function (number, index) {
// //     console.log(number, index);
// // });

// // fruits.forEach((fruits, i, arr) => {
// //     console.log(fruits, i, arr);
// // });
// // let colors = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

// // for (let index in colors) {
// //     console.log(index);
// //     console.log(colors[index].color);
// // }

// // let i = 0;
// // do {
// //     console.log(fruits[i]);
// //     i++;
// // } while (i < fruits.length);

// let arr;
// arr = numbers.filter(function (num) {
//     return num > 3;
// });
// console.log(arr);

// const words = [
//     'spray',
//     'limit',
//     'elite',
//     'exuberant',
//     'destruction',
//     'present',
// ];
// const result = words.filter((word) => {
//     return word.length > 6;
// });
// console.log(result);

// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// console.log(sum);

// let array = [];
// for (let i = 0; i < 100; i++) {
//     array[i] = i + 1;
// }
// let sum1 = 0;
// for (i = 0; i < 100; i++) {
//     sum1 += array[i];
// }
// console.log(sum1);

// let sum2 = 0;
// for (let index1 of array) {
//     // console.log(index);
//     sum2 += index1;
// }
// console.log(sum2);

// let sum3 = 0;
// array.forEach((index2) => {
//     sum3 += index2;
// });
// console.log(sum3);

// let fruits1 = [
//     '사과',
//     '딸기',
//     '파인애플',
//     '수박',
//     '참외',
//     '오렌지',
//     '자두',
//     '망고',
// ];
// let fruits2 = [, '수박', '사과', '참외', '오렌지', '파인애플', '망고'];
// let same;
// let diff;
// for (let i = 0; i < fruits1.length; i++) {
//     for (let n = 0; n < fruits2.length; n++) {
//         if (fruits1[i] == fruits2[n]) {
//             same.push(fruits2[n]);
//         } else if (fruits[i] !== fruits2[n]) {
//             diff.push(fruits2[n]);
//         }
//     }
// }
// console.log(same);
// console.log(diff);
