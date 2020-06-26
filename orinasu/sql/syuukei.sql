/* カテゴリーごとに売り上げを集計する */
select category, sum(uriage) from products group by category order by sum(uriage) desc;

/* 時系列で売上を集計する */
/* select sales_date,category,sum(uriage) as uriage from products group by category order by sales_date asc; */
/* select sales_date,category,uriage from products; */

 select sales_date,category,uriage from products order by sales_date asc;