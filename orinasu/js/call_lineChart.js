'use strict';
function call_lineChart({parent_tag_str,xaxis,series,yAxis_title,tanni}){


  console.log('--- in call line chart--- ');
  console.log(xaxis);
  console.log(series);
  console.log('yaxis title:'+yAxis_title);


  Highcharts.setOptions({
    global:{
      useUTC: false
    }
  });

  chart=new Highcharts.Chart({

    chart: {
      renderTo:parent_tag_str+'_container',
      width:900,
      height:400,
      zoomType:'y',
    },
    title: {
      text:'売上',
      x: -20 //center
    },
    subtitle: {
      // text: 'Source: WorldClimate.com',
      // x: -20
    },
    xAxis: {
      categories: xaxis,
    },
    yAxis: {
      title: {
        text:yAxis_title
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix:' '+tanni,
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },

    series:series,
  });

}
