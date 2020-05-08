use orinasu_db;

drop table if exists products;

create table products(
  id int unsigned not NULL  AUTO_INCREMENT PRIMARY KEY ,
  category tinyint ,
  name varchar(80),
  place varchar(180),
  tanka int UNSIGNED ,
  tax tinyint UNSIGNED ,
  sales_date datetime,
  kosuu int UNSIGNED ,
  tyousei int,
  bikou text
);

drop table if exists category;

create table category(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  name varchar(40)
);

insert into category(name) value('バッグ');
insert into category(name) value('ポーチ');
insert into category(name) value('マスク');

drop table if exists tax;

create table tax(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  tax tinyint UNSIGNED 
);

insert into tax(tax) value(0);
insert into tax(tax) value(8);
insert into tax(tax) value(10);

drop view if exists products_work;

create view products_work as
  select 
        products.id as id,
        category.name as 'カテゴリー',
        products.name as '商品名',
        products.place as '場所',
        products.tanka as '商品単価',
        tax.tax as '消費税',
        products.sales_date as '販売日',
        products.kosuu as '販売個数',
        products.tyousei as '調整額',
        products.bikou as '備考'

        from products
          inner join category on (products.category+1)=category.id
          inner join tax on (products.tax+1)=tax.id

        order by products.id asc;
