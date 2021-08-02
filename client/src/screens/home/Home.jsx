import React, { useState } from 'react'
import Layout from '../../components/Layout'

export default function HomeScreen(props) {
    const [ threads, setTheards ] = useState({})

    return (
        <Layout>
            <div>
                <h1>Trending Now</h1>
                <div className = "together">
                    <div className = "first">
                        <div className = "move">
                        <h3>The Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h3>
                        </div>
                    </div>
                    <div className = "second">
                        <h3>Happy Spider-Man day</h3>
                    </div>
                    <div className = "third">
                        <h3>Activision hit with another lawsuit as female employees are in a frenzy.</h3>
                    </div>
                    <div className = "fourth">
                        <h3>EA play show Dead Space. Could this be EA's big comeback</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
