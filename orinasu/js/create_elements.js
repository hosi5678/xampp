'use strict';

function create_elements({parent_tag_str,id,value,class_str,element_str,text,placeholder}){

		let element;
    let parent_tag=document.getElementById(parent_tag_str);	
    
  if(element_str=='table'){

 			parent_tag=document.getElementById(parent_tag_str+'_params');	

      element=document.createElement(element_str);

      element.id=parent_tag_str+'_'+element_str+id;

      console.log(parent_tag);

      
      parent_tag.appendChild(element);

    }else if(element_str=='th'||element_str=='option'){

      element=document.createElement(element_str);
      element.id=parent_tag_str+'_'+element_str+id;
      element.classList.add(class_str);
      element.innerText=text;
      parent_tag.appendChild(element);

    }else if(element_str=='input'){

      element=document.createElement(element_str);
      element.id=id;
      element.type='text';

      if(value!=null){
        element.value=value;
      }
      element.placeholder=placeholder;
      element.classList.add(class_str);
      parent_tag.appendChild(element);

    }else if(element_str=='tr'||element_str=='td'){

      element=document.createElement(element_str);
      element.id=parent_tag_str+'_'+element_str+id;
      parent_tag.appendChild(element);

    }else if(element_str=='select'){

      element=document.createElement(element_str);
      element.id=parent_tag_str+id;
      parent_tag.appendChild(element);

    }else if(element_str=='hidden'){

      element=document.createElement(element_str);
      element.id=parent_tag_str+id;
      element.value=value;
      parent_tag.appendChild(element);

    }else if(element_str=='thead'||element_str=='tbody'){

			parent_tag=document.getElementById(parent_tag_str+'_table'+id);	

      element=document.createElement(element_str);
      element.id=parent_tag_str+'_'+element_str+id;
      parent_tag.appendChild(element);

    }else if(element_str=='p'){
      element=document.createElement(element_str);
      element.id=parent_tag_str+id;
      element.innerText=text;
      parent_tag.appendChild(element);

    }


  }


