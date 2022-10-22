Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Kiwis', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Susan and Scott\'s house'
      }
    },
    series: [{
      name: 'Sarah',
      data: [6, 1, 0, 4]
    }, {
      name: 'Joseph',
      data: [6, 5, 7, 3]
    }]
  });
