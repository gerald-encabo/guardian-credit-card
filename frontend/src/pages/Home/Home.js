import React from 'react'
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
        </div>
    )
}

export default Home
