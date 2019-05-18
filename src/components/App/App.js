import React, { Component } from 'react';
import { SearchBox } from '../SearchBox/searchBox';
import Table from '../Table/table';
import './App.css';
import meteoriteActions from '../../actions/meteoriteActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function processApiData(data){
	for(let i=0;i<data.length;i++){
		delete data[i].geolocation;
	}
	return data;
}

class App extends Component {
	state = {
		searchTerm: '',
		allData: '',
    currentData: '',
    titles:''
  };
  componentWillMount(){
    let meteoriteData=this.props.meteorites;
    let data=[];
		console.log(meteoriteData);
		meteoriteData=processApiData(meteoriteData);
		console.log(meteoriteData);
    for(let i=0;i<meteoriteData.length;i++){
      let values=Object.values(meteoriteData[i]);
      data.push(values);
    }
    let sampleData=meteoriteData[0];
    let titles=Object.keys(sampleData);
    this.setState({currentData:data,allData:data,titles:titles});
  }
	changeSearchTerm = searchTerm => {
		this.setState({ searchTerm });
  };
	render() {
		let { searchTerm, currentData,titles } = this.state;
		return (
			<div className="App">
				<SearchBox searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm} />
				<Table data={currentData} titles={titles}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		meteorites: state.meteorites
	};
};

const mapActionsToProps = dispatch => {
	return {
		meteoriteActions: bindActionCreators(meteoriteActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(App);
