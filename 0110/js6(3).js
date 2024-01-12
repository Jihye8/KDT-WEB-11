// JQuery
// $(선택자).동작함수
// console.log($('#hello').text()); //안녕하세요
// $('#hello').text('안녕히가세요'); //변경
// console.log($('#hello').text()); //안녕히가세요.
// $('#hello').css('color', 'red');

//val() input이라는 곳의 value값을 설정할 수 있다.
function getValue() {
    let value = $('input').val();
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
}

//css()
function changeCSsJs() {
    let span = document.querySelector('span');
    span.style = 'font-size : 20px; color: red;';
}
function changeCssJquery() {
    $('span').css({ 'font-size': '40px', 'font-weight': 'bold' });
}

function getCssJquery() {
    console.log($('span').css('color'));
}
function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.youtube.com/');
}
function changeAttrJquery() {
    $('a').attr('href', 'https://www.google.com/');
}
function changeHtmlJs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>Javascript</p>';
}
function changeHtmlJquery() {
    $('.html').html('<p>JQuery</p>');
}
//요소 추가하기 - 항상 기준이 있어야 한다.
function appendJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.textContent = '마지막으로 추가된 js';
    ul.append(li);
}
function appendJq() {
    $('.colors').append('<li>마지막으로 추가하는 jq</p>');
}
function prependJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.textContent = '처음으로 추가된 js';
    ul.prepend(li);
}
function prependJs() {
    $('.colors').prepend('<li>처음으로 추가하는 jq</p>');
}

function removeJs() {
    let list = document.querySelector('#list2');
    list.remove();
}
function removeJq() {
    $('#list2').remove();
}
function emptyJs() {
    let nums = document.querySelector('ul.nums');
    nums.innerHTML = '';
}
function emptyJq() {
    $('ul.nums').empty();
}
