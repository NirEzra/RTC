import React from 'react'
import "../style/HomePage.css"
import Slideshow from "./Slideshow"
import Footer from "./Footer"
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/productList/productListSlice'
import LatestProducts from './LatestProducts'
import Gallery from "./Gallery"
import Galeryy from "./Galeryy"
import LazyLoad from 'react-lazyload';
import ContactUs from "./ContactUs";
import About from "./About"

function HomePage() {
    return (
        <>
            <div className="homePageContainer">
                <div className="innerBlock">
                    <Slideshow />
                    <div className="BottomSqares">

                        <div className="leftSqare">
                            <img src="/pictures/logoNobg.png" alt="" />
                        </div>

                        <div className="rightSqare">
                            <h1><u>Welcome to Rachel Table Cloth</u></h1>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.of type and scrambled it to make </h6>
                        </div>

                    </div>
                </div>
            </div>
            <About />
            {/* <Gallery /> */}
            
            <Galeryy />
          <ContactUs />
            {/* <LatestProducts/> */}
            <Footer />
           
        </>
    )
}

export default HomePage
