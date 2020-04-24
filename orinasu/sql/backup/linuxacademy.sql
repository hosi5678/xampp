drop table packedsales cascade;
drop table sales cascade;
drop table employee cascade;
drop table customer cascade;
drop table product cascade;
drop table department cascade;
drop table nextsalary cascade;
drop table account cascade;

create table packedsales(
psales_no integer primary key,
psales_date date,
emp_id integer,
cust_id integer,
cust_address varchar(40),
cust_tel varchar(20),
delivery_date date,
delivery_time time,
total numeric(9,2),
carriage numeric(9,2),
excise numeric(9,2)

);

create table sales(
sales_no integer,
psales_no integer,
prod_id integer,
quantity numeric(9,2),
price numeric(9,2),
primary key(sales_no,psales_no)

);

create table employee(
emp_id integer primary key,
dept_id integer,
emp_name varchar(20),
birthday date,
hiredate date,
sex integer,
sal numeric(9,2),
comm numeric(9,2)

);

create table department(
dept_id integer primary key,
dept_name varchar(20),
loc varchar(32),
mgr_id integer,
adept_id integer
);

create table customer(
cust_id integer primary key,
cust_name varchar(20),
address varchar(40),
tel varchar(20),
fax varchar(20)

);

create table product(
prod_id integer primary key,
prod_name varchar(20),
model_no varchar(20),
cost numeric(9,2),
discount numeric(9,2)

);

create table nextsalary(
emp_id integer primary key,
current numeric(9,2),
next numeric(9,2)
);

create table account(
emp_id integer,
balance integer
);

/* 顧客テーブル */

truncate customer;

