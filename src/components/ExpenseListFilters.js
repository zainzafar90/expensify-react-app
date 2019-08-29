import React from "react";
import { connect } from "react-redux";

import { setFilterText } from "../actions/filters";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setFilterText(e.target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpenseListFilters);
