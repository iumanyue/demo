(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function (exports, echarts) {
  var log = function (msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  };

  // 一些变量设置
  var fontSize = 14; //文字大小,label
  var colorText = "#666"; //标签等文字颜色
  var colorLine = "#DDD"; //轴线，刻度等线条颜色
  var colorSplitLine = ['#eeeeee']; //分割线颜色
  var colorSplitType = "dashed"; //分割线类型
  var colorSplitArea = ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"]; //分隔区域颜色

  //直角坐标系Grid
  var leftGrid = 20; //距离左侧距离
  var rightGrid = 20; //距离右侧距离
  var topGrid = 50; //距离顶部距离
  var bottomGrid = 20; //距离底部距离
  var containLabel = true; //grid区域是否包含坐标轴的刻度标签

  //标题
  var colorTitle = "#333"; //主标题颜色
  var colorSubTitle = "#999"; //子标题颜色
  var leftTitle = 15; //标题距离左侧距离，标题自带5px内留白
  var topTitle = 5; //标题距离顶部距离，标题自带5px内留白

  //图例
  var colorLegend = colorText; //图例文字颜色
  var leftLegend = "auto"; //图例离容器左侧的距离
  var rightLegend = 15; //图例离容器右侧的距离
  var topLegend = 10; //图例离容器顶部的距离
  var itemGapLegend = 20; //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
  var itemWidthLegend = 16; //图例标记的图形宽度。 
  var itemHeightLegend = 10; //图例标记的图形高度。
  var fontSizeLegend = fontSize; //图例字号

  //轴线-类目轴
  var showAxisLineLine = true; //是否显示轴线
  var colorAxisLineLine = colorLine; //轴线颜色
  var showAxisLineLable = true; //是否显示标签
  var colorAxisLineLable = colorText; //标签颜色
  var fontSizeAxisLineLable = fontSize; //标签文字字号
  var showAxisLineTick = true; //是否显示刻度
  var colorAxisLineTick = colorLine; //刻度颜色
  var showAxisLineSplitLine = false; //是否显示分割线
  var colorAxisLineSplitLine = colorSplitLine; //分割线颜色
  var colorAxisLineSplitLineType = colorSplitType; //分割线类型
  var showAxisLineSplitArea = false; //是否显示分割区域
  var colorAxisLineSplitArea = colorSplitArea; //分割区域颜色
  //轴线-数值轴
  var showValueLineLine = true; //是否显示轴线
  var colorValueLineLine = colorLine; //轴线颜色
  var showValueLineLable = true; //是否显示标签
  var colorValueLineLable = colorText; //标签颜色
  var fontSizeValueLineLable = fontSize; //标签文字字号
  var showValueLineTick = true; //是否显示刻度
  var colorValueLineTick = colorLine; //刻度颜色
  var showValueLineSplitLine = true; //是否显示分割线
  var colorValueLineSplitLine = colorSplitLine; //分割线颜色
  var colorValueLineSplitLineType = colorSplitType; //分割线类型
  var showValueLineSplitArea = false; //是否显示分割区域
  var colorValueLineSplitArea = colorSplitArea; //分割区域颜色

  // color
  var color = [
    "#5470c6",
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ba272",
    "#fc8452",
    "#9a60b4",
    "#ea7ccc"
  ]; //颜色
  
  var backgroundColor = "rgba(255,255,255,1)"; //背景色



  echarts.registerTheme('skinUpp', {
    "color": color,
    "backgroundColor": backgroundColor,
    "textStyle": {
      "fontSize": fontSize
    },
    // 直角坐标系Grid
    "grid": {
      "left": leftGrid,
      "right": rightGrid,
      "bottom": bottomGrid,
      "top": topGrid,
      "containLabel": containLabel,
    },
    // 标题组件，包含主标题和副标题。
    "title": {
      "textStyle": {
        "color": colorTitle,
      },
      "subtextStyle": {
        "color": colorSubTitle,
      },
      "left": leftTitle,
      "top": topTitle,
    },
    "line": {
      "itemStyle": {
        "borderWidth": 1
      },
      "lineStyle": {
        "width": 2
      },
      "symbolSize": 4,
      "symbol": "emptyCircle",
      "smooth": false
    },
    "radar": {
      "itemStyle": {
        "borderWidth": 1
      },
      "lineStyle": {
        "width": 2
      },
      "symbolSize": 4,
      "symbol": "emptyCircle",
      "smooth": false
    },
    // 柱状图
    "bar": {
      "itemStyle": {
        "barBorderWidth": 0,
        "barBorderColor": "#ccc"
      }
    },
    "pie": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "scatter": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "boxplot": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "parallel": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "sankey": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "funnel": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "gauge": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    },
    "candlestick": {
      "itemStyle": {
        "color": "#eb5454",
        "color0": "#47b262",
        "borderColor": "#eb5454",
        "borderColor0": "#47b262",
        "borderWidth": 1
      }
    },
    "graph": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      },
      "lineStyle": {
        "width": 1,
        "color": "#aaa"
      },
      "symbolSize": 4,
      "symbol": "emptyCircle",
      "smooth": false,
      "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
      ],
      "label": {
        "color": "#eee"
      }
    },
    "map": {
      "itemStyle": {
        "areaColor": "#eee",
        "borderColor": "#444",
        "borderWidth": 0.5
      },
      "label": {
        "color": "#000"
      },
      "emphasis": {
        "itemStyle": {
          "areaColor": "rgba(255,215,0,0.8)",
          "borderColor": "#444",
          "borderWidth": 1
        },
        "label": {
          "color": "rgb(100,0,0)"
        }
      }
    },
    "geo": {
      "itemStyle": {
        "areaColor": "#eee",
        "borderColor": "#444",
        "borderWidth": 0.5
      },
      "label": {
        "color": "#000"
      },
      "emphasis": {
        "itemStyle": {
          "areaColor": "rgba(255,215,0,0.8)",
          "borderColor": "#444",
          "borderWidth": 1
        },
        "label": {
          "color": "rgb(100,0,0)"
        }
      }
    },
    // 类目轴
    "categoryAxis": {
      //轴线
      "axisLine": {
        "show": showAxisLineLine,
        "lineStyle": {
          "color": colorAxisLineLine,
        }
      },
      //刻度
      "axisTick": {
        "show": showAxisLineTick,
        "lineStyle": {
          "color": colorAxisLineTick,
        }
      },
      //标签
      "axisLabel": {
        "show": showAxisLineLable,
        "color": colorAxisLineLable,
        "fontSize": fontSizeAxisLineLable,
      },
      //分割线
      "splitLine": {
        "show": showAxisLineSplitLine,
        "lineStyle": {
          "color": colorAxisLineSplitLine,
          "type": colorAxisLineSplitLineType,
        }
      },
      //分割区域
      "splitArea": {
        "show": showAxisLineSplitArea,
        "areaStyle": {
          "color": colorAxisLineSplitArea,
        }
      }
    },
    //数值轴
    "valueAxis": {
      //轴线
      "axisLine": {
        "show": showValueLineLine,
        "lineStyle": {
          "color": colorValueLineLine,
        }
      },
      //刻度
      "axisTick": {
        "show": showValueLineTick,
        "lineStyle": {
          "color": colorValueLineTick,
        }
      },
      //标签
      "axisLabel": {
        "show": showValueLineLable,
        "color": colorValueLineLable,
        "fontSize": fontSizeValueLineLable,
      },
      //分割线
      "splitLine": {
        "show": showValueLineSplitLine,
        "lineStyle": {
          "color": colorValueLineSplitLine,
          "type": colorValueLineSplitLineType,
        }
      },
      //分割区域
      "splitArea": {
        "show": showValueLineSplitArea,
        "areaStyle": {
          "color": colorValueLineSplitArea,
        }
      }
    },
    "logAxis": {
      "axisLine": {
        "show": false,
        "lineStyle": {
          "color": "#6E7079"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#6E7079"
        }
      },
      "axisLabel": {
        "show": true,
        "color": "#6E7079"
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#E0E6F1"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.2)",
            "rgba(210,219,238,0.2)"
          ]
        }
      }
    },
    "timeAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#6E7079"
        }
      },
      "axisTick": {
        "show": true,
        "lineStyle": {
          "color": "#6E7079"
        }
      },
      "axisLabel": {
        "show": true,
        "color": "#6E7079"
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#E0E6F1"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.2)",
            "rgba(210,219,238,0.2)"
          ]
        }
      }
    },
    "toolbox": {
      "iconStyle": {
        "borderColor": "#999"
      },
      "emphasis": {
        "iconStyle": {
          "borderColor": "#666"
        }
      }
    },
    //图例
    "legend": {
      //靠右侧，默认存在5px留白
      "left": leftLegend,
      "right": rightLegend,
      "top": topLegend,
      "itemGap": itemGapLegend,
      "itemWidth": itemWidthLegend,
      "itemHeight": itemHeightLegend,
      //文字样式
      "textStyle": {
        "color": colorLegend,
        "fontSize": fontSizeLegend,
      },
    },
    "tooltip": {
      "axisPointer": {
        "lineStyle": {
          "color": "#ccc",
          "width": 1
        },
        "crossStyle": {
          "color": "#ccc",
          "width": 1
        }
      }
    },
    "timeline": {
      "lineStyle": {
        "color": "#DAE1F5",
        "width": 2
      },
      "itemStyle": {
        "color": "#A4B1D7",
        "borderWidth": 1
      },
      "controlStyle": {
        "color": "#A4B1D7",
        "borderColor": "#A4B1D7",
        "borderWidth": 1
      },
      "checkpointStyle": {
        "color": "#316bf3",
        "borderColor": "fff"
      },
      "label": {
        "color": "#A4B1D7"
      },
      "emphasis": {
        "itemStyle": {
          "color": "#FFF"
        },
        "controlStyle": {
          "color": "#A4B1D7",
          "borderColor": "#A4B1D7",
          "borderWidth": 1
        },
        "label": {
          "color": "#A4B1D7"
        }
      }
    },
    "visualMap": {
      "color": [
        "#bf444c",
        "#d88273",
        "#f6efa6"
      ]
    },
    "dataZoom": {
      "handleSize": "undefined%",
      "textStyle": {}
    },
    "markPoint": {
      "label": {
        "color": "#eee"
      },
      "emphasis": {
        "label": {
          "color": "#eee"
        }
      }
    }
  });
}));
