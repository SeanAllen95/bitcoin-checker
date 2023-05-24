import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar"
import GbpBitCoinPrice from "../components/GbpBitCoinPrice";
import EurBitCoinPrice from "../components/EurBitCoinPrice";
import UsdBitCoinPrice from "../components/UsdBitCoinPrice";
import Home from "../components/Home"

const BitCoinContainer = () => {
    const [bitCoinPrice, setBitCoinPrice] = useState(null)

    useEffect(() => {
        getBitCoinPrice();
      }, [])

    const getBitCoinPrice = function(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(bitCoinPrice => setBitCoinPrice(bitCoinPrice))
    }

    
    
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={ < Home />}/>
                <Route path="/greatbritishpounds" element={ < GbpBitCoinPrice bitCoinPrice={bitCoinPrice} />}/>
                <Route path="/euros" element={ < EurBitCoinPrice bitCoinPrice={bitCoinPrice}/>}/>
                <Route path="/unitedstatesdollars" element={ < UsdBitCoinPrice bitCoinPrice={bitCoinPrice}/>}/>
            </Routes>
        </Router>
    )
    
}


export default BitCoinContainer






