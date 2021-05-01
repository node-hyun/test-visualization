/*
    inflarn 시각화 강좌 옵션 목록
var options = {
   series: {
       lines, points, bars: {
       show: boolean
       lineWidth: number
       fill: boolean or number
       fillColor: null or color/gradient
   }
   lines, bars: {
           zero: boolean
       }
       points: {
           radius: number
           symbol: "circle" or function
       }
       bars: {
           barWidth: number
           align: "left", "right" or "center"
           horizontal: boolean
       }
       lines: {
           steps: boolean
       }
       shadowSize: number
       highlightColor: color or number
}// Series Option
colors: [ color1, color2, ... ]
legend: {
       show: boolean
       labelFormatter: null or (fn: string, series object -> string)
       labelBoxBorderColor: color
       noColumns: number
       position: "ne" or "nw" or "se" or "sw"
       margin: number of pixels or [x margin, y margin]
       backgroundColor: null or color
       backgroundOpacity: number between 0 and 1
       container: null or jQuery object/DOM element/jQuery expression
       sorted: null/false, true, "ascending", "descending", "reverse", or a comparator
   },
xaxis, yaxis: {
     show: null or true/false
     position: "bottom" or "top" or "left" or "right"
     mode: null or "time" ("time" requires jquery.flot.time.js plugin)
     timezone: null, "browser" or timezone (only makes sense for mode: "time")

     color: null or color spec
     tickColor: null or color spec
     font: null or font spec object

     min: null or number
     max: null or number
     autoscaleMargin: null or number

     transform: null or fn: number -> number
     inverseTransform: null or fn: number -> number

     ticks: null or number or ticks array or (fn: axis -> ticks array)
     tickSize: number or array
     minTickSize: number or array
     tickFormatter: (fn: number, object -> string) or string
     tickDecimals: null or number

     labelWidth: null or number
     labelHeight: null or number
     reserveSpace: null or true
     tickLength: null or number
     alignTicksWithAxis: null or number
  }
   grid: {
       show: boolean
       aboveData: boolean
       color: color
       backgroundColor: color/gradient or null
       margin: number or margin object
       labelMargin: number
       axisMargin: number
       markings: array of markings or (fn: axes -> array of markings)
       borderWidth: number or object with "top", "right", "bottom" and "left" properties with different widths
       borderColor: color or null or object with "top", "right", "bottom" and "left" properties with different colors
       minBorderMargin: number or null
       clickable: boolean
       hoverable: boolean
       autoHighlight: boolean
       mouseActiveRadius: number
   }
   interaction: {
       redrawOverlayInterval: number or -1
   }
   margin: {
      top: top margin in pixels
       left: left margin in pixels
       bottom: bottom margin in pixels
       right: right margin in pixels
   }
   markings: [ { xaxis: { from: 0, to: 2 }, yaxis: { from: 10, to: 10 }, color: "#bb0000" }, ... ]
   hooks: {
       processOptions: function(plot, options)
       processRawData: function(plot, series, data, datapoints)
       processOffset: function(plot, offset)
       drawBackground: function(plot, canvasContext)
       drawSeries: function(plot, canvascontext, series)
       draw: function(plot, canvascontext)
       bindEvents: function(plot, eventHolder)
       drawOverlay: function(plot, canvascontext)
       shutdown function(plot, eventHolder)
   };
};
*/