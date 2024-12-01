import React from 'react'
import Hero from "../components/hero/Hero"
import Popular from "../components/popular/Popular"
import Offers from "../components/offers/Offers"
import NewCollections from '../components/newCollections/NewCollections'
import NewsLetter from "../components/newsLetter/NewsLetter"


function Shop() {
    return (
        <>
            <Hero/>
            <Popular category='women'/>
            <Popular category='men' />
            <Popular category='kids'/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </>
    )
}

export default Shop;
