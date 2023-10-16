import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts= Highcharts;
  chartOptions={}

constructor(){
 this.chartOptions={

  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Average student admission',
    align: 'center'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
credits:{
  enabled:false
    },
accessibility: {
    point: {
        valueSuffix: '%'
    }
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
    }
},
series: [{
    name: 'Courses',
    colorByPoint: true,
    data: [{
        name: 'MEARN STACK',
        y: 30.67,
        sliced: true,
        selected: true
    }, {
        name: 'PYTHON',
        y: 24.77
    },  {
        name: 'BIG DATA',
        y: 14.86
    }, {
        name: '.NET',
        y: 8.63
    }, {
        name: 'SOFTWARE TESTING',
        y: 6.53
    }]
}]

 }



}


}
