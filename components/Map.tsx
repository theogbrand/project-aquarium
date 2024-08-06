"use client";

import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { Tooltip } from "react-tooltip";
import features from "@/lib/features.json";

export const RegionMap = () => {
    return (

        <div>
            <ComposableMap>
                <ZoomableGroup zoom={1}>
                    <Geographies geography={features}>
                        {({ geographies }) =>
                            geographies.map((geo: any) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={geo.properties.name}
                                    style={{
                                        default: { fill: "#D6D6DA" },
                                        hover: { fill: "#F53" },
                                        pressed: { fill: "#E42" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <Tooltip id="my-tooltip" />
        </div>

    );
}
