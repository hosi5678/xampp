-- \. c:/mysql/create_table.sql
-- (no ;)

use orinasu_db;

drop table if exists youbi cascade;

create table youbi(
 id tinyint unsigned not null auto_increment primary key,
 content varchar(10)

);

desc youbi;

insert into youbi(content) values("日");
insert into youbi(content) values("月");
insert into youbi(content) values("火");
insert into youbi(content) values("水");
insert into youbi(content) values("木");
insert into youbi(content) values("金");
insert into youbi(content) values("土");

select * from youbi;

