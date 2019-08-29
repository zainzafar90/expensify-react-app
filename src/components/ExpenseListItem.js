import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h2>{description}</h2>
    <p>
      {amount} - {moment(createdAt).format("Do MMM, YYYY")}
    </p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
