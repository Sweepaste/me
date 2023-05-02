import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiTypescript,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiBootstrap,
    SiPostman,
    SiCplusplus,
    SiJava,
    SiSpringboot,
    SiSqlite,
    SiElectron,
    SiJest,
    SiReactrouter,
    SiJirasoftware,
    SiGraphql,
} from "react-icons/si";
import {TbBrandNextjs, TbBrandReactNative, TbBrandThreejs, TbBrandVscode} from "react-icons/tb";
import {FaGitAlt} from "react-icons/fa";

import React from "react";
import { DiJava, DiNodejs, DiNpm } from "react-icons/di";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "Javascript"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiTypescript size={50}/>,
            text: "Typescript"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiHtml5  size={50}/>,
            text: "Html5"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiRedux size={50}/>,
            text: "Redux"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <DiNodejs size={50}/>,
            text: "Node.js"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiExpress size={50}/>,
            text: "Express.js"
        },
        {
            
            id: "skills-7",
            className: "skill-icon",
            icon: <SiMongodb size={50}/>,
            text: "Mongodb"
            
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "Mysql"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiBootstrap size={50}/>,
            text: "Bootstrap"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <DiNpm size={50}/>,
            text: "Npm"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <TbBrandVscode size={50}/>,
            text: "Vscode"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiJest size={50}/>,
            text: "Jest"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReactrouter size={50}/>,
            text: "React Router"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiGraphql size={50}/>,
            text: "Graphql"
        }
    ],
    complementarySkills: [
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPostman size={50}/>,
            text: "Postman"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <TbBrandNextjs size={50}/>,
            text: "Nextjs"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiCplusplus size={50}/>,
            text: "C++"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <DiJava size={50}/>,
            text: "Java"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiSpringboot size={50}/>,
            text: "SpringBoot"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiSqlite size={50}/>,
            text: "Sqlite"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiElectron size={50}/>,
            text: "electron"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <TbBrandReactNative size={50}/>,
            text: "React Native"
        }
        ,
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <TbBrandThreejs size={50}/>,
            text: "Three.js"
        }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiJirasoftware size={50}/>,
            text: "Jira"
        }
    ]
}

export default skillsConfig
