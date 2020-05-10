drop database if exists orinasu_db;
create database orinasu_db;

use orinasu_db;

drop user if exists user;
create user user identified by 'orinasu_user';

grant all on orinasu_db.* to user identified by 'orinasu_user';

drop table if exists members cascade;

create table members(
 id int unsigned not null auto_increment primary key,
 myouji varchar(25) not NULL ,
 namae varchar(25) not NULL ,
 
 sun tinyint unsigned,
 mon tinyint unsigned,
 tue tinyint unsigned,
 wed tinyint unsigned,
 thu tinyint unsigned,
 fri tinyint unsigned,
 sat tinyint unsigned,

 bikou text

);

desc members;

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
insert into ip_address(ip_address) values("192.168.1.8");
insert into ip_address(ip_address) values("192.168.1.9");
insert into ip_address(ip_address) values("192.168.1.10");
insert into ip_address(ip_address) values("192.168.1.12");
insert into ip_address(ip_address) values("192.168.1.13");
insert into ip_address(ip_address) values("192.168.1.15");

select * from ip_address;

drop table if exists index_access_log cascade;

create table index_access_log(
	id int unsigned primary key auto_increment,
	date datetime not null,
	ip_address varchar(255) not null,
	status varchar(16) not null
);

desc index_access_log;

drop table if exists youbi cascade;

 create table youbi(
  id tinyint unsigned not null auto_increment primary key,
  name varchar(10)

 );

desc youbi;

INSERT INTO youbi(name) values('日');
INSERT INTO youbi(name) values('月');
INSERT INTO youbi(name) values('火');
INSERT INTO youbi(name) values('水');
INSERT INTO youbi(name) values('木');
INSERT INTO youbi(name) values('金');
INSERT INTO youbi(name) values('土');

select * from youbi;

drop table if exists riyou_keitai cascade;

create table riyou_keitai(
 id tinyint unsigned not null auto_increment primary key,
 content varchar(16) 

);

desc riyou_keitai;

insert into riyou_keitai(content) values("利用なし");
insert into riyou_keitai(content) values("終日");
insert into riyou_keitai(content) values("午前");
insert into riyou_keitai(content) values("午後");

select * from riyou_keitai;


drop view if exists members_join cascade;

create view members_join as
  select 
        members.id as id,
        members.myouji as '姓',
        members.namae as '名',
        sun.content as '日',
        mon.content as '月',
        tue.content as '火',
        wed.content as '水',
        thu.content as '木',
        fri.content as '金',
        sat.content as '土',
        members.bikou as '備考'

        from members
          inner join riyou_keitai as sun on (members.sun+1)=sun.id
          inner join riyou_keitai as mon on (members.mon+1)=mon.id
          inner join riyou_keitai as tue on (members.tue+1)=tue.id
          inner join riyou_keitai as wed on (members.wed+1)=wed.id
          inner join riyou_keitai as thu on (members.thu+1)=thu.id
          inner join riyou_keitai as fri on (members.fri+1)=fri.id
          inner join riyou_keitai as sat on (members.sat+1)=sat.id

        order by members.id asc;

show create view members_join \G

select * from members_join order by id asc;