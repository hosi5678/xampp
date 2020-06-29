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

  var th=document.createElement('th');

  th.innerText='横軸';

  thead.appendChild(th);

  table.appendChild(thead);

  var tr=document.createElement('tr');
  var td=document.createElement('td');

  var select=document.createElement('select');
  select.id=parent_tag_str+0;

  var option=document.createElement('option');
    option.value='term';
    option.innerText='期間';
    select.appendChild(option);

  var option=document.createElement('option');
    option.value='category';
    option.innerText='カテゴリー';
    select.appendChild(option);
  
  var option=document.createElement('option');
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

//   select.addEventListener('change',
//   function(event){
//     create_graph({
//       parent_tag_str:parent_tag_str,
//       table_name:table_name,
//     });
//   }
// );

  td.appendChild(select);
  tr.appendChild(td);

  tbody.appendChild(tr);

  table.appendChild(tbody);

  form.appendChild(table);

  parent_tag.appendChild(form);


}