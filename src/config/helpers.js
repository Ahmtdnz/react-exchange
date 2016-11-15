import axios from 'axios';

var API = 'http://www.doviz.com/api/v1/currencies/all/latest'


var helpers = {
  getDoviz(){
	return axios({
	  method: 'get',
	  url: `${API}`,
		headers: {
        'Content-Type':'application/json'
  		}
  	})
  },
  getChange(doviz){
	return axios({
	  method: 'get',
	  url: `http://grafik.doviz.com/api/v1/currencies/${doviz}/daily`,
		headers: {
        'Content-Type':'application/json'
  		}
  	})
  }
}

export default helpers;