insert into customer(cust_id,cust_name,address,tel,fax) values(1,"坂上　徹","和歌山県和歌山市","073-123-XXXX","073-123-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(2,"松坂　宏","東京都千代田区","03-3158-XXXX","03-3257-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(3,"北島　浩二","大阪府大阪市北区","06-1234-XXXX","06-1234-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(4,"永井　光夫","東京都渋谷区","03-3124-XXXX","03-0124-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(5,"関根　秀一","大阪府泉佐野市","0724-99-XXXX","0724-99-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(6,"木田　直美","東京都中央区","03-3333-XXXX",NULL);
insert into customer(cust_id,cust_name,address,tel,fax) values(7,"片桐　昇","東京都新宿区","03-1111-XXXX","03-1111-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(8,"田中　正敏","東京都品川区","03-2222-XXXX","03-2222-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(9,"西口　和夫","東京都目黒区下目黒","03-3333-XXXX","03-3333-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(10,"山口　克己","東京都大田区","03-4444-XXXX","03-4444-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(11,"加藤　昭夫","神奈川県川崎市","044-505-XXXX","03-505-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(12,"石橋　健太郎","札幌市中央区","011-555-XXXX",NULL);
insert into customer(cust_id,cust_name,address,tel,fax) values(13,"米田　恵美子","東京都港区虎ノ門","03-3987-XXXX","03-3987-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(14,"松田　純一","東京都千代田区大手町","03-3975-XXXX","03-3975-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(15,"松下　晴彦","東京都板橋区","03-3123-XXXX","03-3123-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(16,"安井　和義","愛知県東海市","0560-448-XXXX","0560-448-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(17,"高沢　千夏","大阪府大阪市大淀区","06-6777-XXXX","06-6777-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(18,"島田　良子","東京都渋谷区","03-3698-XXXX",NULL);
insert into customer(cust_id,cust_name,address,tel,fax) values(19,"吉田　正也","神奈川県川崎市","044-8888-XXXX","044-888-XXXX");
insert into customer(cust_id,cust_name,address,tel,fax) values(20,"藤田　幹夫","東京都中央区","03-3578-XXXX",NULL);

/*　商品テーブル　*/

truncate product;
insert into product(prod_id,prod_name,model_no,cost,discount) values(101,"テレビ","A1111",25000,0.7);
insert into product(prod_id,prod_name,model_no,cost,discount) values(1021,"ビデオ","B2222",12000,0.8);
insert into product(prod_id,prod_name,model_no,cost,discount) values(103,"MDプレイヤー","C3333",23500,0.8);
insert into product(prod_id,prod_name,model_no,cost,discount) values(104,"ステレオ","D4444",56000,0.7);
insert into product(prod_id,prod_name,model_no,cost,discount) values(105,"デジタルカメラ","E5555",18600,0.8);
insert into product(prod_id,prod_name,model_no,cost,discount) values(106,"プリンタ","F6666",23500,0.8);
insert into product(prod_id,prod_name,model_no,cost,discount) values(107,"電気シェーバー","G7777",13800,NULL);
insert into product(prod_id,prod_name,model_no,cost,discount) values(108,"ホイールマウス","H8888",8500,NULL);
insert into product(prod_id,prod_name,model_no,cost,discount) values(109,"アイロン","I9999",10000,0.8);
insert into product(prod_id,prod_name,model_no,cost,discount) values(110,"リモコン","J0000",5800,NULL);

/* 担当者テーブル  */

truncate employee;
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(1,10,"羽生　章洋","1978/10/10","1990/12/17",1,800,100);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(2,10,"釜本　喜美子","1975/05/20","1991/02/20",2,1600,10);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(3,20,"安部　弘江","1974/06/01","1991/02/22",2,1250,NULL);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(4,20,"松村　秀和","1970/09/13","1991/04/02",1,2975,NULL);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(5,30,"萩原　恵理子","1985/03/16","2008/09/28",2,1250,10);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(6,30,"岡田　奈緒子","1983/12/24","2007/05/01",2,2850,10);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(7,30,"井上　尚志","1971/10/17","2000/11/15",1,2450,10);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(8,40,"西口　麻衣子","1986/12/14","2008/12/03",2,3000,NULL);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(9,40,"滝本　順三","1978/04/02","2004/12/18",1,5000,NULL);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(10,40,"工藤　新一","1990/02/10","1999/04/01",1,1500,NULL);
insert into employee(emp_id,dept_id,emp_name,birthday,hiredate,sex,sal,comm) values(11,90,"毛利　光太郎","1970/12/31","1990/04/01",1,8000,NULL);

/* 部門テーブル  */

truncate department;
insert into department(dept_id,dept_name,loc,mgr_id,adept_id) values(10,"営業部","東京都千代田区",1,30);
insert into department(dept_id,dept_name,loc,mgr_id,adept_id) values(20,"開発部","東京都港区",3,30);
insert into department(dept_id,dept_name,loc,mgr_id,adept_id) values(30,"企画部","東京都中央区",5,40);
insert into department(dept_id,dept_name,loc,mgr_id,adept_id) values(40,"管理部","東京都台東区",8,40);
insert into department(dept_id,dept_name,loc,mgr_id,adept_id) values(50,"製造部","東京都大田区",NULL,50);

/* 売上テーブル */

truncate packedsales;

/* 2001年7月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1001,"2001/07/03",1,1,"和歌山県和歌山市","073-123-XXXX","2001/07/18","10:00",90000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1002,"2001/07/14",1,2,"大阪府大阪市","06-6123-XXXX","2001/07/19","10:00",20000,0,1000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1003,"2001/07/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","2001/07/20","10:00",85000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1004,"2001/07/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","2001/07/21","10:00",180000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1005,"2001/07/18",3,5,"東京都千代田区大手町","03-3123-XXXX","2001/07/22","10:00",25000,0,1250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1006,"2001/07/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","2001/07/23","10:00",30000,0,1500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1007,"2001/07/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","2001/07/24","10:00",40000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1008,"2001/07/18",4,8,"大阪市大淀区大淀南","03-6123-XXXX","2001/07/25","10:00",10000,0,500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1009,"2001/07/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","2001/07/26","10:00",45000,0,22500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1010,"2001/07/18",5,10,"東京都中央区日本橋","03-3123-XXXX","2001/07/27","10:00",6000,0,300);

/* 1994年7月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (1,"1994/07/13",1,1,"和歌山県和歌山市","073-123-XXXX","1994/07/18","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (2,"1994/07/14",1,2,"大阪府大阪市","06-6123-XXXX","1994/07/19","10:00",60000,0,1000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (3,"1994/07/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","1994/07/20","10:00",85000,0,4250);


/* 1994年 8月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (4,"1994/08/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","1994/08/21","10:00",120000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (5,"1994/08/18",3,5,"東京都千代田区大手町","03-3123-XXXX","1994/08/22","10:00",25000,0,1250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (6,"1994/08/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","1994/08/23","10:00",30000,0,1500);

/* 1994年 9月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (7,"1994/09/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","1994/09/24","10:00",60000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (8,"1994/09/18",4,8,"大阪市大淀区大淀南","03-6123-XXXX","1994/09/25","10:00",10000,0,500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (9,"1994/09/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","1994/09/26","10:00",45000,0,2250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (10,"1994/09/18",5,10,"東京都中央区日本橋","03-3123-XXXX","1994/09/27","10:00",24000,0,300);

/* 1994年 10月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (111,"1994/10/13",1,1,"和歌山県和歌山市","073-123-XXXX","1994/10/18","10:00",60000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (112,"1994/10/14",1,2,"大阪府大阪市","06-6123-XXXX","1994/10/19","10:00",20000,0,1000);

/* 1994年 11月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (113,"1994/11/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","1994/11/20","10:00",85000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (114,"1994/11/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","1994/11/21","10:00",60000,0,3000);

/* 1994年 10月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (115,"1994/12/18",3,5,"東京都千代田区大手町","03-3123-XXXX","1994/12/22","10:00",25000,0,1250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (116,"1994/12/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","1994/12/23","10:00",30000,0,1500);

/* 1995年 1月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (217,"1995/01/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","1995/01/24","10:00",40000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (218,"1995/01/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","1995/01/25","10:00",10000,0,500);

/* 1995年 4月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (219,"1995/04/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","1995/04/26","10:00",60000,0,2250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (220,"1995/04/18",5,10,"東京都中央区日本橋","03-3123-XXXX","1995/04/27","10:00",6000,0,300);

/* 1995年 9月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (221,"1995/09/13",1,1,"和歌山県和歌山市","073-123-XXXX","1995/09/18","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (222,"1995/09/14",1,2,"大阪府大阪市","06-6123-XXXX","1995/09/19","10:00",20000,0,1000);

/* 1995年 12月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (223,"1995/12/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","1995/12/20","10:00",85000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (224,"1995/12/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","1995/12/21","10:00",120000,0,3000);

/* 1996年 3月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (325,"1996/03/18",3,5,"東京都千代田区大手町","03-3123-XXXX","1996/03/22","10:00",25000,0,1250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (326,"1996/03/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","1996/03/23","10:00",30000,0,1500);

/* 1996年 7月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (327,"1996/07/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","1996/07/24","10:00",40000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (328,"1996/07/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","1996/07/25","10:00",10000,0,500);

/* 1997年 10月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (329,"1996/10/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","1996/10/26","10:00",45000,0,2250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (330,"1996/10/18",5,10,"東京都中央区日本橋","03-3123-XXXX","1996/10/27","10:00",6000,0,300);

/* 1997年 2月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (431,"1997/02/13",1,1,"和歌山県和歌山市","073-123-XXXX","1997/02/18","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (432,"1997/02/14",1,2,"大阪府大阪市","06-6123-XXXX","1997/02/19","10:00",20000,0,1000);

/* 1997年 5月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (433,"1997/05/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","1997/05/20","10:00",115000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (434,"1997/05/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","1997/05/21","10:00",60000,0,3000);

/* 1997年 8月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (435,"1997/08/18",3,5,"東京都千代田区大手町","03-3123-XXXX","1997/08/22","10:00",25000,0,1250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (436,"1997/08/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","1997/08/23","10:00",30000,0,1500);

/* 1997年 11月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (437,"1997/11/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","1997/11/24","10:00",40000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (438,"1997/11/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","1997/11/25","10:00",10000,0,500);

/* 1998年 3月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (541,"1998/03/13",1,1,"和歌山県和歌山市","073-123-XXXX","1998/03/18","10:00",120000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (542,"1998/03/14",1,2,"大阪府大阪市","06-6123-XXXX","1998/03/19","10:00",20000,0,1000);

/* 1998年 7月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (543,"1998/07/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","1998/07/20","10:00",85000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (544,"1998/07/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","1998/07/21","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (545,"1998/07/18",3,5,"東京都千代田区大手町","03-3123-XXXX","1998/07/22","10:00",25000,0,1250);

/* 1998年10月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (547,"1998/10/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","1998/10/24","10:00",40000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (548,"1998/10/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","1998/10/25","10:00",10000,0,500);

/* 1999年 3月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (653,"1999/03/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","1999/03/20","10:00",85000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (654,"1999/03/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","1999/03/21","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (655,"1999/03/18",3,5,"東京都千代田区大手町","03-3123-XXXX","1999/03/22","10:00",75000,0,1250);

/* 1999年 6月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (656,"1999/06/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","1999/06/23","10:00",30000,0,1500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (657,"1999/06/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","1999/06/24","10:00",40000,0,2000);

/* 1999年 9月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (658,"1999/09/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","1999/09/25","10:00",10000,0,500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (659,"1999/09/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","1999/09/26","10:00",45000,0,2250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (660,"1999/09/18",5,10,"東京都中央区日本橋","03-3123-XXXX","1999/09/27","10:00",6000,0,300);

/* 2000年 1月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (771,"2000/01/13",1,1,"和歌山県和歌山市","073-123-XXXX","2000/01/18","10:00",90000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (772,"2000/01/14",1,2,"大阪府大阪市","06-6123-XXXX","2000/01/19","10:00",20000,0,1000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (773,"2000/01/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","2000/01/20","10:00",85000,0,4250);

/* 2000年 5月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (774,"2000/05/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","2000/05/21","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (775,"2000/05/18",3,5,"東京都千代田区大手町","03-3123-XXXX","2000/05/22","10:00",25000,0,1250);

/* 2000年 7月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (776,"2000/07/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","2000/07/23","10:00",30000,0,1500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (777,"2000/07/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","2000/07/24","10:00",40000,0,2000);

/* 2000年 9月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (778,"2000/09/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","2000/09/25","10:00",10000,0,500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (779,"2000/09/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","2000/09/26","10:00",45000,0,2250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (780,"2000/09/18",5,10,"東京都中央区日本橋","03-3123-XXXX","2000/09/27","10:00",30000,0,300);

/* 2000年 12月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (781,"2000/12/13",1,1,"和歌山県和歌山市","073-123-XXXX","2000/12/18","10:00",60000,0,3000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (782,"2000/12/14",1,2,"大阪府大阪市","06-6123-XXXX","2000/12/19","10:00",20000,0,1000);

/* 2001年 1月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (883,"2001/01/18",2,3,"東京都港区赤坂2丁目","03-3123-XXXX","2001/01/20","10:00",85000,0,4250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (884,"2001/01/18",2,4,"東京都中央区銀座3丁目","03-3123-XXXX","2001/01/21","10:00",60000,0,3000);

/* 2001年 3月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (885,"2001/03/18",3,5,"東京都千代田区大手町","03-3123-XXXX","2001/03/22","10:00",60000,0,1250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (886,"2001/03/18",3,6,"東京都品川区西五反田XXX-XX","03-3123-XXXX","2001/03/23","10:00",30000,0,1500);

/* 2001年 5月 */

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (887,"2001/05/18",4,7,"東京都台東区下谷X-X-X","03-3123-XXXX","2001/05/24","10:00",40000,0,2000);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (888,"2001/05/18",4,8,"大阪市大淀区大淀南","06-6123-XXXX","2001/05/25","10:00",10000,0,500);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (889,"2001/05/18",5,9,"東京都渋谷区広尾XX-X","03-3123-XXXX","2001/05/26","10:00",45000,0,2250);

insert into packedsales(psales_no,psales_date,emp_id,cust_id,cust_address,cust_tel,delivery_date,delivery_time,total,carriage,excise)
values (890,"2001/05/18",5,10,"東京都中央区日本橋","03-3123-XXXX","2001/05/27","10:00",6000,0,300);

/* 売上明細テーブル  */
truncate sales;

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1001,101,2,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,1001,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1002,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1003,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,1003,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,1003,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1004,104,3,60000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1005,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1006,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1007,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,1007,106,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1008,108,1,10000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1009,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,1009,109,1,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1010,110,1,6000);

/* 1994年 7月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,1,101,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,1,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,2,102,3,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,3,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,3,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,3,106,1,30000);

/* 1994年 8月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,4,104,2,60000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,5,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,6,106,1,30000);

/* 1994年 9月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,7,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,7,106,2,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,8,108,1,10000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,9,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,9,109,1,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,10,110,4,6000);

/* 1994年 10月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,111,101,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,111,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,112,102,1,20000);

/* 1994年 11月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,113,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,113,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,113,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,114,104,1,60000);

/* 1994年 12月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,115,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,116,106,1,30000);

/* 1995年 1月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,217,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,217,106,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,218,108,1,10000);

/* 1995年 4月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,219,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,219,109,2,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,220,110,1,6000);

/* 1995年 9月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,221,101,1,3000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,221,103,1,3000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,222,102,1,2000);

/* 1995年 12月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,223,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,223,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,223,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,224,104,2,60000);

/* 1996年 3月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,325,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,326,106,1,30000);

/* 1996年 7月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,327,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,327,106,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,328,108,1,10000);

/* 1996年 10月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,329,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,329,109,1,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,330,110,1,6000);

/* 1997年 2月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,431,101,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,431,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,432,102,1,20000);

/* 1997年 5月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,433,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,433,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,433,106,2,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,434,104,1,60000);

/* 1997年 8月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,435,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,436,106,1,30000);

/* 1997年 11月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,437,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,437,106,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,438,108,1,10000);

/* 1998年 3月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,541,101,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,541,103,3,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,542,102,1,20000);

/* 1998年 7月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,543,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,543,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,543,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,544,104,1,60000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,545,105,1,25000);

/* 1998年 10月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,547,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,547,106,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,548,108,1,10000);

/* 1999年 3月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,653,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,653,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,653,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,654,104,1,60000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,655,105,1,25000);

/* 1999年 6月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,656,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,657,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,657,106,1,20000);

/* 1999年 9月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,658,108,1,10000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,659,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,659,109,1,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,660,110,1,6000);

/* 2000年 1月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,771,101,2,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,771,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,772,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,773,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,773,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,773,106,1,30000);

/* 2000年 5月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,774,104,1,60000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,775,105,1,25000);

/* 2000年 7月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,776,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,777,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,777,106,1,20000);

/* 2000年 9月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,778,108,1,10000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,779,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,779,109,1,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,780,110,5,6000);

/* 2000年 12月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,781,101,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,781,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,782,102,1,20000);

/* 2001年 1月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,883,103,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,883,105,1,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(3,883,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,884,104,1,60000);

/* 2001年 3月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,885,105,2,25000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,886,106,1,30000);

/* 2001年 3月 */

insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,887,102,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,887,106,1,20000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,888,108,1,10000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,889,106,1,30000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(2,889,109,1,15000);
insert into sales(sales_no,psales_no,prod_id,quantity,price) values(1,890,110,1,6000);

update packedsales set carriage=100
	where cust_tel not like "03%"
;

/* 来年給与テーブル */
insert into nextsalary values(1,  800.00, 1000.00);
insert into nextsalary values(2, 1600.00,    0.00);
insert into nextsalary values(3, 1250.00,    0.00);
insert into nextsalary values(4, 2975.00,    0.00);
insert into nextsalary values(5, 1250.00,    0.00);
insert into nextsalary values(6, 2850.00,    0.00);
insert into nextsalary values(7, 2450.00, 2500.00);
insert into nextsalary values(8, 3000.00, 2500.00);
insert into nextsalary values(9, 5000.00,    0.00);
insert into nextsalary values(10,1500.00,    0.00);
insert into nextsalary values(11,8000.00, 6000.00);

/* 講座テーブル */
insert into account values(6,1000);
insert into account values(8,1000);

