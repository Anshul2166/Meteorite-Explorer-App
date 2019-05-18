import React, { Component } from 'react';
import { SearchBox } from '../SearchBox/searchBox';
import Table from '../Table/table';
import './App.css';
import meteoriteActions from '../../actions/meteoriteActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {
	state = {
		searchTerm: '',
		allData: '',
		currentData: '',
	};
	changeSearchTerm = searchTerm => {
		this.setState({ searchTerm });
  };
	render() {
    console.log(this.props);
		let { searchTerm, currentData } = this.state;
		return (
			<div className="App">
				<SearchBox searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm} />
				<Table data={currentData} />
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
