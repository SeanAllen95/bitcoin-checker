import React from "react"

const GbpBitCoinPrice = ({bitCoinPrice}) => {

    // const handleClick = function() {
    //     console.log(`Clicked on ${bitCoin}`)
    //     onCurrencyClicked(bitCoin)

    return (
        <>
        <li className="clickable-li">GBP</li>
        <li>One Bitcoin is worth £{bitCoinPrice.bpi.GBP.rate_float}</li>
        </>
      )
    }

export default GbpBitCoinPrice