'use client'

import React from "react";
// import TreeMap from "react-d3-treemap";
// import "react-d3-treemap/dist/react.d3.treemap.css";
import { data } from "../lib/treeMapData";
import dynamic from "next/dynamic";
import { NumberOfChildrenPlacement } from "react-d3-treemap";

// Dynamically import TreeMap with ssr: false
// const TreeMap = dynamic(() => import("react-d3-treemap"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>
// });

const TreemapComponent = dynamic(
  () => import('react-d3-treemap').then((mod) => mod.default),
  { ssr: false }
)

// interface TreeMapInPutData {
//   name: string;
//   value?: number;
//   children?: Array<TreeMapInPutData>;
//   className?: string;
// }

export default function Page() {
  return (
    <>
      {/* <TreeMapCSS /> */}
      <TreemapComponent
        id="myTreeMap"
        numberOfChildrenPlacement={NumberOfChildrenPlacement.TopRight}
        height={500}
        width={800}
        data={data}
        valueUnit={"rows"}
      />
    </>
  );
}