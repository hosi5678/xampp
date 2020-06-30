'use strict';
// このやり方はうまくいかない
function create_members_thead({
  parent_tag_str,
  label,
  table_num,
}){

	for(let j=0;j<table_num;j++){
		create_elements({
				parent_tag_str:parent_tag_str,
				element_str:'thead',
				id:j,
		});
	}

 for(let j=0;j<table_num;j++){
		if(j==0){
			for(let i=0;i<label.length;i++){
				if(label[i]=='姓'||label[i]=='名'){
   		create_elements({
						parent_tag_str:parent_tag_str+'_thead'+j,
						element_str:'th',
						text:label[i],
						id:i,
					});
				}
			}
		}
 }

	for(let j=0;j<table_num;j++){

		create_elements({
				parent_tag_str:parent_tag_str,
				element_str:'tbody',
				id:j,
		});
	}

	for(let j=0;j<table_num;j++){

  	create_elements({
							parent_tag_str:parent_tag_str+'_tbody'+j,
							element_str:'tr',
							id:j,
			});
	}

	for(let j=0;j<table_num;j++){
		if(j==0){


			for(let i=0;i<label.length;i++){
				if(label[i]=='姓'||label[i]=='名'){
   		create_elements({
						parent_tag_str:parent_tag_str+'_tbody'+j+'_tr'+j,
						element_str:'td',
						id:i,
					});
				}
			}
		}
 }




}
