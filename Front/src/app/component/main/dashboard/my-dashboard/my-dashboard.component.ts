import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 },
  ];
  nationalChart = [];
  sexChart = [];
  employeesEachYearChart = [];
  employeesEachProjectChart = [];
  numberOfKidsChart = [];
  kidsexChart = [];
  educationChart = [];
  vaccineChart = [];
  data: any;


ngOnInit(): void {
  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // Add 'implements OnInit' to the class.
  
  this.data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  };

  const colors = [
    '#1f77b4', '#e377c2', '#ff7f0e', '#2ca02c', '#bcbd22', '#d62728',
    '#17becf', '#9467bd', '#7f7f7f', '#8c564b', '#3366cc'
  ];
  this.callAllChart();
}

nationalChartMethod(): void {
  this.nationalChart = new Chart('national', {
    type: 'pie',
    data: this.data,
  });
    
}
sexChartMethod(): void {
  this.sexChart = new Chart('sex', {
    type: 'pie',
    data: this.data,
  });
    
}
employeesEachYearChartMethod(): void {
  this.employeesEachYearChart = new Chart('eachyear', {
    type: 'line',
    data: this.data,
  });
}
employeesEachProjectChartMethod(): void {
  this.employeesEachProjectChart = new Chart('eachproject', {
    type: 'pie',
    data: this.data,
  });
}
numberOfKidsChartMethod(): void {
  this.numberOfKidsChart = new Chart('kids', {
    type: 'line',
    data: this.data,
  });
}
kidsexChartMethod(): void {
  this.kidsexChart = new Chart('kidsex', {
    type: 'pie',
    data: this.data,
  });
}
educationChartMethod(): void {
  this.educationChart = new Chart('education', {
    type: 'pie',
    data: this.data,
  });
}
vaccineChartMethod(): void {
  this.vaccineChart = new Chart('vaccine', {
    type: 'pie',
    data: this.data,
  });
}

callAllChart(): void{
  this.nationalChartMethod();
  this.sexChartMethod();
  this.employeesEachYearChartMethod();
  this.employeesEachProjectChartMethod();
  this.numberOfKidsChartMethod();
  this.kidsexChartMethod();
  this.educationChartMethod();
  this.vaccineChartMethod();

}

}
