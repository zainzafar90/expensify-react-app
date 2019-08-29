import React, { Component } from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

import {
  setFilterText,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate
} from "../actions/filters";

export class ExpenseListFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setFilterText(e.target.value));
          }}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          startDateId="start-date"
          endDateId="end-date"
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={calendarFocused => this.setState({ calendarFocused })} // PropTypes.func.isRequired,
          initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpenseListFilters);
