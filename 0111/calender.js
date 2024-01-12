const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const current = new Date(year, month + 1, 0);
const previous = new Date(year, month, 0);
const lastDate = current.getDate(); //이번달 마지막 날
const previousDay = previous.getDay(); //전달의 마지막 날의 요일
let nowClick = 0;

//.header 년도, 월 출력
document.querySelector('.header').textContent = `${year}년 ${month + 1}월`;
//전월 요일에 맞춰서 공백 나열
for (let p = 0; p <= previousDay; p++) {
    $('.dates').append(`<div class="date"></div>`);
}
//해당 월 요일에 맞춰서 날짜 나열
for (let d = 1; d <= lastDate; d++) {
    $('.dates').append(`<div class="date ${d}"><span>${d}</span></div>`);
}
//달력의 날짜 누르면 자동으로 날짜 칸에 날짜 입력됨
$('.date > span').click(function () {
    let child = this;
    console.log(child);

    // nowClick = $(this).firstChild.text();
    // console.log(nowClick);
    $('.inputDate').val(`${month + 1}월 ${nowClick}일`);
});
//내용 입력한 거 해당 월에 입력하는 함수
function submit() {
    let content = $('.inputContent').val();
    $(`.${nowClick}`).append(`<div class= content>${content}</div>`);
}
