-- CREATE DATABASE database_name

create database ecommerce_db;
show databases;
use ecommerce_db;
select database();
drop database ecomm_db;

select 100>100;

-- CREATE TABLE table_name (col_name datatype constraint, col_name datatype);

create table customers (
customer_id int primary key,
customer_name varchar(100) not null,
email varchar(150) unique,
age INT CHECK(age>=18),
status varchar(20) default 'Active'
);
    
create table orders (
	order_id INT primary key,
    customer_id int,
    order_date date,
    foreign key(customer_id)
    references customers(customer_id)
    );
describe customers;
describe orders;

alter table customers
add phone varchar(15);

alter table customers
modify phone varchar(20);

alter table customers
rename column customer_name to full_name;

alter table customers
drop column phone;

-- ----------------------------------------------------
-- 27-Jun-2026
-- ----------------------------------------------------
INSERT INTO customers
	(customer_id, full_name, email, age, status)
VALUES
	(101, 'JOHN SMITH', 'john@gmail.com', 30, 'ACTIVE');

INSERT INTO customers (customer_id, full_name, email, age, status)
values 
(102, 'EMMA WHATSON','emma@gmail.com', 28, 'ACTIVE'),
(103, 'DAVID MILLER','david@gmail.com', 35, 'ACTIVE'),
(104, 'SOPHIA BROWN','sophia@gmail.com', 26, 'INACTIVE'),
(105, 'MICHEL LEE','mike@gmail.com', 40, 'ACTIVE');

INSERT INTO orders (order_id, customer_id, order_date)
values
(1001, 101, '2025-06-01'),
(1002, 101, '2025-06-05'),
(1003, 102, '2025-06-10'),
(1004, 103, '2025-06-15');

-- INSERT INTO orders (order_id, customer_id, order_date) values
-- (1001, 110, '2025-06-01');
select * from customers;
select customer_id, full_name from customers;
select * from customers where status='ACTIVE';
select * from customers where age > 30;
select * from customers where age between 25 and 35;
select * from customers limit 3;
select * from customers order by age;
select * from customers order by age desc;

-- UPDATE
update customers
set status = 'ACTIVE'
where customer_id = 104;

-- DELETE
DELETE from customers where customer_id = 105;
DELETE FROM customers where status='INACTIVE';

-- ------------------------------------------
-- DCL - Data Control Language
-- ------------------------------------------
	create user 'sales_user'@'localhost' IDENTIFIED BY 'Sales@123';
    
    grant select 
    on ecommerce_db.customers 
    to 'sales_user'@'localhost';
    
    grant select, insert, update
    on ecommerce_db.*
    to 'sales_user'@'localhost';

-- apply granted priviledes
flush privileges;

show grants for 'sales_user'@'localhost';

REVOKE update 
on ecommerce_db.customers
from 'sales_user'@'localhost';

drop user 'sales_user'@'localhost';

-- ------------
-- TCL
-- --------------
START TRANSACTION;

update customers
set status = 'PREMIUM'
where customer_id=101;

savepoint sp1;

update customers
set age = 32
where customer_id = 101;

rollback to sp1;


-- -----------------------
-- SELECT statements
-- ----------------------

select distinct status from customers;
select * from customers where full_name like 'J%';
select * from customers where full_name like '%N';
select * from customers where full_name like '%son%';
select customer_id, full_name, age, case when age >=30  then 'Adult' ELSE 'Minor' END AS age_category from customers;
select customer_id, full_name, IF(status='ACTIVE', 'YES', 'NO') AS ActiveCustomer from customers;


-- -----------------------------------------
--  JOIN
-- ----------------------------------------
-- INNER JOIN
select 
	c.customer_id,
    c.full_name,
    o.order_id,
    o.order_date
    from customers c
    inner join orders o
    on c.customer_id = o.customer_id;
    
-- LEFT JOIN
SELECT 
	c.customer_id,
    c.full_name,
    o.order_id
from customers c
left join orders o
on c.customer_id = o.customer_id;

-- RIGHT JOIN
SELECT
    c.full_name,
    o.order_id
from customers c
right join orders o
on c.customer_id = o.customer_id;


-- FULL JOIN MYSQL NOT SUPPORTED, CAN BE IMPLEMENTED USING UNION
SELECT 
	c.customer_id,
    c.full_name,
    o.order_id
from customers c
left join orders o
on c.customer_id = o.customer_id

UNION

SELECT 
	c.customer_id,
    c.full_name,
    o.order_id
from customers c
right join orders o
on c.customer_id = o.customer_id;

-- CROSS JOIN
select 
c.full_name,
o.order_id
from customers c
cross join orders o;