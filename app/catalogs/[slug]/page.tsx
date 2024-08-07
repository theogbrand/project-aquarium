import React from "react";
import Treemap from '@/components/Treemap'
import "react-d3-treemap/dist/react.d3.treemap.css";


export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-svh">
            <section className="container grid lg:grid-cols-2 place-items-start py-20 md:py-32 gap-10">
                <div className="text-start space-y-6">
                    <main className="text-5xl md:text-6xl font-bold">
                        <h1 className="inline">{params.slug}</h1>
                    </main>

                    <p className="text-lg text-muted-foreground">
                        Insert Summary of data sources here<br />
                        <br />
                        Example: Datasets contain rich diversity that come from sources provided from various contributors, public and private.
                    </p>
                </div>
                <div className="bg-gray-50">
                    <div className="w-full relative">
                        {/* <img src="/seacrowd-catalogue/contributor.jpg" alt="contributor" /> */}
                        <Treemap />
                    </div>
                </div>
            </section>
        </div>
    );
}

// export default function Page({ params }: { params: { slug: string } }) {
//     return <div>My Post: {params.slug}</div>
// }

export async function generateStaticParams() {

    const countries = [
        {
            markerOffset: -15,
            name: "Singapore",
            coordinates: [103.8198, 1.3521]
        },
        { markerOffset: -15, name: "Kuala-Lumpur", coordinates: [101.6869, 3.1390] },
        { markerOffset: 25, name: "Manila", coordinates: [120.9842, 14.5995] },
        { markerOffset: 25, name: "Jakarta", coordinates: [106.8456, -6.2088] },
        { markerOffset: 25, name: "Bandar-Seri-Begawan", coordinates: [114.9424, 4.9031] },
        { markerOffset: 25, name: "Phnom-Penh", coordinates: [104.9282, 11.5564] },
        { markerOffset: -15, name: "Hanoi", coordinates: [105.8342, 21.0285] },
        { markerOffset: -15, name: "Bangkok", coordinates: [100.5018, 13.7563] },
        { markerOffset: 25, name: "Naypyidaw", coordinates: [96.1292, 19.7633] },
        { markerOffset: -15, name: "Vientiane", coordinates: [102.4955, 19.8563] },
    ];
    return countries.map((country) => ({
        slug: country.name.toLowerCase(),
    }))
}