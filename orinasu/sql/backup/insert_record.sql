-- mysql -h 192.168.1.3 -u myapp_user -p myapp
-- source c:/mysql/insert.sql;
-- or \. c:/mysql/insert.sql (no ;)
-- show create view top3 \G

use myapp;

drop table if exists posts cascade;

create table posts(

	id int unsigned auto_increment primary key,
	title varchar(255),
	body text

) engine=InnoDB default charset=utf8;

drop table if exists logs cascade;

create table logs(

	id int unsigned auto_increment primary key,
	title varchar(255),
	msg varchar(255)

) engine=InnoDB default charset=utf8;

drop trigger if exists posts_insert_trigger;

create trigger posts_insert_trigger 
after insert on posts 
for each row 
insert into logs(msg) values('post added!');

insert into posts (title, body) values ('title 1', 'body 1');
insert into posts (title, body) values ('title 2', 'body 2');
insert into posts (title, body) values ('title 3', 'body 3');

select * from posts;
select * from logs;

show triggers \G

/*
update posts set created='2016-12-31 10:00:00' where id=2;

select * from posts;

select * from posts where created> '2017-01-01 00:00:00';

select created,date_add(created,interval 14 week) from posts;

select created,date_format(created,'%W %M %Y') from posts;
*/

/*
drop table if exists comments cascade;

create table comments(

	id int unsigned auto_increment primary key,
	post_id int unsigned not null,
	body text

);

alter table comments add constraint fk_comments foreign key(post_id)
references posts(id);

insert into posts(title,body) values('title1','body1');
insert into posts(title,body) values('title2','body2');
insert into posts(title,body) values('title3','body3');

insert into comments(post_id,body) values(1,'1st comment');
insert into comments(post_id,body) values(1,'2nd comment');
insert into comments(post_id,body) values(3,'1st comment for 3');
insert into comments(post_id,body) values(4,'2nd commnet for 3');

select * from posts;
select * from comments;

select posts.id,posts.title,posts.body,comments.body
from posts 
left outer join comments on 
posts.id=comments.post_id;

alter table comments drop foreign key fk_comments;

delete from posts where id=2;

insert into posts(title,body) values('new title','new body');

select * from posts;

insert into comments(post_id,body) values(last_insert_id(),'2nd commnet for 3');
*/
