import React from "react";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import { data } from "../lib/data";

console.log(data);
export default function App() {
  return (
    <div className="App">
      <TreeMap
        height={500}
        width={800}
        data={data}
        valueUnit={"rows"}
      />
    </div>
  );
}
