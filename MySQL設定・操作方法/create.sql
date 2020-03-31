use mysql;
-- alter user root@localhost identified by 'orinasu_admin';

-- create user user@localhost identified by 'orinasu_user';

-- alter user user@localhost identified by 'orinasu_user';
-- grant all privileges on orinasu_db.* to user@localhost identified by 'orinasu_user';

use orinasu_db;

show tables;

drop table if exists users cascade;

create table users (
  id int unsigned primary key auto_increment,
  name varchar(255) unique not null
);

desc users;

drop table if exists ip_address cascade;

create table ip_address(
	id int unsigned primary key auto_increment,
	ip_address varchar(255) unique not null
);

desc ip_address;

create table password(
	id int unsigned primary key auto_increment,
	password varchar(255) unique not null
);

desc password;
