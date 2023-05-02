import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Shawn Zhou</strong>
        </h1>,
    titles: [
        "Web developer"
    ],
    about: {
        start: "I'm a Full-Stack Developer specialized in React with around 5 year experience. " +
            "I have a strong background in building user interfaces and front-end web applications using React. "+
            "I'm excited by learning new things, contributing to build high-quality, responsive, and accessible applications for users." ,
        exit: "I possess extensive experience in crafting reusable functional UI components," +
            " and effectively managing complex state management using Redux Toolkit. " +
            "Additionally, I have a strong passion for creating cross-platform applications that seamlessly cater to Mac, Windows, and Android platforms,"
    },
    workTimeline: [
        
        {
            id: "work-2",
            title: "Schedule Today",
            company: "ZAP Solutions",
            description: "Schedule Today is an efficient online interview scheduling system that simplifies interview setup, applicant profile review, and secure evaluation form completion. Interviewers can send email invitations, manage schedules, and access applicant information with ease. The platform provides in-depth visualizations and applicant statistics, allowing users to create custom reports for comprehensive analysis and a well-rounded understanding of the candidate pool.",
            date: "June 2021 - Present",
            icon: <FaMobileAlt/>,
            tags: ["React", "SPA", "Redux", "D3", "React Router", "SCSS", "Jest"]
        },
        {
            id: "work-1",
            title: "Web Chat",
            company: "Signpost",
            description: "Web Chat is a cloud-based platform designed to assist users in engaging their website visitors and automating phone, online, and text messages through a digital receptionist. The platform offers automated responses via a chatbot, incorporating relevant information, images, and videos about your business, ensuring quick and efficient replies from a centralized dashboard. Additionally, Web Chat streamlines appointment bookings and manages after-hours communications, providing a seamless customer engagement experience. shorten these words " ,
            date: "March 2020 - May 2021",
            icon: <GiCommercialAirplane/>,
            tags: ["React", "Redux", "Bootstrap", "Jest", "Material UI"]
        },
        {
            id: "work-0",
            title: "Sangoma Meet",
            company: "Sangoma",
            description: "Sangoma Meet is a versatile online video conferencing platform that allows users to plan, host, and share meetings effortlessly. It supports recording, presenting documents, slides, and spreadsheets, and offers cross-platform compatibility, enabling users to connect from various devices.",
            date: "Feb 2018 - Feb 2020",
            icon: <BsClipboardData/>,
            tags: ["React", "Redux", "Electron", "React Native"]
        }
    ]
}


export default homeConfig