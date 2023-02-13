import React from 'react';
//@ts-ignore
import apple from '../../assets/apple.svg'
//@ts-ignore
import bill from '../../assets/bill.png'
//@ts-ignore
import google from '../../assets/google.svg'
import styles,{layout} from "../../style";


const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className={`w-[100%] relative z-[5] h-[100%]`}/>
            <div className={`absolute z-[3] -left-1/2 
            top-0 w-[50%] h-[50%] rounded-full white-gradient`}/>
            <div className={`absolute z-[0] -left-1/2 
            bottom-0 w-[50%] h-[50%] rounded-full pink-gradient`}/>
        </div>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Easily control your <br/> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodia aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
            <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
                <img src={google} alt="google" className={`w-[128px] h-[128px] mr-5 cursor-pointer`}/>
                <img src={apple} alt="apple" className={`w-[128px] h-[128px] cursor-pointer`}/>
            </div>
        </div>
    </section>
)

export default Billing;