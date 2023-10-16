import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts= Highcharts;
  chartOptions={}

constructor(){
  this.chartOptions={

    chart: {
      type: 'area'
  },
  title: {
      text: 'Yearly placement evaluation 2022-2023',
      align: 'center'
  },
  subtitle: {
      text: 'Luminar Technolab',
      align: 'center'
  },
  xAxis:{

categories:[
  'jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'
]



  },
  yAxis: {
      title: {
          useHTML: true,
          text: 'Number of placements'
      }
  },
  credits:{
enabled:false
  },
  tooltip: {
      shared: true,
      headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
  },
  
  series: [{
      name: 'MEARN STACK',
      data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214,12543,12346,14325]
  }, {
      name: 'PYTHON FULL STACK',
      data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,6548,5673,6432]

  }, {
      name: 'SOFTWARE TESTING',
      data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,5464,4576,5632]
  }, {
      name: '.NET FULL STACK',
      data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,4532,3452,3421]

  }, {
      name: 'BIG DATA',
      data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,5436,2345,3456]
  },
  ]

  }

  HC_exporting(Highcharts);
}

}
