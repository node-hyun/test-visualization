var radarOption = function(chartOptions) {
	var option = {
		color: [
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
		        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
		],
		title : {
			text : chartOptions['title'],
			subtext : chartOptions['subTitle']
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			orient : 'vertical',
			x : 'right',
			y : 'bottom',
			data : chartOptions['labels']
		// ['label1',label2']
		},
		toolbox : { // toolbox 사용여부
			show : chartOptions['toolbox'],
			feature : {
				mark : {
					show : true
				},
				dataView : {
					show : true,
					readOnly : false
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		polar : [ {
			indicator : chartOptions['indicator']
		} ],
		series : getSeriesOp2(chartOptions, 'radar')
	};
	return option;
};

// chartOptions['title'] = "";
var lineOption = function(chartOptions) {
	var option = {
		color: [
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
		        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
		],
		title : {
			text : chartOptions['title'],
			subtext : chartOptions['subTitle']
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : chartOptions['labels']
		},
		toolbox : getToolbox(chartOptions, 'line'),
		calculable : true,
		xAxis : [ {
			type : 'category',
			boundaryGap : false,
			data : chartOptions['x_column'] 
		} ],
		yAxis : [ {
			type : 'value',
			/*
			axisLabel : {
				formatter : '{value} °C'
			}
			*/
		} ],
		series : getSeriesOp1(chartOptions, 'line')
	};

	return option;
};

var barOption = function(chartOptions) {
	var option = {
		color: [
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
		        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
		],
		title : {
			text : chartOptions['title'],
			subtext : chartOptions['subTitle']
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : chartOptions['labels']
		},
		toolbox : getToolbox(chartOptions, 'bar'),
		grid : {
			zlevel : 0,
			z : 0,
			x : 40,
			y : 40,
			x2 : 30,
			y2 : 30,
			// width: '',
			// height: '',
			backgroundColor : 'rgba(0,0,0,0)',
			borderWidth : 0,
			borderColor : '#fff',
		},

		xAxis : [ {
			type : chartOptions['type'],
			data : chartOptions['x_column'], // [ '1月', '2月', '3月', '4月',
			// '5月', '6月', '7月', '8月', '9月',
			// '10月', '11月', '12月' ]
			axisTick : {
				show : true,
				lineStyle : {
					color : '#cccccc',
					type : 'solid',
					shadowBlur : 0,
					shadowOffsetX : 0,
					shadowOffsetY : 0
				}
			},
			axisLine : {
				show : false
			}
		} ],
		yAxis : [ {
			type : 'value',
			axisLine : {
				show : true,
				lineStyle : {
					color : '#cccccc',
					type : 'solid',
					shadowBlur : 0,
					shadowOffsetX : 0,
					shadowOffsetY : 0
				}
			}
		} ],
		series : getSeriesOp1(chartOptions, 'bar')
	};
	return option;
};

var pieOption = function (chartOptions) {
	var option = {
		color: [
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
		        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
		],
	    title : {
	        text: chartOptions['title'],
	        subtext: chartOptions['subTitle'],
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data: chartOptions['labels'],
	    },
	    toolbox: {
	        show : chartOptions['toolbox'],
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie', 'funnel'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'left',
	                        max: 1548
	                    }
	                }
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : false,
	    series : [
	        {
	            name: chartOptions['title'],
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data: chartOptions['data']
	        }
	    ]
	};
	return option;
};

var scatterOption = function(chartOptions) {
	var option = {
		color: [
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
		        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
		],
	    title : {
	        text: chartOptions['title'],
	        subtext: chartOptions['subTitle'],
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data: chartOptions['labels']
	    },
	    toolbox : getToolbox(chartOptions, 'scatter'),
	    xAxis : [
	        {
	            type : 'value',
	            scale:true
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            scale:true
	        }
	    ],
        series: getSeriesOp1(chartOptions, 'scatter')
	        
	};
	
	return option;

};

function getSeriesOp1(chartOptions, type) {
	var series = [];

	for (var i = 0; i < chartOptions['labels'].length; i++) {
		series.push({
			name : chartOptions['labels'][i],
			type : type,
			data : chartOptions['x_data'][i],
			markPoint : {
				data : [ {
					type : 'max',
					name : '최대치'
				}, {
					type : 'min',
					name : '최소치'
				} ]
			},
			markLine : {
				data : [ {
					type : 'average',
					name : '평균치'
				} ]
			}
		});
	}
	return series;
}

function getSeriesOp2(chartOptions, type) {
	var series = [ {
		name : chartOptions['title'],
		type : type,
		data : chartOptions['data']
	} ];

	return series;
}


function getToolbox(chartOptions, type) {
	var typeArray = ['line', 'bar', 'stack', 'tiled'];
	if (type == 'scatter') {
		typeArray = [];
	} else if (type == 'pie') {
		typeArray = [];
	} else if (type == 'radar') {
		typeArray = [];
	}
	
	
	var magicTypeArray = {
        show : true,
        title: {
            line: '라인차트',
            bar: '막대차트',
            stack: '스택차트',
            tiled: '타일',
            force: 'force',
            chord: 'chord',
            pie: '파이차트',
            radar: '레이더차트',
            funnel: 'funnel'
        },
        type : typeArray
    };
	
	
	
	var toolbox = {
	    show : chartOptions['toolbox'],
	    orient: 'horizontal',      // 레이아웃 선택
	                               // 'horizontal' | 'vertical'
	    x: 'right',                // X값 정렬
	                               // 'center' | 'left' | 'right'
	                               // |
	    y: 'top',                  // Y값 정렬
	                               // 'top' | 'bottom' | 'center'
	                               // | {number}（y값은 픽셀 단위）
	    color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
	    backgroundColor: 'rgba(0,0,0,0)', // 도구상자 배경색
	    borderColor: '#ccc',       // 도구상자 테두리 색
	    borderWidth: 0, 
	    padding: 5,
	    showTitle: true,
	    feature : {
	        mark : {
	            show : false,
	            title : {
	                mark : 'mark',
	                markUndo : 'undo',
	                markClear : 'clear'
	            },
	            lineStyle : {
	                width : 1,
	                color : '#1e90ff',
	                type : 'dashed'
	            }
	        },
	        dataZoom : {
	            show : true,
	            title : {
	                dataZoom : '확대',
	                dataZoomReset : '원래대로'
	            }
	        },
	        dataView : {
	            show : true,
	            title : '데이터 보기',
	            readOnly: true,
	            lang : ['데이터 보기', '접기', '새로고침'],
	        },
	        magicType: magicTypeArray,
	        restore : {
	            show : true,
	            title : 'Refresh',
	            color : 'black'
	        },
	        saveAsImage : {
	            show : true,
	            title : '이미지 저장',
	            type : 'jpeg',
	            lang : ['저장하기'] 
	        },
	    }
    };
	return toolbox;
}

// options : 사용자정의형 차트 옵션
// chartId : div ID
function createEchart(options, chartId) {
	require.config({
        paths: {
            echarts: '/lib/echarts/e-chart'
		}
    });

    /*
    var requires = ['echarts', 'echarts/chart/line', 'echarts/chart/bar',
                'echarts/chart/scatter', 'echarts/chart/k',
                'echarts/chart/pie', 'echarts/chart/radar',
                'echarts/chart/force', 'echarts/chart/chord',
                'echarts/chart/gauge', 'echarts/chart/funnel',
                'echarts/chart/eventRiver', 'echarts/chart/venn',
                'echarts/chart/treemap', 'echarts/chart/tree',
                'echarts/chart/wordCloud', 'echarts/chart/heatmap'];
    */

    var requires = ['echarts', 'echarts/chart/line', 'echarts/chart/bar'];

    require(requires, function (echarts) {
        var cht = echarts.init(document.getElementById(chartId));
        cht.setOption(options);

        cht.on('click', function (params) {
            console.log(params);
        });
	});
}