import React from 'react'
import Grid from "../grid/Grid"
import Hotitems from "../Hotitems/Hotitems"
import "./Home.css"
function Home() {
    return (
        <div className="homestyle">
            <Grid/>
            <div className="middle-text">
                <h1 className="middle-text1">Hot items</h1>
                <h5 className="middle-text2">Here is what's trending on luma right now</h5>
            </div>
            <Hotitems/>
        </div>
    )
}

export default Home
