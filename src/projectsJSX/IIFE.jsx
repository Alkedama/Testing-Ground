import React from 'react'

const IIFE = () => {
    return (
        <div>IIFE</div>
    )
}

(function () {
    'use strict'
    let secretNumber = Math.random();
    console.log("Inside the IIFE:", secretNumber);
})();

export default IIFE