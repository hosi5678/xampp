function call_stockChart({parent_tag_str,series}){

      // Highchart全体設定
  Highcharts.setOptions({
        global: {  // グローバルオプション
          useUTC: false   // GMTではなくJSTを使う
        },
        lang: {  // 言語設定
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
										numericSymbols: null,   // 1000を1kと表示しない
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
          labels: {
            formatter: function(){ return utc2dateString(this.value); }
										},
										minRange: 3600 * 1000*24 // one day
        }],
        yAxis: {
          title: {
            text: '売上(円)'
										},
									},
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
        // },
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
            type : 'day',    // 日単位 
            count : 30,      // 30日のデータを表示
            text : '1日'
          }, 
          {
            type : 'month',    // 月単位 
            count : 3,      // 3ヶ月のデータを表示
            text : '3ヶ月'
          },
          {
            type : 'year',    // 年単位
            count : 1,      // 1年のデータを表示
            text : '1年'
          }, 
          {
            type : 'all',    // 全データ (2)
            count : 1,
            text : '全て'
          }]
        },

      plotOptions:{  // プロットオプション
       series: {
								dataGrouping: {
										dateTimeLabelFormats: {
											day: ['%Y/%m/%d', '%Y/%m/%d', '-%Y/%m/%d'],
											week: ['%Y/%m/%d', '%Y/%m/%d', '-%Y/%m/%d'],
											month: ['%B %Y', '%B', '-%B %Y'],
											year: ['%Y', '%Y', '-%Y']
										}
								}
  					}
						},
						
						navigator: {  // ナビゲータ
							baseSeries: 0
					},
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