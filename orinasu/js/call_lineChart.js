'use strict';
function call_lineChart({parent_tag_str,xaxis,series}){


  console.log('--- in call line chart--- ');
  console.log(xaxis);
  console.log(series);

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
    },
    title: {
      text: '単価ごとの売上状況',
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
        text: '売上(円)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '円'
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
