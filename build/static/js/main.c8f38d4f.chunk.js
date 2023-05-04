(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},67:function(e,a,t){e.exports=t(91)},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},88:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(17),s=t.n(i),c=t(34),o=t(3),r=t(7),m=t(49),d=t(61),u=t(36),p=t(50),E=(t(57),t(45)),f={sidebarData:[{id:"menu-0",title:"Home",path:"/Home",icon:l.a.createElement(u.b,{size:35}),className:"nav-text"},{id:"menu-1",title:"Works",path:"/projects",icon:l.a.createElement(E.b,{size:35}),className:"nav-text"},{id:"menu-2",title:"Skills",path:"/skills",icon:l.a.createElement(u.a,{size:35}),className:"nav-text"}]},k=function(e){return l.a.createElement(p.a,null,f.sidebarData.map(function(a){return l.a.createElement(p.a.Item,{key:a.id},l.a.createElement(p.a.Link,{as:c.b,to:a.path,onClick:e.onSelection},a.icon,l.a.createElement("span",null,a.title)))}))},g=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],i=a[1];return l.a.createElement(m.a,{className:"navbar",expand:"sm",expanded:t},l.a.createElement(d.a,{fluid:!0},l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return i(!t&&"expanded")}},l.a.createElement(u.c,{className:"toggle-icon"})),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(k,{onSelection:function(){i(!1)}}))))},N=t(93),h=t(94),v=t(62),b=t.n(v),x=function(e){return l.a.createElement(b.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},y=function(e){var a=e.about.start,t=e.about.exit;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},l.a.createElement("div",{className:"card-header"},l.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),l.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},a,l.a.createElement("br",null),t)))},z=t(54),w=(t(81),t(63)),S=(t(82),function(e){return l.a.createElement("div",{className:"tags"},e.tags.map(function(a,t){return l.a.createElement(w.a,{pill:!0,className:"tag mr-2 mb-2",key:e.id+t,bg:"secondary"},a)}))}),R=(t(83),function(e){return l.a.createElement(z.VerticalTimeline,null,e.items.map(function(e){return l.a.createElement(z.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,icon:e.icon,key:e.id},l.a.createElement("h2",{className:"vertical-timeline-element-title"},l.a.createElement("strong",null,e.title)),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),l.a.createElement("p",{className:"vertical-timeline-element-description"},e.description),l.a.createElement(S,{id:e.id,tags:e.tags}))}))}),j=t(41),T=t(64),C=t(35),I={greeting:l.a.createElement("h1",{className:"heading"},"Hi! I'm ",l.a.createElement("strong",{className:"main-name"}," Shawn Zhou")),titles:["Web developer"],about:{start:"I'm a Full-Stack Developer specialized in React with around 5 year experience. I have a strong background in building user interfaces and front-end web applications using React. I'm excited by learning new things, contributing to build high-quality, responsive, and accessible applications for users.",exit:"I possess extensive experience in crafting reusable functional UI components, and effectively managing complex state management using Redux Toolkit. Additionally, I have a strong passion for creating cross-platform applications that seamlessly cater to Mac, Windows, and Android platforms,"},workTimeline:[{id:"work-2",title:"Schedule Today",company:"ZAP Solutions",description:"Schedule Today is an efficient online interview scheduling system that simplifies interview setup, applicant profile review, and secure evaluation form completion. Interviewers can send email invitations, manage schedules, and access applicant information with ease. The platform provides in-depth visualizations and applicant statistics, allowing users to create custom reports for comprehensive analysis and a well-rounded understanding of the candidate pool.",date:"June 2021 - Present",icon:l.a.createElement(C.a,null),tags:["React","SPA","Redux","D3","React Router","SCSS","Jest"]},{id:"work-1",title:"Web Chat",company:"Signpost",description:"Web Chat is a cloud-based platform designed to assist users in engaging their website visitors and automating phone, online, and text messages through a digital receptionist. The platform offers automated responses via a chatbot, incorporating relevant information, images, and videos about your business, ensuring quick and efficient replies from a centralized dashboard. Additionally, Web Chat streamlines appointment bookings and manages after-hours communications, providing a seamless customer engagement experience. shorten these words ",date:"March 2020 - May 2021",icon:l.a.createElement(T.a,null),tags:["React","Redux","Bootstrap","Jest","Material UI"]},{id:"work-0",title:"Sangoma Meet",company:"Sangoma",description:"Sangoma Meet is a versatile online video conferencing platform that allows users to plan, host, and share meetings effortlessly. It supports recording, presenting documents, slides, and spreadsheets, and offers cross-platform compatibility, enabling users to connect from various devices.",date:"Feb 2018 - Feb 2020",icon:l.a.createElement(j.a,null),tags:["React","Redux","Electron","React Native"]}]},M=(t(84),function(){return l.a.createElement("section",null,l.a.createElement(d.a,{fluid:!0,className:"home-content",id:"home"},l.a.createElement(N.a,null,l.a.createElement(h.a,{className:"home-header"},l.a.createElement("div",null,I.greeting),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(x,{titles:I.titles})),l.a.createElement("div",null,l.a.createElement(y,{about:I.about}))))))}),J=(t(52),function(){return l.a.createElement(d.a,{fluid:!0,className:"resume-content",id:"resume"},l.a.createElement("div",{className:"col-md-8 mx-auto"},l.a.createElement(R,{items:I.workTimeline})))}),A=t(55),q=(t(58),function(e){return l.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,a){return l.a.createElement("li",{className:e.className,key:e.id},e.icon,l.a.createElement("p",{className:e.className+"-text"},e.text))}))}),F=t(12),W=t(38),H=t(37),P={mainSkills:[{id:"skills-0",className:"skill-icon",icon:l.a.createElement(F.h,{size:50}),text:"Javascript"},{id:"skills-1",className:"skill-icon",icon:l.a.createElement(F.t,{size:50}),text:"Typescript"},{id:"skills-2",className:"skill-icon",icon:l.a.createElement(F.c,{size:50}),text:"CSS"},{id:"skills-3",className:"skill-icon",icon:l.a.createElement(F.g,{size:50}),text:"Html5"},{id:"skills-4",className:"skill-icon",icon:l.a.createElement(F.q,{size:50}),text:"Redux"},{id:"skills-5",className:"skill-icon",icon:l.a.createElement(H.b,{size:50}),text:"Node.js"},{id:"skills-6",className:"skill-icon",icon:l.a.createElement(F.e,{size:50}),text:"Express.js"},{id:"skills-7",className:"skill-icon",icon:l.a.createElement(F.k,{size:50}),text:"Mongodb"},{id:"skills-8",className:"skill-icon",icon:l.a.createElement(F.l,{size:50}),text:"Mysql"},{id:"skills-9",className:"skill-icon",icon:l.a.createElement(F.o,{size:50}),text:"React"},{id:"skills-10",className:"skill-icon",icon:l.a.createElement(F.a,{size:50}),text:"Bootstrap"},{id:"skills-11",className:"skill-icon",icon:l.a.createElement(H.c,{size:50}),text:"Npm"},{id:"skills-11",className:"skill-icon",icon:l.a.createElement(W.d,{size:50}),text:"Vscode"},{id:"skills-12",className:"skill-icon",icon:l.a.createElement(F.i,{size:50}),text:"Jest"},{id:"skills-13",className:"skill-icon",icon:l.a.createElement(F.p,{size:50}),text:"React Router"},{id:"skills-13",className:"skill-icon",icon:l.a.createElement(F.f,{size:50}),text:"Graphql"}],complementarySkills:[{id:"skills-2",className:"skill-icon",icon:l.a.createElement(F.m,{size:50}),text:"Postman"},{id:"skills-6",className:"skill-icon",icon:l.a.createElement(W.a,{size:50}),text:"Nextjs"},{id:"skills-7",className:"skill-icon",icon:l.a.createElement(F.b,{size:50}),text:"C++"},{id:"skills-8",className:"skill-icon",icon:l.a.createElement(H.a,{size:50}),text:"Java"},{id:"skills-9",className:"skill-icon",icon:l.a.createElement(F.r,{size:50}),text:"SpringBoot"},{id:"skills-10",className:"skill-icon",icon:l.a.createElement(F.n,{size:50}),text:"Python"},{id:"skills-11",className:"skill-icon",icon:l.a.createElement(F.s,{size:50}),text:"Sqlite"},{id:"skills-12",className:"skill-icon",icon:l.a.createElement(F.d,{size:50}),text:"electron"},{id:"skills-13",className:"skill-icon",icon:l.a.createElement(W.b,{size:50}),text:"React Native"},{id:"skills-14",className:"skill-icon",icon:l.a.createElement(W.c,{size:50}),text:"Three.js"},{id:"skills-15",className:"skill-icon",icon:l.a.createElement(F.j,{size:50}),text:"Jira"}]},B=function(){return l.a.createElement("section",{id:"skills"},l.a.createElement("div",null,l.a.createElement("div",{className:"skills-div"},l.a.createElement("h1",{className:"main-skills-h1"},l.a.createElement("span",{className:"main-skills"},l.a.createElement("strong",null,"Main Skills & Tools"))),l.a.createElement(A.a,{effect:"bounce"},l.a.createElement("div",{className:"main-skills"},l.a.createElement(q,{config:P.mainSkills}))),l.a.createElement("h1",{className:"complementary-skills-h1"},l.a.createElement("span",{className:"complementary-skills"},l.a.createElement("strong",null,"Complementary Skills & Tools"))),l.a.createElement(A.a,{effect:"bounce"},l.a.createElement("div",{className:"complementary-skills"},l.a.createElement(q,{config:P.complementarySkills}))))))};var D=function(){var e=Object(o.l)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},O={icons:[{id:"footer-0",url:"mailto:ShawnZh333@gmail.com",className:"social-icon",target:"_blank",icon:l.a.createElement(E.a,{size:50})},{id:"footer-1",url:"tel:4123702590",className:"social-icon",target:"_blank",icon:l.a.createElement(C.b,{size:50})}]},V=(t(60),function(){return l.a.createElement("div",{className:"social-icons"},O.icons.map(function(e){return l.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer"},e.icon)}))}),Z=function(){return l.a.createElement(d.a,{fluid:!0,className:"footer"},l.a.createElement(N.a,null,l.a.createElement(h.a,{className:"footer-body"},l.a.createElement(V,null))))};t(88),t(89);var U=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(D,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,element:l.a.createElement(M,null)}),l.a.createElement(o.a,{path:"/home",exact:!0,element:l.a.createElement(M,null)}),l.a.createElement(o.a,{path:"/projects",exact:!0,element:l.a.createElement(J,null)}),l.a.createElement(o.a,{path:"/skills",exact:!0,element:l.a.createElement(B,null)})),l.a.createElement(Z,null)))};t(90);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c8f38d4f.chunk.js.map