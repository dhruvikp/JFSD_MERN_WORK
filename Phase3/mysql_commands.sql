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

-- ---------------------------------------
-- MySQL Stored Procedure
-- ----------------------------------------

DELIMITER //
CREATE PROCEDURE GetCustomerById 
(
	IN p_customer_id INT
)
BEGIN
	select * from customers where customer_id = p_customer_id;
    
END //

CALL GetCustomerById(101);

DELIMITER //
CREATE PROCEDURE GetCustoemerCount
(
	OUT totalCustomers INT
)
BEGIN
	select count(*) into totalCustomers from customers;
END //

SET @customerCount = 0;
CALL GetCustoemerCount(@customerCount);

select @customerCount;


-- app sends customerId - procedure returns customer's age using same parameter

DELIMITER //
CREATE PROCEDURE GetCustomerAge 
(
	INOUT customerAge INT
)
BEGIN
	SELECT age
    INTO customerAge
    from customers
    where customer_id = customerAge;
    
END //

SET @value = 101;
CALL GetCustomerAge(@value);
SELECT @value;



DELIMITER //
CREATE PROCEDURE GetCustomerOrderSummary 
(
	IN p_customer_id INT
)
BEGIN
	DECLARE customer_count INT;
    DECLARE total_orders INT;
    
    -- checks whether customer exist
    SELECT COUNT(*)
    into customer_count
    from customers where customer_id = p_customer_id;
    
    IF customer_count = 0 THEN
		SELECT 'customer doesnot exist.' as message;
	ELSE
		-- count total orders
        select count(*) 
        into total_orders
        from orders
        where customer_id = p_customer_id;
        
        -- customer summary
        select c.customer_id, c.full_name, c.email, c.status, total_orders as total_orders from customers c
        where c.customer_id = p_customer_id;
        
        -- customer orders
        SELECT 
			o.order_id,
            o.order_date
        from orders o
        where o.customer_id = p_customer_id
        order by o.order_date desc;
	END IF;
END //

CALL GetCustomerOrderSummary(999);

show procedure status where db='ecommerce_db';
drop procedure GetCustomerAge;

-- -------------
-- view example

CREATE VIEW active_customer_view as 
	SELECT 
		customer_id,
        full_name,
        email,
        status
	FROM
		customers
	where status = 'ACTIVE';
    
 select * from active_customer_view;   
    
create view cusotmer_orders_view as
	select
		c.customer_id,
        c.full_name,
        o.order_id,
        o.order_date
	from customers c
    inner join orders o
    on c.customer_id = o.customer_id
    
select * from cusotmer_orders_view;
    
    select * from active_customer_view where customer_id=102; 
-- ---------------------------
-- subquery

-- scaler
-- usecase - find out all customers whose age is greater than the avg customer age.
select avg(age) from customers;

select * from customers where age > (select avg(age) from customers);

-- row subquery
-- usecase: find custoemr having both the same age and status as John Smith
select * from customers where (age, status) = (select age, status from customers where customer_id =101);

-- table subquery
-- usecase: display active custoemrs using table subquery

select * from (select customer_id, full_name, status from customers where status='ACTIVE') as active_customers;

-- correlated subquery
-- usecase: display customers who have placed at least one order
select * from customers c
	where exists (select 1 from orders o where o.customer_id = c.customer_id);
    
-- non correlated subquery
-- usecase: find out display orders placed by john smith
select * from orders where customer_id = (select customer_id from customers where full_name='JOHN SMITH')


-- ------------------------------------------
-- 04-07-2026 (Triggers)
-- -------------------------------------------

CREATE TABLE customer_audit
(
	audit_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    action_type VARCHAR(20),
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remarks VARCHAR(200)
);

DELIMITER //
CREATE TRIGGER trg_customer_insert
AFTER INSERT
ON customers
FOR EACH ROW
BEGIN
	INSERT INTO customer_audit
    (
		customer_id,
        action_type,
        remarks
    )
    VALUES 
    (
		NEW.customer_id,
        'INSERT',
        CONCAT('Customer ', NEW.full_name, ' added.')
    );
END //

INSERT INTO customers
VALUES
(106, 'Chris martin ', 'chris@gmail.com', 32, 'ACTIVE');

select * from customer_audit;


DELIMITER //
CREATE TRIGGER trg_validate_customer
BEFORE INSERT
ON customers
FOR EACH ROW
	BEGIN
		if NEW.age <18 then
			signal sqlstate '45000'
			SET MESSAGE_TEXT = 'CUSTOMER MUST BE ATLEAST 18 YEARS OLD';
		END IF;
    END //


INSERT INTO customers
VALUES
(107, 'Tom ', 'tom@gmail.com', 15, 'ACTIVE');


	CREATE INDEX idx_orders_customer on orders(customer_id);

alter table customers
	add index idx_customer_name(full_name)
    
drop index idx_customer_name on customers;

explain select * from orders where customer_id = 101;
    
    
mysqldump 
    
