use orinasu_db;

drop view if exists members_jpn cascade;

create view members_jpn as
  select 
        members.id as id,
        members.myouji as '姓',
        members.namae as '名',
        sun.content as '日',
        mon.content as '月',
        tue.content as '火',
        wed.content as '水',
        thu.content as '木',
        fri.content as '金',
        sat.content as '土'

        from members
          inner join riyou_keitai as sun on (members.sun+1)=sun.id
          inner join riyou_keitai as mon on (members.mon+1)=mon.id
          inner join riyou_keitai as tue on (members.tue+1)=tue.id
          inner join riyou_keitai as wed on (members.wed+1)=wed.id
          inner join riyou_keitai as thu on (members.thu+1)=thu.id
          inner join riyou_keitai as fri on (members.fri+1)=fri.id
          inner join riyou_keitai as sat on (members.sat+1)=sat.id

        order by members.id asc;

show create view members_jpn \G

select * from members_work order by id asc;