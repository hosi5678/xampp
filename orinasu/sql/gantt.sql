drop table if exists gantt cascade;

create table gantt(

 id int unsigned not null auto_increment primary key,
 
	koutei text,
 start_date date,
 end_date date,
 
 color varchar(20),

 members text,

 bikou text

);

drop view if exists gantt_join;

create view gantt_join as
  select 
   gantt.id as id,

   gantt.koutei as '工程',
   gantt.start_date as '開始日',
   gantt.end_date as '終了日',

   gantt.color as 'カラー',
   gantt.members as '担当者',

   gantt.bikou as '備考'

   from gantt
   order by gantt.id asc;