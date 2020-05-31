drop table if exists calendar;

create table calendar(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  date varchar(25) not NULL,
  todo text,
  memo text
);

drop view if exists calendar_join;

create view calendar_join as
  select 
    calendar.id as id,
    calendar.date as '日付',
    calendar.todo as '予定',
    calendar.memo as 'メモ'
  from calendar
  order by calendar.id asc;
