use orinasu_db;

drop table if exists products;

create table products(
  id int unsigned not NULL  AUTO_INCREMENT PRIMARY KEY ,
  category tinyint ,
  tax tinyint UNSIGNED ,
  round_type tinyint UNSIGNED ,

  product_name varchar(80),
  sales_date date,

  place varchar(180),
  customer varchar(50),
 
  tanka int UNSIGNED ,
  kosuu int UNSIGNED ,
  tyousei int,
  uriage int,
  
  bikou text
);

drop table if exists category;

create table category(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  name varchar(40)
);

insert into category(name) values('バッグ');
insert into category(name) values('ポーチ');
insert into category(name) values('お財布');
insert into category(name) values('マスク');
insert into category(name) values('アクセサリ');

select * from category;

drop table if exists tax;

create table tax(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  tax tinyint UNSIGNED 
);

insert into tax(tax) values(0);
insert into tax(tax) values(8);
insert into tax(tax) values(10);

select * from tax;

drop table if exists round_type;

create table round_type(
  id tinyint UNSIGNED not NULL AUTO_INCREMENT PRIMARY KEY ,
  type varchar(40) NOT NULL 
);

insert into round_type(type) values('四捨五入');
insert into round_type(type) values('切り上げ');
insert into round_type(type) values('切り捨て');

select * from round_type;

drop view if exists products_join;

create view products_join as
  select 
        products.id as id,

        category.name as 'カテゴリー',
        tax.tax as '消費税',
        round_type.type as '端数処理',

        products.product_name as '商品名',
        products.sales_date as '販売日',
        products.place as '販売場所',
    		products.customer as '顧客名',

        products.tanka as '商品単価',
        products.kosuu as '販売個数',
        products.tyousei as '調整額',
        products.uriage as '売上額',
        products.bikou as '備考'

        from products
          inner join category on (products.category+1)=category.id
          inner join tax on (products.tax+1)=tax.id
          inner join round_type on (products.round_type+1)=round_type.id

        order by products.id asc;
