import React from 'react';
import Select from 'react-select';
import ReactModal from 'react-modal';
import Griddle from 'griddle-react';
import DovizItem from '../components/DovizItem';
import Input from '../components/Input';
import Helper from '../config/helpers';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options: '',
      doviz: {code:'TRY',full_name:'Türk Lirası',selling:1},
      tutar: 1,
      selectItem:1
    }
  }
  componentDidMount() {
    Helper.getDoviz().then(function(result){
      this.setState({options : result.data})
      var tr ={code:'TRY',full_name:'Türk Lirası',selling:1}
        this.state.options.unshift(tr);
    }.bind(this));
  }
  doviz(val) {
    this.setState({doviz: val})
    this.state.options.map(function(item,index){
      if (val.code == item.code) {
        this.setState({selectItem:item.selling})
      }
    }.bind(this))
  }
  tutar(val) {
    this.setState({tutar: val.target.value})
  }
  render(){
    return(
      <div className="container">
        <div className="col-md-6 col-md-offset-3 top-margin">
          <div className="rows">
            <div className="col-sm-6 all-width">
              <div className="form-group">
                <Input type="number" pattern="\d" label="Tutar" value={this.state.tutar} inputChange={this.tutar.bind(this)}/>
              </div>
            </div>
            <div className="col-sm-6 all-width">
              <div className="form-group">
                <label>Döviz</label>
                {
                  this.state.options.length > 0 ? (
                    <Select name="form-field-name" labelKey="full_name" value="code" options={this.state.options} value={this.state.doviz}  onChange={this.doviz.bind(this)} />
                  ): ''
                }
              </div>
            </div>
          </div>
        </div>
        <table className="table text-align">
          <tbody>
            {
              this.state.options.length > 0 ? (
                this.state.options.map(function(item,index){
                  if(index < 11){
                    return(
                      <DovizItem key={index} full_name={item.full_name} code={item.code} selling={item.selling} selectedItem={this.state.selectItem} tutar={this.state.tutar} />
                    )
                  }
                }.bind(this))
              ): ''
            }
          </tbody>
        </table>
      </div>
    )
  }
}
