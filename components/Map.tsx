"use client";

import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import { Tooltip } from "react-tooltip";
import features from "@/lib/features.json";

const markers = [
    {
        markerOffset: -15,
        name: "Singapore",
        coordinates: [103.8198, 1.3521]
    },
    { markerOffset: -15, name: "Kuala Lumpur", coordinates: [101.6869, 3.1390] },
    { markerOffset: 25, name: "Manila", coordinates: [120.9842, 14.5995] },
    { markerOffset: 25, name: "Jakarta", coordinates: [106.8456, -6.2088] },
    { markerOffset: 25, name: "Bandar Seri Begawan", coordinates: [114.9424, 4.9031] },
    { markerOffset: 25, name: "Phnom Penh", coordinates: [104.9282, 11.5564] },
    { markerOffset: -15, name: "Hanoi", coordinates: [105.8342, 21.0285] },
    { markerOffset: -15, name: "Bangkok", coordinates: [100.5018, 13.7563] },
    { markerOffset: 25, name: "Naypyidaw", coordinates: [96.1292, 19.7633] },
];

export const RegionMap = () => {
    const handleMarkerClick = (id: string) => {
        console.log(`Marker ${id} clicked`);
        // Add your custom logic here
    };

    return (

        <div>
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [-110, -15, 0],
                    scale: 700
                }}>
                <ZoomableGroup zoom={1}>
                    <Geographies geography={features}>
                        {({ geographies }) =>
                            geographies.map((geo: any) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={geo.properties.name}
                                    fill="#FF5533"
                                    stroke="#000000"
                                    style={{
                                        default: { fill: "#D6D6DA" },
                                        hover: { fill: "#F53" },
                                        pressed: { fill: "#E42" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates as [number, number]} onClick={() => handleMarkerClick(name)}>
                            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
            <Tooltip id="my-tooltip" />
        </div>

    );
}
