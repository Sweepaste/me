import React from "react";

import {
    AiFillCode,
    AiFillHome,
    AiOutlineGithub,
    AiTwotoneContacts
} from "react-icons/ai";

import {BsMedium} from "react-icons/bs";
import { MdWork } from 'react-icons/md'

const menuConfig = {

    sidebarData: [
        {
            id: "menu-0",
            title: "Home",
            path: "/portfolio",
            icon: <AiFillHome size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-1",
            title: "Works",
            path: "/projects",
            icon: <MdWork size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-2",
            title: "Skills",
            path: "/skills",
            icon: <AiFillCode size={35}/>,
            className: "nav-text"
        },
        // {
        //     id: "menu-3",
        //     title: "Contact me",
        //     path: "/blogs",
        //     icon: <AiTwotoneContacts size={35}/>,
        //     className: "nav-text"
        // }
    ]

}

export default menuConfig
