-- \. c:/mysql/create_table.sql
-- (no ;)

use dotinstall_db;

drop table if exists users cascade;

create table users(
 id int unsigned not null auto_increment primary key,
 name varchar(255),
 score int

);
