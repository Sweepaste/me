import {MdEmail} from "react-icons/md";
import {FaLinkedinIn, FaPhone} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "mailto:ShawnZh333@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <MdEmail size={50}/>
        },
        {
            id: "footer-1",
            url: "tel:4123702590",
            className: "social-icon",
            target: "_blank",
            icon: <FaPhone size={50}/>
        },
        {
            id: "footer-2",
            url: "https://rodrigo-arenas.medium.com",
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50}/>
        }
    ]
}

export default footerConfig
