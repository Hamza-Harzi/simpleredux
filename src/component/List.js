import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function List() {
  const table = useSelector((state) => state);
  console.log("table", table);
  return (
    <div>
      {table.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}

export default List;
