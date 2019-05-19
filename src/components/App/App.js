import React, { Component } from 'react';
import { SearchBox } from '../SearchBox/searchBox';
import Table from '../Table/table';
import './App.css';
import * as meteoriteActions from '../../actions/meteoriteActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function processApiData(data) {
	for (let i = 0; i < data.length; i++) {
		delete data[i].geolocation;
	}
	return data;
}

class App extends Component {
	state = {
		searchTerm: '',
		allData: [],
		currentData: [],
		titles: ['Name', 'Id', 'Name Type', 'Rec Class', 'Mass(g)', 'Fall', 'Year', 'Latitude', 'Longitude'],
	};
	async componentDidMount() {
		await this.props.meteoriteActions.getData();
		console.log(this.props);
		let data = this.props.data.meteorites;
		this.setState({ currentData: data, allData: data });
	}
	changeSearchTerm = event => {
		let searchTerm = event.target.value;
		this.setState({ searchTerm });
	};
	executeSearch = () => {
		let { allData, searchTerm } = this.state;
		let filteredData = [];
		console.log(searchTerm);
		for (let i = 0; i < allData.length; i++) {
			console.log(allData[i]);
			let data = allData[i][0].toLowerCase();
			if (data.includes(searchTerm.toLowerCase())) {
				filteredData.push(allData[i]);
			}
		}
		this.setState({ currentData: filteredData });
	};
	render() {
		let { searchTerm, currentData, titles } = this.state;
		return (
			<div className="App">
				<SearchBox searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm} executeSearch={this.executeSearch}/>
				<Table data={currentData} titles={titles} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.meteorites,
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
