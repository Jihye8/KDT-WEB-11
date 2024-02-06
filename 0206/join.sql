-- customer 테이블 만듦
create table customer(
    id varchar(10) not null primary key,
    name varchar(10) not null,
    birthday date not null
);
-- customer에 데이터 넣어줌
insert into customer (id,name,birthday) values
('aaa','홍길동', '1990-01-01'),
('bbb','성춘향','1992-01-10'),
('ccc','변사또','1870-03-02');

create table orderlist(
    id INT AUTO_INCREMENT primary key not null,
    customer_id varchar(10) not null,
    -- customer의 id와 뒷 내용은 동일하게 적는데, primary key만 적을 필요 없음
    product_name varchar(20) not null,
    quantity INT, 
    -- 외래키(다른 테이블의 기본키를 참조하는 속성)가 뭔지 명시
    -- customer_id는 customer 테이블의 id 참조하는 외래키
    foreign key (customer_id) references customer(id) 
);

insert into orderlist (customer_id,product_name,quantity) values
('aaa','mac Book', 3);
('bbb','phone',6);
('ccc','mouse',10);
('aaa','earphone',13)

create table departments (
    department_id INT primary key,
    department_name varchar(255) not null
);

DROP table employees;

create table employees (
    employees_id INT primary key,
    username varchar(31) not null,
    department_id int,
    foreign key (department_id) references departments(department_id)
);

insert into(department_id,department_name) values
(1,'기획팀'),
(2,'IT개발팀'),
(3,'디자인팀');

insert into (employees_id,username, department_id) values
(1, '홍길동',2),
(2,'성춘향',3),
(3,'이몽룡',NULL),
(4,'임꺽정',2),
(5,'황진이',3);

-- left outer join
SELECT a.employees_id, a.username, b.department_name
FROM employees as a left join departments as b
on a.department_id = b.department_id;
-- inner join
SELECT a.employees_id, a.username, b.department_name
FROM employees as a inner join departments as b
on a.department_id = b.department_id;
