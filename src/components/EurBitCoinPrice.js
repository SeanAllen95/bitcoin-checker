import React from "react"

const EurBitCoinPrice = ({bitCoinPrice}) => {

    // const handleClick = function() {
    //     console.log(`Clicked on ${bitCoin}`)
    //     onCurrencyClicked(bitCoin)

    
    return (
        <>
        <li className="clickable-li">EUR</li>
        <li>One Bitcoin is worth €{bitCoinPrice.bpi.EUR.rate_float}</li>
        </>
      )
    }


export default EurBitCoinPrice