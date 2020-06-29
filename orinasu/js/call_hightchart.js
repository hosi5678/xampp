function call_hightchart(parent_tag_str){
 
    // console.log(window.location.href.split('/').pop());

    var xaxis=['1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12'];

    var tokyo_data=new Array(27.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6);

    json_arry={"name":"tokyo city","data":tokyo_data};

    console.log(json_arry);

    var json_arry = JSON.stringify(json_arry);

    console.log(json_arry);

    var series=new Array();

    series.push(JSON.parse(json_arry));
   
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
        text: '売上状況',
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
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },

      series:series,
      /*
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: '大丸',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
      */
    });
  
}