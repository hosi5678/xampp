use orinasu_db;

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