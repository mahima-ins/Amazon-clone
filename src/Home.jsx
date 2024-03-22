import React from 'react';
import "./Home.css";
import Product from './Product';

const Home = () => {
  return (
    <>
    <div className='home'>
      <img className="image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
    <div className='home_row'>
    <Product 
    id ="123"
    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
    price={11.967}
    ratings={5}
    image="https://www.globalorange.nl/wp-content/uploads/2022/09/booktip_lean-startup-eric-ries_NEW.png"

    />
    <Product 
    id ="123"
    title="PlayGo T20 Ultralight Wireless Earbuds With ENC Environmental Noise Reduction and EBEL Drivers | HD Call Quality | Sensory Controls | 6 Month Warranty"
    price={11.967}
    ratings={4}
    image="https://static-01.daraz.com.np/p/71402e8172854b14ce19ce499cbe191f.jpg"

    />
    </div>
    <div className='home_row'>
    <Product 
    id ="123"
    title="Alewa Ranger Amoled Round Smartwatch | BT Call | IP68 Waterproof | Always On Display | 410mah Battery (Black/Gray/Green)"
    price={32.967}
    ratings={5}
    image="https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_SL1500_.jpg"

    />
    <Product 
    id ="123"
    title="Storage Box Foldable Large Capacity Oxford Cloth Clothes Sundries Organizer Case For Household 66ltr"
    price={15.967}
    ratings={3}
    image="https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/03/07/7fc89566-daad-fa1e-0c74-21dd5ff9142f.webp?x-image-process=image/resize,m_lfit,h_300,w_300"

    />
    <Product 
    id ="123"
    title="Home Use Stand Mixer Grinder Juicer Smoothie Blender Mixture Grinder in Kitchen"
    price={23.967}
    ratings={4}
    image="https://image.made-in-china.com/202f0j00KMTqyQrnwAkm/Home-Use-Stand-Mixer-Grinder-Juicer-Smoothie-Blender-Mixture-Grinder-in-Kitchen.webp"

    />
    </div>

    <div className='home_row'>
    <Product 
    id ="123"
    title="Dahua 22 Inch Borderless Monitor 75Hz FHD"
    price={111.967}
    ratings={5}
    image="https://m.media-amazon.com/images/I/71XntbgYkHL._AC_UF1000,1000_QL80_.jpg"

    />
    </div>

    
    </div>
    </>
  )
}
export default Home;
