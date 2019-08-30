import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h2>{description}</h2>
    <p>
      {numeral(amount).format("$0,0.00")} -
      {moment(createdAt).format("Do MMM, YYYY")}
    </p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
