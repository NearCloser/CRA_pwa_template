import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "./filterSlice";

const FilterLink = ({ filter, children }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => filter === state.visibilityFilter);

  return (
    <button
      onClick={() => dispatch(setVisibilityFilter(filter))}
      disabled={active}
    >
      {children}
    </button>
  );
};

export default FilterLink;
