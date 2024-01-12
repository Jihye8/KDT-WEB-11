/*

//javascript
console.log(document);
//jquery
console.log($(document));
//js의 document와 jq의 document의 실행 차이!

$(document).ready(function () {
    console.log('ready()- 문서의 Dom 트리가 완성되면 실행되는 이벤트');
});

$(function () {
    console.log('안녕');
});
*/

//click()

$('.hello').click(function () {
    $('.hello').css('color', 'red'); //누르면 red로 글씨색 변경
});
$('.nums').click(function () {
    // $('.nums').css('color','blue');
    $(this).css('color', 'blue');
    //this는 자기 자신만을 칭하기 때문에 클릭한 것만 색이 변한다.
});

//mouseover()
$('.numbers').mouseover(function () {
    $('.numbers').css('background-color', 'green');
    // $('.numbers').append('<li>.mouseover() call</li>'); //mouse 올리면 리스트 무한 증식
    $(this).css('background-color', 'green');
});

//hover() : 마우스 올렸을 때와 떼었을 때

$('.div-hover').hover(
    function () {
        $(this).addClass('hover'); //함수 1 - 올렸을 때
    },
    function () {
        $(this).removeClass('hover'); //함수2 - 떼었을 때
    }
);

// $('.div-hover').hover(function () {
// $(this).toggleClass('hover');
// });

//scroll()
// 윈도우 창을 스크롤 할 경우
//window는 브라우저 창 전체를 의미한다.
$(window).scroll(function () {
    console.log('sroll');
});

//keydown()
$('.input-key').keydown(function (e) {
    //창에 입력을 e라는 변수로 받는다.
    if (e.code === 'ArrowUp') {
        //up화살표 누르면
        console.log('up'); //console 창에 up 출력
    } else if (e.code === 'ArrowDown') {
        //down화살표 누르면
        console.log('down'); //console 창에 down 출력
    }
});
