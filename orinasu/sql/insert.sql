insert into ip_address(ip_address) values("192.168.1.2");
insert into ip_address(ip_address) values("192.168.1.3");
insert into ip_address(ip_address) values("192.168.1.4");
insert into ip_address(ip_address) values("192.168.1.5");
insert into ip_address(ip_address) values("192.168.1.6");
insert into ip_address(ip_address) values("192.168.1.7");
insert into ip_address(ip_address) values("192.168.1.8");
insert into ip_address(ip_address) values("192.168.1.9");
insert into ip_address(ip_address) values("192.168.1.10");
insert into ip_address(ip_address) values("192.168.1.12");
insert into ip_address(ip_address) values("192.168.1.13");
insert into ip_address(ip_address) values("192.168.1.15");

select * from ip_address;

insert into password(password) values("orinasu_admin");
insert into password(password) values("orinasu_user");

select * from password;

INSERT INTO youbi(name) values('日');
INSERT INTO youbi(name) values('月');
INSERT INTO youbi(name) values('火');
INSERT INTO youbi(name) values('水');
INSERT INTO youbi(name) values('木');
INSERT INTO youbi(name) values('金');
INSERT INTO youbi(name) values('土');

select * from youbi;

insert into riyou_keitai(content) values("利用なし");
insert into riyou_keitai(content) values("終日");
insert into riyou_keitai(content) values("午前");
insert into riyou_keitai(content) values("午後");

select * from riyou_keitai;

insert into category(name) values('バッグ');
insert into category(name) values('ポーチ');
insert into category(name) values('お財布');
insert into category(name) values('マスク');
insert into category(name) values('アクセサリ');

select * from category;

insert into tax(tax) values(0);
insert into tax(tax) values(8);
insert into tax(tax) values(10);

select * from tax;

insert into round_type(type) values('四捨五入');
insert into round_type(type) values('切り上げ');
insert into round_type(type) values('切り捨て');

select * from round_type;