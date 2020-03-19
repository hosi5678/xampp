-- mysql -h 192.168.1.3 -u myapp_user -p myapp
-- source c:/mysql/insert.sql;

drop table if exists users;
create table users (
  id int unsigned primary key auto_increment,
  name varchar(20) unique,
  -- score float not null
  score float default 0.0
);
desc users;

insert into users (name, score) values ('taguchi', 5.8);
insert into users (name, score) values ('fkoji', 8.2);
insert into users (name, score) values ('dotinstall', 6.1);