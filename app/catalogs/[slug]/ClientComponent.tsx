"use client";

import React from "react";
import TreemapComponent from '@/components/Treemap'
import "react-d3-treemap/dist/react.d3.treemap.css";
import Leaderboard from "@/components/Leaderboard";
import { BarChart } from "@/components/BarChart";

const cityToCountry = {
    "singapore": "Singapore",
    "kuala lumpur": "Malaysia",
    "manila": "Philippines",
    "jakarta": "Indonesia",
    "bandar seri begawan": "Brunei",
    "phnom penh": "Cambodia",
    "hanoi": "Vietnam",
    "bangkok": "Thailand",
    "naypyidaw": "Myanmar",
    "vientiane": "Laos"
};

export interface IData {
    label: string;
    value: number;
}

const BAR_CHART_DATA: IData[] = [
    { label: "Text", value: 100 },
    { label: "Speech", value: 200 },
    { label: "Video", value: 50 },
    { label: "Audio", value: 150 }
];

export default function ClientComponent({ slug }: { slug: string }) {
    return (
        <div className="min-h-svh">
            <section className="container flex flex-col lg:flex-row items-start py-20 md:py-32 gap-10">
                <div className="text-start space-y-6 lg:w-1/2">
                    <main className="text-5xl md:text-6xl font-bold">
                        <h1 className="inline">{cityToCountry[slug.replace(/-/g, ' ') as keyof typeof cityToCountry]}</h1>
                    </main>

                    <p className="text-lg text-muted-foreground">
                        Insert Summary of data sources here<br />
                        <br />
                        Example: Datasets contain rich diversity that come from sources provided from various contributors, public and private.
                    </p>
                </div>
                <div className="bg-gray-50">
                    <div className="w-full">
                        {/* <img src="/seacrowd-catalogue/contributor.jpg" alt="contributor" /> */}
                        <Leaderboard />
                    </div>
                </div>
            </section>
            <section className="container flex flex-col lg:flex-row items-start py-20 md:py-32 gap-10">
                <div className="text-start space-y-6 lg:w-1/2">
                    <BarChart data={BAR_CHART_DATA} />
                </div>
                <div className="bg-gray-50">
                    <div className="w-full relative">
                        {/* <img src="/seacrowd-catalogue/contributor.jpg" alt="contributor" /> */}
                        <TreemapComponent />
                    </div>
                </div>
            </section>
        </div>
    );
}

// export default function Page({ params }: { params: { slug: string } }) {
//     return <div>My Post: {params.slug}</div>
// }

// export async function generateStaticParams() {
//     const cities = Object.keys(cityToCountry);

//     return cities.map((city) => ({
//         slug: city.replace(/\s+/g, '-')
//     }));
// }