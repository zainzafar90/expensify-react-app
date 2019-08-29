import React, { Component } from "react";

const EditExpensePage = (props) => {
  return <div>Editing item: {props.match.params.id}</div>;
};

export default EditExpensePage;
