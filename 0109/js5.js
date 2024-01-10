//html text 요소내용 읽고 쓰기
const textId = document.getElementById('text');
console.log(textId);
textId.textContent = 'hi';
textId.innerText = '안녕하세요';
textId.innerHTML = '여기는 <b>첫번째</b> 태그입니다.';
//셋다 같은 효과
/*textContent : 요소안의 텍스트 가져오거나 수정
innerContent : 요소 안의 텍스트를 가져오거나 수정
textContent VS innerCOntent 의 차이
-text : 공백 문자 그대로 반환 IE9 이전 버전 사용 불가
-innerText : 남는 공백 문자 제거, table, tboby, tr 등 테이블 요소 수정 불가  
innerHTML  : 입력된 문자열을 HTML 형식으로!
셋 중 제일 나중에 있는게 입력된다.
*/

// add : class추가
textId.classList.add('title');
//가져온 요소의 title class의 css, style을 추가하는것

// remove : class제거
textId.classList.remove('title');
//더해준 css가 없어진다.

// toggle : class가 있으면 제거, class가 없으면 추가
textId.classList.toggle('title-big');

//contains : 해당 class가 있는지 boolean값으로 알려준다.
console.log(textId.classList.contains('title')); //false
console.log(textId.classList.contains('title-big')); //false - toggle때문에

const link = document.getElementById('link');
console.log(link);
//setAttribute : html 요소 속성 추가
link.setAttribute('href', 'https://www.naver.com/');

const img = document.getElementById('img');
img.setAttribute('src', 'home2.jpg');

const input = document.getElementById('input');
input.setAttribute('placeholder', '이름');
