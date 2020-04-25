-- \. c:/mysql/create_table.sql
-- (no ;)

use orinasu_db;

drop table if exists riyou_keitai cascade;

create table riyou_keitai(
 id tinyint unsigned not null auto_increment primary key,
 content varchar(16)

);

desc riyou_keitai;

insert into riyou_keitai(content) values("終日");
insert into riyou_keitai(content) values("午前");
insert into riyou_keitai(content) values("午後");

select * from riyou_keitai;

