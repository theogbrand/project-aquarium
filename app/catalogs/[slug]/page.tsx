// import ClientComponent from './ClientComponent'

import dynamic from 'next/dynamic'

const ClientComponent = dynamic(() => import('./ClientComponent'), {
    ssr: false,
})

export function generateStaticParams() {
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

    const cities = Object.keys(cityToCountry);

    return cities.map((city) => ({
        slug: city.replace(/\s+/g, '-')
    }));
}

export default function Page({ params }: { params: { slug: string } }) {
    return <ClientComponent slug={params.slug} />
}