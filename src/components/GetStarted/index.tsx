import React from 'react';
import styles from '../../style'
//@ts-ignore
import arrowUp from "../../assets/arrow-up.svg";
const Index = () => {
    const myStyle = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    };
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            {/*//@ts-ignore*/}
            <div className={`w-[100%] h-[100%] bg-primary rounded-full`} style={myStyle} >
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-container"/>
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    );
};

export default Index;