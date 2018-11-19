import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  add10: () => dispatch({ type: "ADD10" }),
  remove10: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" }),
});

const CounterComponent = ({ count, add, remove, add10, remove10, reset }) => (
  <div>
    <p>{count}</p>
    <button onClick={add}>+1</button>
    <button onClick={remove}>-1</button>
    <button onClick={add10}>+10</button>
    <button onClick={remove10}>-10</button>
    <button onClick={reset}>Reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
