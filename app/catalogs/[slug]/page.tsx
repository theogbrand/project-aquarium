import React from "react";
import Treemap from '@/components/Treemap'
import "react-d3-treemap/dist/react.d3.treemap.css";

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

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-svh">
            <section className="container grid lg:grid-cols-2 place-items-start py-20 md:py-32 gap-10">
                <div className="text-start space-y-6">
                    <main className="text-5xl md:text-6xl font-bold">
                        <h1 className="inline">{cityToCountry[params.slug.replace(/-/g, ' ') as keyof typeof cityToCountry]}</h1>
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
    const cities = Object.keys(cityToCountry);

    return cities.map((city) => ({
        slug: city.replace(/\s+/g, '-')
    }));
}