'use strict';

function create_csv(event){

  console.log('---- in create csv ----');

  var label=event.target.label;
  var row=event.target.row;
  var table_name=event.target.table_name;

  var date=new Date();

  var year=date.getFullYear();
  var month=toDoubleDigits(date.getMonth()+1);
  var day=toDoubleDigits(date.getDate());
  var hour=toDoubleDigits(date.getHours());
  var minutes=toDoubleDigits(date.getMinutes());

  var file_name=table_name+'_'+year+'_'+month+day+'_'+hour+minutes+'.csv';

  console.log('label:'+label);
  console.log('table_name:'+table_name);
  console.log('row:');
  console.log(row);

  var csv_data='';

  for(var i=0;i<label.length;i++){

    if (label[i]=='id') continue;

    csv_data+=label[i];

    if(i==label.length-1){ 
      csv_data+='\n';
      break;
    }else{
      csv_data+=',';
    }

  }

  for(var j=0;j<row.length;j++){
    for(var i=0;i<label.length;i++){
      if (label[i]=='id') continue;

      csv_data+=row[j][label[i]];

      if(i==label.length-1){
        csv_data+='\n';
        break; 
      }else{
        csv_data+=',';       
      }
    }
  }

  console.log('csv_data:');
  console.log(csv_data);

  //BOMを付与する（Excelでの文字化け対策）
  var bom = new Uint8Array([0xef, 0xbb, 0xbf]);

  //Blobでデータを作成する
  var blob = new Blob([bom, csv_data], { type:'text/csv'});

  //BlobからオブジェクトURLを作成する
  var url = (window.URL || window.webkitURL).createObjectURL(blob);

  //ダウンロード用にリンクを作成する
  var download = document.createElement('a');

  //リンク先に上記で生成したURLを指定する
  download.href = url;

  //download属性にファイル名を指定する
  download.download = file_name;

  //自分で作成したリンクをクリックしてダウンロードを実行する
  download.click();

  //createObjectURLで作成したオブジェクトURLを開放する
  (window.URL || window.webkitURL).revokeObjectURL(url);

}