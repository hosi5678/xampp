use orinasu_db;

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
 sat tinyint unsigned

);

desc members;
