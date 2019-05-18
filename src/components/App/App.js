import React, { Component } from 'react';
import { SearchBox } from '../SearchBox/searchBox';
import Table from "../Table/table";
import './App.css';

class App extends Component {
	state = {
		searchTerm: '',
		allData: '',
		currentData: '',
  };
  changeSearchTerm=(searchTerm)=>{
    this.setState({searchTerm});
  }
	render() {
		let { searchTerm, currentData } = this.state;
		return (
			<div className="App">
				<SearchBox searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
				<Table data={currentData}/>
			</div>
		);
	}
}

export default App;
