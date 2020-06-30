'use strict';
// このやり方はうまくいかない
function create_members_tbody({
  parent_tag_str,
  label,
  table_num,
}){

  for(let j=0;j<table_num;j++){
			if(j==0){
				for(let i=0;i<label.length;i++){
					if(label[i]=='姓'||label[i]=='名'){
   			create_elements({
							parent_tag_str:parent_tag_str+'_tbody'+j+'_tr'+j+'_td'+i,
							element_str:'input',
							id:parent_tag_str+i,
							placeholder:label[i],
						});
					}
				}
			}
 }



  
}