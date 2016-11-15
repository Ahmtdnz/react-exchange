import React from 'react';
import { Line } from 'react-chartjs'
import Helper from '../config/helpers';

export default class Parite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:'',
      chartData: {
        labels: [],
        datasets: [
          {
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'red',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: []
          }
        ]
      },
      selling:[],
      time : []
    }
  }
  componentDidMount() {
    Helper.getChange('USD').then(function(result){
      this.setState({data:result.data})
      this.chart();

    }.bind(this));
  }
  chart(){
    setInterval(function () {
      this.setState({selling:[],time:[]})
      this.state.data.map(function(item,index){
        if (index < 12) {
          this.state.selling.push(item.selling)
          this.state.time.push(item.update_date)
        }
      }.bind(this))
      var chardData = {
        labels: this.state.selling,
        datasets: [
          {
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'red',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: this.state.selling
          }
        ]
      }
      this.setState({chartData:chardData})
    }.bind(this), 1000);
  }
  render(){
    return(
      <div className="container">
        <h1>Parite</h1>
        <Line data={this.state.chartData} width={846} height={170} />
      </div>
    )
  }
}
