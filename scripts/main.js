Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Unemployment Rates in 2021 for people over the age of 25'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Men', 'Women'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'White',
        data: [4.2, 4.1]
    }, {
        name: 'Asian',
        data: [4.5, 4.7]
    }, {
        name: 'Latinx/Hispanic',
        data: [5.6, 6.4]
    }, {
        name: 'Black',
        data: [8.3, 7.0]
    }]
});
















Highcharts.chart('container2', {
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
            name: 'Manufacturing',
            value: 3.2,
            colorValue: 1
        }, {
            name: 'Retail',
            value: 5.7,
            colorValue: 2
        }, {
            name: 'Financial',
            value: 2.5,
            colorValue: 3
        }, {
            name: 'Education',
            value: 3.3,
            colorValue: 4
        }, {
            name: 'Hospitality',
            value: 7.7,
            colorValue: 5
        }, {
            name: 'Transportation',
            value: 5.4,
            colorValue: 6
        }, {
            name: 'Business services',
            value: 4.4,
            colorValue: 7
        }]
    }],
    title: {
        text: 'Unemployment rates by industry in September 2021'
    }
});
