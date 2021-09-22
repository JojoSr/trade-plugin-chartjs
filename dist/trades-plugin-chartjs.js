(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chart.js'), require('chart.js/helpers')) :
        typeof define === 'function' && define.amd ? define(['chart.js', 'chart.js/helpers'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['chartjs-plugin-annotation'] = factory(global.Chart, global.Chart.helpers));
}(this, (function (chart_js, helpers) {
    'use strict';

    var tradePlugin = {
        id: 'tradePlugin',
        beforeInit: chart => { },
        afterInit: chart => { },

        beforeUpdate: chart => { },
        beforeLayout: chart => { },
        afterLayout: chart => { },
        beforeDatasetsUpdate: chart => { },
        beforeDatasetUpdate: (chart, { index, meta }) => { },
        afterDatasetUpdate: (chart, { index, meta }) => { },
        afterDatasetsUpdate: chart => { },
        afterUpdate: chart => { },

        beforeRender: chart => { },
        afterRender: chart => { },

        beforeDraw: (chart, easingValue) => { },
        afterDraw: (chart, easingValue) => { },

        beforeDatasetsDraw: (chart, easingValue) => { },
        beforeDatasetDraw: (chart, { index, meta, easingValue }) => { },
        afterDatasetDraw: (chart, { index, meta, easingValue }) => { },
        afterDatasetsDraw: (chart, easingValue) => { 
            console.log(chart.ctx);
        },

        beforeEvent: (chart, { chart, native, type, x, y }) => { },
        afterEvent: (chart, { chart, native, type, x, y }) => { },

        resize: (chart, newChartSize) => { },

        destroy: chart => { }
    };

    chart_js.Chart.register(tradePlugin);

    return tradePlugin;

})));