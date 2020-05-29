drop table if exists calendar;

create table calendar(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  date varchar(25) not NULL,
  memo text,
  memo_rank tinyint UNSIGNED ,
  production_plan text
);

drop view if exists calendar_join;

create view calendar_join as
  select 
    calendar.id as id,
    calendar.date as '日付',
    calendar.memo as 'メモ',
    calendar.memo_rank as 'ランク',
    calendar.production_plan as '予定'
  from calendar
  order by calendar.id asc;
