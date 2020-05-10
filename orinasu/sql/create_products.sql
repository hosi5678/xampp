use orinasu_db;

drop table if exists products;

create table products(
  id int unsigned not NULL  AUTO_INCREMENT PRIMARY KEY ,
  category tinyint ,
  product_name varchar(80),
  customer varchar(50),
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

insert into category(name) values('バッグ');
insert into category(name) values('ポーチ');
insert into category(name) values('お財布');
insert into category(name) values('マスク');

drop table if exists tax;

create table tax(
  id int unsigned not NULL AUTO_INCREMENT PRIMARY KEY ,
  tax tinyint UNSIGNED 
);

insert into tax(tax) values(0);
insert into tax(tax) values(8);
insert into tax(tax) values(10);

drop view if exists products_join;

create view products_join as
  select 
        products.id as id,
        category.name as 'カテゴリー',
        products.product_name as '商品名',
        products.place as '販売場所',
    		products.customer as '顧客名',
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
