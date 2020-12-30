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
      className={` ${
        active ? "bg-blueGray-100" : null
      }  block rounded-md border py-1 px-3 text-sm hover:bg-blueGray-100 focus:outline-none select-none`}
    >
      {children}
    </button>
  );
};

export default FilterLink;
