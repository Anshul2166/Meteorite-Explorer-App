import * as ACTIONS from './actionTypes';
const axios = require('axios');

function processData(data){
	let result=[];
	for(let i=0;i<data.length;i++){
		let currentData=[];
		currentData.push(data[i].name);
		currentData.push(data[i].id);
		currentData.push(data[i].nametype);
		currentData.push(data[i].recclass);
		currentData.push(data[i].mass);
		currentData.push(data[i].fall);
		currentData.push(data[i].year);
		currentData.push(data[i].reclat);
		currentData.push(data[i].reclong);
		result.push(currentData);
	}
	return result;
}

export const getData = () => async dispatch => {
	try {
		console.log('User action=localsignup');
		dispatch({
			type:ACTIONS.DATA_LOADING
		});
		const response = await axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json');
		console.log('Done with response');
		console.log(response);
		if (response.status === 200) {
			let data=processData(response.data);
			console.log(data);
			dispatch({
				type: ACTIONS.DATA_SUCCESS,
				payload: data,
			});
		} else {
			dispatch({
				type: ACTIONS.DATA_FAILURE,
				payload: response,
			});
		}
	} catch (err) {}
};
