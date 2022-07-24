import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img src="parasite-house.jpg" 
                rating={5.0}
                reviewCount={6}
                country="South Korea"
                title="Multi-use House"
                price={136}
            />
        </div>
    )
}