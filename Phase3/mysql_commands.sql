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
