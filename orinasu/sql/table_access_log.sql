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