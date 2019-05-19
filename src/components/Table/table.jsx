import React, { Component } from 'react';

function TableData(props) {
	const data = props.data;
	const listItems = data.map((row, index) => {
		return (
			<tr key={index}>
				{row.map((info, index) => (
					<td key={index}>{info}</td>
				))}
			</tr>
		);
	});
	return listItems;
}

class Table extends Component {
	render() {
		let { titles, data } = this.props;
		console.log(titles);
		console.log(data);
		if(data.length===0){
			return null;
		}
		const TableTitles = titles.map((title, index) => <th key={index}>{title}</th>);
		return (
			<div className="meteorite-table">
				<table className="table table-bordered table-striped table-hover">
					<thead><tr>{TableTitles}</tr></thead>
					<tbody><TableData data={data} /></tbody>
				</table>
			</div>
		);
	}
}

export default Table;
