'use strict';

function create_graph_input_form({
  parent_tag_str,
  table_name,
}){

  var parent_tag=childNodeClear(parent_tag_str+'_params');

  var form=document.createElement('form');
  form.name='uriage_graph_form';

  var table=document.createElement('table');
  var thead=document.createElement('thead');
  var tbody=document.createElement('tbody');

  let th=document.createElement('th');

  th.innerText='横軸';

  thead.appendChild(th);

  th=document.createElement('th');

  th.innerText='縦軸';

  thead.appendChild(th);

  table.appendChild(thead);

  let tr=document.createElement('tr');
  let td=document.createElement('td');

  let select=document.createElement('select');
  select.id=parent_tag_str+'0';

  let option=document.createElement('option');
    option.value='term';
    option.innerText='期間';
    select.appendChild(option);

  option=document.createElement('option');
    option.value='category';
    option.innerText='カテゴリー';
    select.appendChild(option);
  
  option=document.createElement('option');
    option.value='tanka';
    option.innerText='単価';
  select.appendChild(option);

  select.addEventListener('click',
    function(event){
      create_graph({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
      });
    }
  );

		  select.addEventListener('change',
    function(event){
      create_graph({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
      });
    }
  );


  td.appendChild(select);
  tr.appendChild(td);

  select=document.createElement('select');
		select.id=parent_tag_str+'1';

  td=document.createElement('td');

  option=document.createElement('option');
		option.value='uriage';

		option.innerText='売上高';
  select.appendChild(option);
  select.appendChild(option);
  td.appendChild(select);

  td=document.createElement('td');

  option=document.createElement('option');
		option.value='kosuu';

		option.innerText='個数';
  select.appendChild(option);
  select.appendChild(option);

  select.addEventListener('click',
    function(event){
      create_graph({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
      });
    }
  );

		  select.addEventListener('change',
    function(event){
      create_graph({
        parent_tag_str:parent_tag_str,
        table_name:table_name,
      });
    }
  );


  td.appendChild(select);
  tr.appendChild(td);

  tbody.appendChild(tr);

  table.appendChild(tbody);

  form.appendChild(table);

  parent_tag.appendChild(form);


}