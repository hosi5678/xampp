/* カテゴリーごとに売り上げを集計する */
select category, sum(uriage) from products group by category order by sum(uriage) desc;