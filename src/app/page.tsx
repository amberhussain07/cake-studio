import React from 'react'
import Navbar from "../app/components/Navbar";
import Carousel from './components/Carousel';
import Progressor from './components/progressor';
import Banner from './components/Banner';
import Productlist from './components/Productlist';
import Card from './components/Card';
import Testimonals from './components/Testimonals';
import Footer from './components/Footer';
import Cake from './components/Cake';
import Menuitems from './components/MenuItems';
import Offer from './components/Offer';
import Reservation from './components/Reservation ';





export default function App() {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen'>
  <Navbar/>
  <Carousel/>
  <Progressor/>
  <Cake/>
  <Banner/>
  <Productlist/>
  <Menuitems/>
  <Offer/>
  <Card/>
  <Testimonals/>
  <Reservation />
  <Footer/>
  

       </div>
  );
}
