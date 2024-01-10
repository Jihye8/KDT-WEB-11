const root = document.getElementById('root');

//노드생성

const p = document.createElement('p');
//<p></p> p태그 만들어짐
p.textContent = '안녕하세요';
//<p>안녕하세요</p>
p.classList.add('append-p');
//p안에 append-p class 추가
p.style.fontWeight = 'bold';
//<p class= 'append-p' style ='fontWeight : bold;'>안녕하세요</p>
console.dir(p);

//노드 추가
/*
append () : - 노드 객체 또는 텍스트 추가
            - 한번에 여러개의 자식 요소 추가 가능
            - 반환값 없음
            - 마지막 자식으로 추가
appendChild() : - 노드 객체만 추가 가능
                - 한번에 하나씩만 추가 가능
                - 반환값이 있음
prepend() : 첫번째 자식으로 추가

before() : 이전 형제로 추가
after() : 다음 형제로 추가

*/
const target = document.getElementById('target');
root.append(p);
//div 안에 p태그 추가
// root.prepend(p);

// target.before(p);
//target 이전 형제로 들어간다.
target.after(p);
// target 다음 형제로 들어간다.

//노드 삭제
/*
remove() : 선택한 요소 삭제
removerChild() : 선택한 요소의 자식을 삭제

*/
target.remove();
// id : target이 삭제된다.
root.removeChild(p);
