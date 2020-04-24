-- mysql -u testuser -p test_mydb

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

insert into ip_address(ip_address) values("192.168.1.2");
insert into ip_address(ip_address) values("192.168.1.3");
insert into ip_address(ip_address) values("192.168.1.4");
insert into ip_address(ip_address) values("192.168.1.5");
insert into ip_address(ip_address) values("192.168.1.6");
insert into ip_address(ip_address) values("192.168.1.7");

select * from ip_address;

drop table if exists index_access_log cascade;

create table index_access_log(
	id int unsigned primary key auto_increment,
	date datetime not null,
	ip_address varchar(255) not null,
	status varchar(16) not null
);

desc index_access_log;
