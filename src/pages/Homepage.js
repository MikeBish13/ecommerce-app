import React from 'react'
import Header from '../components/Header'
import StaticDetails from '../components/StaticDetails'
import CardLinks from '../components/CardLinks'
import HomePageHero from '../components/HomePageHero'
import HomePageFeature1 from '../components/HomePageFeature1'
import HomePageFeature2 from '../components/HomePageFeature2'
import HomePageFeature3 from '../components/HomePageFeature3'

export default function Homepage() {
    return (
        <div>
            <Header page={"home"} />
            <HomePageHero />
            <CardLinks position={"homepage"}/>
            <HomePageFeature1 />
            <HomePageFeature2 />
            <HomePageFeature3 />
            <StaticDetails />
        </div>
    )
}
