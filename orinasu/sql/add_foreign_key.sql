drop table if exists posts;

create table posts(
	id int unsigned primary key auto_increment,
	title varchar(255),
	body text

);

drop table if exists comments;

create table comments(
	id int unsigned primary key auto_increment,
	post_id int unsigned not null,
	body text
);


-- 外部キー
alter table comments 
	add constraint fk_comments foreign key(post_id) 
		references posts(id);

insert into posts(title,body) values('title 1','body 1');
insert into posts(title,body) values('title 2','body 2');
insert into posts(title,body) values('title 3','body 3');

insert into comments (post_id, body) values (1, 'first comment for post 1');
insert into comments (post_id, body) values (1, 'second comment for post 1');
insert into comments (post_id, body) values (3, 'first comment for post 3');

-- エラーになる
insert into comments (post_id, body) values (4, 'first comment for post 4');

select * from posts;
select * from comments;

-- 内部結合
select * from posts 
	inner join comments on 
	posts.id=comments.post_id;

-- viewの作成

drop view if exists join_posts_and_comments;

create view join_posts_and_comments as
select posts.id,posts.title as '投稿',comments.body as 'コメント' from posts 
	inner join comments on 
		posts.id=comments.post_id;

select * from join_posts_and_comments;

show tables;

show create view join_posts_and_comments \G

select * from posts
	left outer join comments on 
		posts.id=comments.post_id;

-- viewの作成

drop view if exists rigt_join_posts_and_comments;

create view rigt_join_posts_and_comments as

select comments.body from posts
	left outer join comments on
		posts.id=comments.post_id;

select * from rigt_join_posts_and_comments;

desc comments;

alter table comments drop foreign key fk_comments;

desc comments;
