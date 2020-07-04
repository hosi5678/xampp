function call_stockChart({parent_tag_str,series}){

      // Highchart全体設定
  Highcharts.setOptions({
			
    global: {  // グローバルオプション
     useUTC: false   // GMTではなくJSTを使う
				},
				
    lang:{  // 言語設定
     rangeSelectorZoom: '表示範囲',
     resetZoom: '表示期間をリセット',
     resetZoomTitle: '表示期間をリセット',
     rangeSelectorFrom: '表示期間',
     rangeSelectorTo: '〜',
     printButtonTitle: 'チャートを印刷',
     exportButtonTitle: '画像としてダウンロード',
     downloadJPEG: 'JPEG画像でダウンロード',
     downloadPDF: 'PDF文書でダウンロード',
     downloadPNG: 'PNG画像でダウンロード',
     downloadSVG: 'SVG形式でダウンロード',
     months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
     weekdays: ['日', '月', '火', '水', '木', '金', '土'],
					// 1000を1kと表示しない
					numericSymbols: null,   
					thousandsSep: ',',
										
   }
  });
  	
		console.log('---- in call stock chart ----');

		console.log('parent tag str:'+parent_tag_str);
		console.log('series');
		console.log(series);

  chart=new Highcharts.StockChart({
  
        chart: {
          renderTo:parent_tag_str+'_container',
          width:900,
          height:400,
          zoomType: 'x',
        },
        title: {
          text: '売上状況',
          // x: -20 //center
        },
        subtitle: {
          // text: 'Source: WorldClimate.com',
          // x: -20
        },

        credits: {  // 右下のクレジット
          enabled: false
        },

								xAxis: [{  // X軸
									type:'date',
         labels: {
            formatter: function(){ return utc2dateString(this.value); }
									},
									minRange: 60*1000*60*24 // one day
        }],
        yAxis:[ 
          {
           title: {text:''}
          },
          {
          title: {text: '売上(円)',},
          opposite: false
          }
        ],
									
								
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }],

								tooltip: {
         xDateFormat: '%Y/%m/%d',
        },
        // legend: {
        //   layout: 'vertical',
        //   align: 'right',
        //   verticalAlign: 'middle',
        //   borderWidth: 0
        // },
  
        series:series,

        rangeSelector: { // 表示幅選択ボタン
          selected : 4,
          inputDateFormat: '%Y/%m/%d',
          inputEditDateFormat: '%Y/%m/%d',
          buttons : [
 
          {
            type : 'month',    // 月単位 
            count : 6,      // 6月のデータを表示
            text : '6ヵ月'
          }, 
          {
            type : 'month',    // 月単位 
            count : 1,      // 1月のデータを表示
            text : '1ヵ月'
          },
          {
            type : 'year',    // 年単位
            count : 1,      // 1年のデータを表示
            text : '1年'
          }, 
          {
            type : 'all',    // 全データ 
            count : 1,
            text : '全て'
          }]
        },

      legend: {
          enabled: true,
          align: 'right',
          layout: 'vertical',
          verticalAlign: 'top',
          y: 50,
      },

      plotOptions:{  // プロットオプション
       series: {

								marker: {
									fillColor: '#0000ff',
									lineWidth: 1,
									lineColor: null // inherit from series
							},

								dataGrouping: {
										dateTimeLabelFormats: {
											day: ['%Y/%m/%d', '%Y/%m/%d', '-%Y/%m/%d'],
											week: ['%Y/%m/%d', '%Y/%m/%d', '-%Y/%m/%d'],
											month: ['%Y/%m', '%Y/%m', '-%Y/%m'],
											year: ['%Y', '%Y', '-%Y']
										}
								}
  					}
						},
						
            navigator: {  // ナビゲータ
              enabled: true,
							xAxis: {
								type:'datetime',
                // max : new Date().getTime()
                labels: {
                  // format: '{value:%Y-%m-%e}'
                  format:'{value:%Y/%m}',

                },
							}
						},
  });
  
}