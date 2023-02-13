import React from 'react';
import styles from './style';
import Billing from "./components/Billing";
import Button from "./components/Button";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Business from "./components/Business";
import Stats from "./components/Stats";
import CardDeals from "./components/CardDeals";
import CTX from "./components/CTX";



function App(props:any) {
    return (
         <div className="bg-primary w-full overflow-hidden">
             <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar/>
                </div>
             </div>

             <div className={`bg-primary ${styles.flexStart}`}>
                 <div className={`${styles.boxWidth}`}>
                    <Hero></Hero>
                 </div>
             </div>

             <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                 <div className={`${styles.boxWidth}`}>
                     <Stats/>
                     <Business/>
                     <Billing/>
                     <CardDeals/>
                     <Testimonials/>
                     <Clients/>
                     <CTX/>
                     <Footer/>
                 </div>
             </div>
         </div>
    );
}

export default App;