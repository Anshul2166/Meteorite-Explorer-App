import React from 'react';

export const SearchBox = props => {
	return (
		// <div className="search-box form-group">
		//     <input type="text" class="form-control" onChange={props.changeSearchTerm} value={props.searchTerm} />
		//     <button type="button" class="btn btn-primary" onClick={props.executeSearch}>Search</button>
		// </div>
		<div class="search-box input-group mb-3 col-md-6 offset-md-3">
			<input
				type="text"
				class="form-control"
				placeholder="Search"
				aria-label="Search"
				aria-describedby="button-addon2"
				onChange={props.changeSearchTerm}
				value={props.searchTerm}
			/>
			<div class="input-group-append">
				<button
					class="btn btn-outline-secondary"
					type="button"
					id="button-addon2"
					onClick={props.executeSearch}
				>
					Search
				</button>
			</div>
		</div>
	);
};
