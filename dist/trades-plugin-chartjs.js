import Chart from "chart.js";

const tradePlugin = {
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
    afterDatasetsDraw: (chart, easingValue) => { },

    beforeEvent: (chart, { chart, native, type, x, y }) => { },
    afterEvent: (chart, { chart, native, type, x, y }) => { },

    resize: (chart, newChartSize) => { },

    destroy: chart => { }
};

// Register plugin to enable it in Chart.js
Chart.pluginService.register(customPlugin);