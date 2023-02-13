import React from 'react';
interface Props {
    styles:String
}

const Index = (styles:Props):JSX.Element => {
    return <button type="button" className={`py-4 px-6 
    bg-blue-gradient font-poppins font-medium text-[18px] 
    text-primary outline-none ${styles.styles} rounded-[10px]`}>
        Get Started
    </button>
}

export default Index;