(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(19),s=t.n(i),c=t(26),o=t(3),r=t(60),m=t(10),d=t(40),u=t(73),p=t(11),E=t(41),f=(t(47),t(35)),k={sidebarData:[{id:"menu-0",title:"Home",path:"/portfolio",icon:l.a.createElement(p.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Works",path:"/projects",icon:l.a.createElement(f.b,{size:35}),className:"nav-text"},{id:"menu-2",title:"Skills",path:"/skills",icon:l.a.createElement(p.a,{size:35}),className:"nav-text"}]},g=function(e){return l.a.createElement(E.a,null,k.sidebarData.map(function(a){return l.a.createElement(E.a.Item,{key:a.id},l.a.createElement(E.a.Link,{as:c.b,to:a.path,onClick:e.onSelection},a.icon,l.a.createElement("span",null,a.title)))}))},N=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],i=a[1];return l.a.createElement(d.a,{className:"navbar",expand:"sm",expanded:t},l.a.createElement(u.a,{fluid:!0},l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return i(!t&&"expanded")}},l.a.createElement(p.e,{className:"toggle-icon"})),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g,{onSelection:function(){i(!1)}}))))},b=t(102),h=t(103),v=t(75),x=t.n(v),y=function(e){return l.a.createElement(x.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},z=function(e){var a=e.about.start,t=e.about.exit;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},l.a.createElement("div",{className:"card-header"},l.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),l.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},a,l.a.createElement("br",null),t)))},w=t(74),S=(t(79),t(52)),R=(t(81),function(e){return l.a.createElement("div",{className:"tags"},e.tags.map(function(a,t){return l.a.createElement(S.a,{pill:!0,className:"tag mr-2 mb-2",key:e.id+t,bg:"secondary"},a)}))}),T=(t(83),function(e){return l.a.createElement(w.VerticalTimeline,null,e.items.map(function(e){return l.a.createElement(w.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,icon:e.icon,key:e.id},l.a.createElement("h2",{className:"vertical-timeline-element-title"},l.a.createElement("strong",null,e.title)),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),l.a.createElement("p",{className:"vertical-timeline-element-description"},e.description),l.a.createElement(R,{id:e.id,tags:e.tags}))}))}),C=t(28),I=t(53),_=t(27),j={greeting:l.a.createElement("h1",{className:"heading"},"Hi! I'm ",l.a.createElement("strong",{className:"main-name"}," Shawn Zhou")),titles:["Web developer"],about:{start:"I'm a Full-Stack Developer specialized in React with around 5 year experience. I have a strong background in building user interfaces and front-end web applications using React. I'm excited by learning new things, contributing to build high-quality, responsive, and accessible applications for users.",exit:"I possess extensive experience in crafting reusable functional UI components, and effectively managing complex state management using Redux Toolkit. Additionally, I have a strong passion for creating cross-platform applications that seamlessly cater to Mac, Windows, and Android platforms,"},workTimeline:[{id:"work-2",title:"Schedule Today",company:"ZAP Solutions",description:"Schedule Today is an efficient online interview scheduling system that simplifies interview setup, applicant profile review, and secure evaluation form completion. Interviewers can send email invitations, manage schedules, and access applicant information with ease. The platform provides in-depth visualizations and applicant statistics, allowing users to create custom reports for comprehensive analysis and a well-rounded understanding of the candidate pool.",date:"June 2021 - Present",icon:l.a.createElement(_.a,null),tags:["React","SPA","Redux","D3","React Router","SCSS","Jest"]},{id:"work-1",title:"Web Chat",company:"Signpost",description:"Web Chat is a cloud-based platform designed to assist users in engaging their website visitors and automating phone, online, and text messages through a digital receptionist. The platform offers automated responses via a chatbot, incorporating relevant information, images, and videos about your business, ensuring quick and efficient replies from a centralized dashboard. Additionally, Web Chat streamlines appointment bookings and manages after-hours communications, providing a seamless customer engagement experience. shorten these words ",date:"March 2020 - May 2021",icon:l.a.createElement(I.a,null),tags:["React","Redux","Bootstrap","Jest","Material UI"]},{id:"work-0",title:"Sangoma Meet",company:"Sangoma",description:"Sangoma Meet is a versatile online video conferencing platform that allows users to plan, host, and share meetings effortlessly. It supports recording, presenting documents, slides, and spreadsheets, and offers cross-platform compatibility, enabling users to connect from various devices.",date:"Feb 2018 - Feb 2020",icon:l.a.createElement(C.a,null),tags:["React","Redux","Electron","React Native"]}]},A=(t(85),function(){return l.a.createElement("section",null,l.a.createElement(u.a,{fluid:!0,className:"home-content",id:"home"},l.a.createElement(b.a,null,l.a.createElement(h.a,{className:"home-header"},l.a.createElement("div",null,j.greeting),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(y,{titles:j.titles})),l.a.createElement("div",null,l.a.createElement(z,{about:j.about}))))))}),P=(t(31),t(23)),M=t(39),J=t(44),D=t.n(J),O=t(54),q=t.n(O),B=t(55),F=t.n(B),U=t(56),W=t.n(U),L=t(57),V=t.n(L),H=(p.c,P.a,p.b,M.a,D.a,p.c,P.a,p.b,M.a,q.a,p.c,P.a,p.b,F.a,p.c,P.a,p.b,M.a,p.c,P.a,p.b,V.a,p.c,P.a,p.b,W.a,function(){return l.a.createElement(u.a,{fluid:!0,className:"resume-content",id:"resume"},l.a.createElement("div",{className:"col-md-8 mx-auto"},l.a.createElement(T,{items:j.workTimeline})))}),G=t(45),Z=(t(48),function(e){return l.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,a){return l.a.createElement("li",{className:e.className,key:e.id},e.icon,l.a.createElement("p",{className:e.className+"-text"},e.text))}))}),K=t(7),Q=t(30),X=t(29),Y={mainSkills:[{id:"skills-0",className:"skill-icon",icon:l.a.createElement(K.h,{size:50}),text:"Javascript"},{id:"skills-1",className:"skill-icon",icon:l.a.createElement(K.u,{size:50}),text:"Typescript"},{id:"skills-2",className:"skill-icon",icon:l.a.createElement(K.c,{size:50}),text:"CSS"},{id:"skills-3",className:"skill-icon",icon:l.a.createElement(K.g,{size:50}),text:"Html5"},{id:"skills-4",className:"skill-icon",icon:l.a.createElement(K.r,{size:50}),text:"Redux"},{id:"skills-5",className:"skill-icon",icon:l.a.createElement(X.b,{size:50}),text:"Node.js"},{id:"skills-6",className:"skill-icon",icon:l.a.createElement(K.e,{size:50}),text:"Express.js"},{id:"skills-7",className:"skill-icon",icon:l.a.createElement(K.l,{size:50}),text:"Mongodb"},{id:"skills-8",className:"skill-icon",icon:l.a.createElement(K.m,{size:50}),text:"Mysql"},{id:"skills-9",className:"skill-icon",icon:l.a.createElement(K.p,{size:50}),text:"React"},{id:"skills-10",className:"skill-icon",icon:l.a.createElement(K.a,{size:50}),text:"Bootstrap"},{id:"skills-11",className:"skill-icon",icon:l.a.createElement(X.c,{size:50}),text:"Npm"},{id:"skills-11",className:"skill-icon",icon:l.a.createElement(Q.d,{size:50}),text:"Vscode"},{id:"skills-12",className:"skill-icon",icon:l.a.createElement(K.i,{size:50}),text:"Jest"},{id:"skills-13",className:"skill-icon",icon:l.a.createElement(K.q,{size:50}),text:"React Router"},{id:"skills-13",className:"skill-icon",icon:l.a.createElement(K.f,{size:50}),text:"Graphql"}],complementarySkills:[{id:"skills-2",className:"skill-icon",icon:l.a.createElement(K.n,{size:50}),text:"Postman"},{id:"skills-6",className:"skill-icon",icon:l.a.createElement(Q.a,{size:50}),text:"Nextjs"},{id:"skills-7",className:"skill-icon",icon:l.a.createElement(K.b,{size:50}),text:"C++"},{id:"skills-8",className:"skill-icon",icon:l.a.createElement(X.a,{size:50}),text:"Java"},{id:"skills-9",className:"skill-icon",icon:l.a.createElement(K.s,{size:50}),text:"SpringBoot"},{id:"skills-10",className:"skill-icon",icon:l.a.createElement(K.o,{size:50}),text:"Python"},{id:"skills-11",className:"skill-icon",icon:l.a.createElement(K.t,{size:50}),text:"Sqlite"},{id:"skills-12",className:"skill-icon",icon:l.a.createElement(K.d,{size:50}),text:"electron"},{id:"skills-13",className:"skill-icon",icon:l.a.createElement(Q.b,{size:50}),text:"React Native"},{id:"skills-14",className:"skill-icon",icon:l.a.createElement(Q.c,{size:50}),text:"Three.js"},{id:"skills-15",className:"skill-icon",icon:l.a.createElement(K.j,{size:50}),text:"Jira"}]},$=function(){return l.a.createElement("section",{id:"skills"},l.a.createElement("div",null,l.a.createElement("div",{className:"skills-div"},l.a.createElement("h1",{className:"main-skills-h1"},l.a.createElement("span",{className:"main-skills"},l.a.createElement("strong",null,"Main Skills & Tools"))),l.a.createElement(G.a,{effect:"bounce"},l.a.createElement("div",{className:"main-skills"},l.a.createElement(Z,{config:Y.mainSkills}))),l.a.createElement("h1",{className:"complementary-skills-h1"},l.a.createElement("span",{className:"complementary-skills"},l.a.createElement("strong",null,"Complementary Skills & Tools"))),l.a.createElement(G.a,{effect:"bounce"},l.a.createElement("div",{className:"complementary-skills"},l.a.createElement(Z,{config:Y.complementarySkills}))))))},ee=t(59),ae=t.n(ee),te=(K.k,K.k,K.k,K.k,p.c,K.k,p.c,ae.a,K.k,K.k,K.k,p.c,K.k,function(){return l.a.createElement("div",null)});var ne=function(){var e=Object(o.e)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},le={icons:[{id:"footer-0",url:"mailto:ShawnZh333@gmail.com",className:"social-icon",target:"_blank",icon:l.a.createElement(f.a,{size:50})},{id:"footer-1",url:"tel:4123702590",className:"social-icon",target:"_blank",icon:l.a.createElement(_.b,{size:50})},{id:"footer-2",url:"https://rodrigo-arenas.medium.com",className:"social-icon",target:"_blank",icon:l.a.createElement(C.b,{size:50})}]},ie=(t(50),function(){return l.a.createElement("div",{className:"social-icons"},le.icons.map(function(e){return l.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer"},e.icon)}))}),se=function(){return l.a.createElement(u.a,{fluid:!0,className:"footer"},l.a.createElement(b.a,null,l.a.createElement(h.a,{className:"footer-body"},l.a.createElement(ie,null))))};t(93),t(95);"undefined"!==typeof Object({NODE_ENV:"production",PUBLIC_URL:"/aboutme"}).REACT_APP_TRACKING_ID&&r.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/aboutme"}).REACT_APP_TRACKING_ID);var ce=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(ne,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/portfolio",exact:!0,element:l.a.createElement(A,null)}),l.a.createElement(o.a,{path:"/projects",exact:!0,element:l.a.createElement(H,null)}),l.a.createElement(o.a,{path:"/blogs",exact:!0,element:l.a.createElement(te,null)}),l.a.createElement(o.a,{path:"/skills",exact:!0,element:l.a.createElement($,null)})),l.a.createElement(se,null)))};t(97);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce,null)),document.getElementById("root"))},31:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/sklearn_genetic_opt.23273bc8.png"},47:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/graph_embeddings.fed0850a.png"},55:function(e,a,t){e.exports=t.p+"static/media/kafkaml.9c0f9867.png"},56:function(e,a,t){e.exports=t.p+"static/media/scikit_pipes.8ba027d9.png"},57:function(e,a,t){e.exports=t.p+"static/media/portfolio.4b632d51.png"},59:function(e,a,t){e.exports=t.p+"static/media/fastapi_sklearn.f7d742fc.png"},61:function(e,a,t){e.exports=t(100)},81:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){},93:function(e,a,t){},97:function(e,a,t){}},[[61,2,1]]]);
//# sourceMappingURL=main.5000c93a.chunk.js.map