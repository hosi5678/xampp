drop database if exists orinasu_db;
create database orinasu_db;

use orinasu_db;

drop table if exists table_access_log;

create table table_access_log(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  ip_address varchar(20) not NULL,
  table_name varchar(50) not NULL ,
  query text not null,
  time datetime 
);

desc table_access_log \G

drop table if exists members cascade;

create table members(

 id int unsigned not null auto_increment primary key,
 
 myouji varchar(25) not NULL ,
 namae varchar(25),
 
 sun tinyint unsigned,
 mon tinyint unsigned,
 tue tinyint unsigned,
 wed tinyint unsigned,
 thu tinyint unsigned,
 fri tinyint unsigned,
 sat tinyint unsigned,

 bikou text

);

create index members_index on members(namae);

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

select * from password;

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

drop table if exists riyou_keitai cascade;

create table riyou_keitai(
 id tinyint unsigned not null auto_increment primary key,
 content varchar(16) 

);

desc riyou_keitai;

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

drop table if exists table_access_log;

create table table_access_log(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  ip_address varchar(20) not NULL,
  table_name varchar(50) not NULL ,
  query text not null,
  time datetime 
);

desc table_access_log \G

drop table if exists table_access_log;

create table table_access_log(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  ip_address varchar(20) not NULL,
  table_name varchar(50) not NULL ,
  query text not null,
  time datetime 
);

desc table_access_log \G

drop table if exists products;

create table products(
  id int unsigned not NULL  AUTO_INCREMENT PRIMARY KEY ,
  category tinyint ,
  tax tinyint UNSIGNED ,
  round_type tinyint UNSIGNED ,

  product_name varchar(80),
  sales_date date,

  place varchar(180),
  customer varchar(50),
 
  tanka int UNSIGNED ,
  kosuu int UNSIGNED ,
  tyousei int,
  uriage int,
  
  bikou text
);

drop table if exists category;

create table category(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  name varchar(40)
);

drop table if exists category;

create table category(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  name varchar(40)
);

drop table if exists tax;

create table tax(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  tax tinyint UNSIGNED 
);

drop table if exists round_type;

create table round_type(
  id tinyint UNSIGNED not NULL AUTO_INCREMENT PRIMARY KEY ,
  type varchar(40) NOT NULL 
);

drop view if exists products_join;

create view products_join as
  select 
        products.id as id,

        category.name as 'カテゴリー',
        tax.tax as '消費税',
        round_type.type as '端数処理',

        products.product_name as '商品名',
        products.sales_date as '販売日',
        products.place as '販売場所',
    		products.customer as '顧客名',

        products.tanka as '商品単価',
        products.kosuu as '販売個数',
        products.tyousei as '調整額',
        products.uriage as '売上額',
        products.bikou as '備考'

        from products
          inner join category on (products.category+1)=category.id
          inner join tax on (products.tax+1)=tax.id
          inner join round_type on (products.round_type+1)=round_type.id

        order by products.id asc;

        create index products_name_index on products(product_name);
        create index products_category_index on products(category);
