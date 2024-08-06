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
    { markerOffset: -15, name: "Vientiane", coordinates: [102.4955, 19.8563] },
];

const getFillColor = (name: string) => {
    const colors: { [key: string]: string } = {
        "Singapore": "#FF5533",
        "Malaysia": "#00FF00",
        "Philippines": "#ADD8E6",
        "Indonesia": "#FFA500",
        "Cambodia": "#008080",
        "Vietnam": "#FFD700",
        "Thailand": "#FF69B4",
        "Myanmar": "#9370DB",
        "Brunei": "#FF6347",
        "Laos": "#7CFC00",
    };
    return colors[name] || "#D6D6DA"; // Default color if not found
};

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
                                    stroke="black"
                                    style={{
                                        default: { fill: getFillColor(geo.properties.name) },
                                        hover: { fill: "#F53" },
                                        pressed: { fill: "#E42" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates as [number, number]} onClick={() => handleMarkerClick(name)}>
                            <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "black", fontSize: "15px", fontWeight: "900" }}
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
