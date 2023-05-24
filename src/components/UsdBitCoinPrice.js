import React from "react"

const UsdBitCoinPrice = ({bitCoinPrice}) => {

    // const handleClick = function() {
    //     console.log(`Clicked on ${bitCoin}`)
    //     onCurrencyClicked(bitCoin)

    return (
        <>
        <li  className="clickable-li">USD</li>
        <li>One Bitcoin is worth ${bitCoinPrice.bpi.USD.rate_float}</li>
        </>
      )
    }


export default UsdBitCoinPrice