import React from "react";

const currYer = new Date().getFullYear();

const Footer = () => {

    return (
        <>

            <footer className="w-100 bg-light text-center">
                <p>© {currYer} Om_pattjoshi. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    );
};

export default Footer;
