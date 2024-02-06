use kdt11; 
-- kdt11에 login 테이블 생성
-- create문
create table login(
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F','M','') default'',
    birthday Date not null,
    age int(3) not null default 0
);

-- insert문 : 데이터 추가
insert into login(id, pw, name, gender, birthday, age) values
('hong1234', '8o4bkg','홍길동','M','1990-01-31',33),
('sexysung','87awjkdt','성춘향','F','1992-03-31',31),
('power70','qxur8sda','변사또','M','1970-05-02',53),
('hanjo', 'jk48fn4','한조','M','1984-10-18',39),
('widowmaker','38ewifh3','위도우','F','1976-06-27',47),
('dvadav','k3f3ah','송하나','F','2001-06-03',22),
('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);

-- select문
-- 모든 회원목록 출력, 생일 기준 오름차순 정렬
select * from login order by birthday asc;
-- gender가 M인 회원목록을 가져오는데 name 칼럼의 값을 기준으로 내림차순 정렬
select * from login where gender='M' order by name desc;
-- 1990년대 태어난 회원의 id, name column 출력
select id, name  from login where birthday like '199%';
-- 6월생 회원의 목록을 생일 기준 오름차순으로 정렬 출력
select * from login where birthday like '%-06-' order by birthday asc;
-- gender 'M'이고 생일 1970년대 출력
select * from login where birthday like '197%' and gender='M';
-- 나이 기준 내림차순, 3개만 출력
select * from login order by age desc limit 3;
-- 나이 25세 이상 50세 이하 회원의 목록 출력
select * from login where age between 25 and 50;

-- update문
-- id가 hong1234인 사람 비번 바꾸기
update login set pw ='12345678' where id = 'hong1234';
select * from login where id ='hong1234';

-- delete문
-- id jungkrat 인 사람 지우기
delete from login where  id = 'jungkrat';
select * from login;
