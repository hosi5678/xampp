-- mysql -u testuser -p test_mydb

drop table if exists users cascade;

create table members (
	id int unsigned primary key auto_increment,
	member_surname varchar(255) not null,
	member_name varchar(255) not null,
	start_date date
);

desc members;

select * from members;

drop table if exists staffs cascade;

create table staffs (
	id int unsigned primary key auto_increment,
	name varchar(255) unique not null,
	ip_address_id int unsigned
);

select * from staffs;

drop table if exists ip_address cascade;

create table ip_address(
	id int unsigned primary key auto_increment,
	ip_address varchar(255) unique not null
);

desc ip_address;

insert into ip_address(ip_address) values("192.168.1.2");
insert into ip_address(ip_address) values("192.168.1.3");
insert into ip_address(ip_address) values("192.168.1.4");
insert into ip_address(ip_address) values("192.168.1.5");
insert into ip_address(ip_address) values("192.168.1.6");
insert into ip_address(ip_address) values("192.168.1.7");
insert into ip_address(ip_address) values("192.168.1.8");
insert into ip_address(ip_address) values("192.168.1.15");

drop view if exists staff_with_ip_address;

create view staff_with_ip_address as

select staffs.name,ip_address.ip_address from staffs
	inner join ip_address on
		staffs.ip_address_id=ip_address.id;

drop table if exists password cascade;

create table password(
	id int unsigned primary key auto_increment,
	password varchar(255) unique not null,
	created datetime default current_timestamp,
	updated datetime default current_timestamp on update current_timestamp
);

desc password;

insert into password(password) values("orinasu_admin");
insert into password(password) values("orinasu_user");

select * from password;

select * from ip_address;

drop table if exists access_log cascade;

create table access_log(
	id int unsigned primary key auto_increment,
	date datetime not null,
	ip_address varchar(255) not null,
	status varchar(16) not null
);

desc index_access_log;

drop table if exists object_control;

create table object_control(
	id int unsigned primary key auto_increment,
	type varchar(255) not null
);

insert into object_control(type) values('追加');
insert into object_control(type) values('削除');
insert into object_control(type) values('検索');

select * from object_control;


