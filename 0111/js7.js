//클래스 조작
function addClass() {
    $('#hi').addClass('font-size'); //class명만
}
function removeClass() {
    $('#hi').removeClass('font-size'); //특정  클래스만 삭제

    $('#hi').removeClass(); //#hi가 가지고 있는 전부를 삭제
}
function hasClass() {
    console.log($('hi').hasClass('font-size'));
}
function toggleClass() {
    $('#hi').toggleClass('bg-color'); //있으면 삭제, 없으면 더해주기
}
function switchClass() {
    $('#hi').switchClass('color-blue', 'color-red', 5000);
    //1000 - 1s
    //5000 - 5s동안 서서히 바뀌도록 하는 것
}
