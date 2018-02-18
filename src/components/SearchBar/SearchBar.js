import React from 'react';
import '/SearchBar.css';

const sortByOptions = {
  //keys come from the Yelp open source
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewd': 'review_count'
};

class SearchBar extentds React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li {key=sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return(
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()};
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
  //getting an error with the '.  Trying the HTML code for it.
    <a>Let&#39;s Go</a>
  </div>
</div>
);
  }
}

export default SearchBar;
