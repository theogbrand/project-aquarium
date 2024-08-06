export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}

export async function generateStaticParams() {

    const countries = [
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
    return countries.map((country) => ({
        slug: country.name,
    }))
}