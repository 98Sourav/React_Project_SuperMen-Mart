import React from 'react'
import ProductList from '../../components/ProductList'
import Testimonials from '../../components/Testimonials'
import VideoGallery from '../../components/VideoGallery'
import Carousal from './../../components/Carousal';

const Home = () => {
  return (
    <>
             <Carousal/>
              <ProductList />
              <Testimonials />
              <VideoGallery />
             
            </>
  )
}

export default Home