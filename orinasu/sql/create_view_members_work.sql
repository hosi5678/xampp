use orinasu_db;

drop view if exists members_work cascade;

create view members_work as
  select 
        members.id as id,
        members.myouji as myouji,
        members.namae as namae,
        sun.content as sun,
        mon.content as mon,
        tue.content as tue,
        wed.content as wed,
        thu.content as thu,
        fri.content as fri,
        sat.content as sat

        from members
          inner join riyou_keitai as sun on (members.sun+1)=sun.id
          inner join riyou_keitai as mon on (members.mon+1)=mon.id
          inner join riyou_keitai as tue on (members.tue+1)=tue.id
          inner join riyou_keitai as wed on (members.wed+1)=wed.id
          inner join riyou_keitai as thu on (members.thu+1)=thu.id
          inner join riyou_keitai as fri on (members.fri+1)=fri.id
          inner join riyou_keitai as sat on (members.sat+1)=sat.id

        order by members.id asc;

show create view members_work \G

select * from members_work order by id asc;