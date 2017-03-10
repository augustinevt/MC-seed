import React from 'react';
import Chart from 'chart.js'

class ChartJSDefault extends React.Component {

  componentDidMount() {
      let ctx = document.getElementById("myChart");
      let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

  render(){
    return (
      <div>
        <h2>Hello, this is the ChartJSDefault Component</h2>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }

}

export default ChartJSDefault;

// var config = {
//   type: 'line',
//   data: {
//     datasets: [{
//       label: "Dataset with string point data",
//       backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
//       borderColor: window.chartColors.red,
//       fill: false,
//       data: [{
//         x: newDateString(0),
//         y: randomScalingFactor()
//       }, {
//         x: newDateString(2),
//         y: randomScalingFactor()
//       }, {
//         x: newDateString(4),
//         y: randomScalingFactor()
//       }, {
//         x: newDateString(5),
//         y: randomScalingFactor()
//       }],
//     }, {
//       label: "Dataset with date object point data",
//       backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
//       borderColor: window.chartColors.blue,
//       fill: false,
//       data: [{
//         x: newDate(0),
//         y: randomScalingFactor()
//       }, {
//         x: newDate(2),
//         y: randomScalingFactor()
//       }, {
//         x: newDate(4),
//         y: randomScalingFactor()
//       }, {
//         x: newDate(5),
//         y: randomScalingFactor()
//       }]
//     }]
//   },
//   options: {
//     responsive: true,
//             title:{
//                 display:true,
//                 text:"Chart.js Time Point Data"
//             },
//     scales: {
//       xAxes: [{
//         type: "time",
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'Date'
//         }
//       }],
//       yAxes: [{
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'value'
//         }
//       }]
//     }
//   }
// };
