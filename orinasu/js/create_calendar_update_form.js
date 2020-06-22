'use strict';

function create_calendar_update_form(event){

    console.log('-----in crate calendar update form-----');

    var parent_tag_str=event.target.parent_tag_str;
    var table_name=event.target.table_name;
    var mode=event.target.mode;
    var label=event.target.label;
    var col=event.target.col;
  
    var tds=$(this).closest('tr').children();

    var tds_val=new Array();
  
    for(var i=0;i<tds.length;i++){
      tds_val.push(tds[i].innerText);
    }

    console.log('label:');
    console.log(label);
    console.log('col:');
    console.log(col);
    console.log('tds_val:'+tds_val);

		var ymd_str;

    for(var i=0;i<label.length;i++){
      if(label[i]=='日付'){
				ymd_str=tds_val[i];
			}
		}
		
		console.log('ymd_str:'+ymd_str);

		var ymd=new Array();

		ymd=ymd_str.split('-');
	
		console.log(ymd);
	
		var year=ymd[0];
		var month=remove_zero(ymd[1]);
		var date=remove_zero(ymd[2]);
	
		console.log('year:'+year);
		console.log('month:'+month);
		console.log('date:'+date);

		// 取り寄せるのが面倒なのでここで記述してしまう。
		var youbi=new Array('日','月','火','水','木','金','土');

		var thisDate=new Date(year,month-1,date);
		var youbiNum=thisDate.getDay();
	
		var title=childNodeClear(parent_tag_str+'_title');
		title.innerText=year+'年'+month+'月'+date+'日('+youbi[youbiNum]+')';
	
			for(var i=0;i<label.length;i++){
				if(label[i]=='id') continue;
				document.getElementById(parent_tag_str+i).value=tds_val[i];
			}

			var exec=create_exec({
				parent_tag_str:parent_tag_str,
				sub_tag_str:'_exec',
				table_name:table_name,
				label:label,
				col:col,
				mode:'update', 
				class_str:'a-mod',
				id:'"'+ymd_str+'"',
			});
	

			// var exec=childNodeClear(parent_tag_str+'_exec');
			
			// var a=document.createElement('a');

			// a.innerText='メモを修正する';
			// a.classList.add('a-mod');
			// a.addEventListener('click',update_table);
			// a.id='"'+ymd_str+'"';
			// a.parent_tag_str=parent_tag_str;
			// a.table_name=table_name;
			// a.col=col;
			// a.label=label;
								
			// exec.appendChild(a);

			var a=document.createElement("a");

      a.href='#'+parent_tag_str;

      a.innerText='戻る';

      a.addEventListener('click',

        function(event){
          create_calendar_input_form({
            parent_tag_str:parent_tag_str,
            table_name:table_name,
            label:label,
            col:col,
            youbi:youbi
          })
        }
      );

      exec.appendChild(a);
	
}