(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a(3),s=a(0),o=a(1),c=Object(s.createContext)(),r=function(e){var t=e.children,a=Object(s.useState)("light"),n=Object(i.a)(a,2),r=n[0],l=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(o.jsx)(c.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="Austin Gayler",d="Software Engineer",h="https://austingayler.github.io/cv.pdf",u={linkedin:"https://www.linkedin.com/in/austin-gayler-661ba092/",github:"https://github.com/austingayler"},p=[{name:"Zash",description:"iOS/Android application to assist stroke detection study participants and help them set up IoT device with local WiFi credentials via Bluetooth",stack:["React Native","TypeScript","Expo","Bluetooth"],livePreview:"https://play.google.com/store/apps/details?id=com.zeitmedical.zash&hl=en&gl=US",img:"/zash.jpg"},{name:"Homesite Construction Dashboard",description:"Admin dashboard to manage construction details of 50,000 homes for a homebuilding company",stack:["React","TypeScript","SASS","Storybook","react-testing-library"],img:"/lennar.png"},{name:"WAC3",description:"Management of IoT devices and weather/topographical data for avalanche control",stack:["Leaflet","Vue","jQuery","PHP","SQL"],livePreview:"https://www.wyssenavalanche.com/en/software-services/wac-3-cockpit-and-additional-modules/",img:"/wac.jpg"},{name:"GAN Training",description:"Training a GAN to replicate my photographic style on my personal archive of landscape photos",stack:["Python","Google Cloud"],sourceCode:"https://github.com/austingayler/photovision",img:"/gan.png"},{name:"Lateral",description:"A suite of web interfaces for human-assisted ML training",stack:["React","SASS","HTML Canvas","Storybook"],livePreview:"https://www.lateral.io/",img:"/lateral.png"},{name:"Staff Management Dashboard",description:"Admin dashboard for managing users of a staff credentialing app, integrating NFC and GPS data",stack:["React","SASS","Leaflet","NFC"],img:"/pz2.png"},{name:"Jumbotron Event Contest Entry",description:"Infrastructure for promotions entered by 15,000 people simultaneously at Major League Baseball games",stack:["React","SASS","Knex","NodeJS","AWS Lambda","AWS S3"],img:"/sx.png"},{name:"PintPass",description:"iOS/Android applications for increasing engagement at craft breweries",stack:["Hapi","Express","Android","iOS","Python Scripting"],livePreview:"http://pintpass.com/"},{name:"Audio Analysis",description:"Web interface and infrastructure for a client to upload audio, run them through different state-of-the-art audio analysis tools (speaker diarization, sentiment analysis, etc), and visualize the results",stack:["Django","React","Recharts","Azure Cognitive Services","Amazon Transcribe/Comprehend"]},{name:"Reddit Bot",description:"Reddit bot that posts alternative music links for music posted in a subreddit",stack:["Python","Reddit API","Youtube API"],sourceCode:"https://github.com/austingayler/reddit-music-linker-bot"},{name:"Sharelift",description:"Mobile applications for ridesharing, leveraging the culture of the ski community of Bozeman, MT",stack:["Angular","MeteorJS","MongoDB","Cordova"],livePreview:"https://www.shareliftapp.com/",img:"/sharelift.png"},{name:"Pythia",description:"Raspberry Pi web interface for hobby projects",stack:["PHP","Apache","MySQL","HTML/Bootstrap"],sourceCode:"https://github.com/austingayler/pythial",img:"/pythia.png"},{name:"fauxexposure",description:"Android camera application to simulate different modes of photography, such as long exposures",stack:["Android","Java","DIY Computational Photography"],sourceCode:"https://github.com/austingayler/fauxexposure"},{name:"Last.fm Downloader",description:"Script to download recommended music based on your Last.fm history",stack:["Java","Last.fm API"],sourceCode:"https://github.com/austingayler/rec_me"},{name:"MSU Exponent Blog",description:"Blog for local university newspaper",stack:["PHP","HTML","Wordpress"],img:"/exponent.png"},{name:"Pure Data Sound Design",description:"Math-heavy design of sound effects and synthesizer noises using Pure Data",stack:["Pure Data"],img:"/puredata.png"}],m={},j=(a(16),a(14),a(18),a(17),a(29),a(33),a(11)),b=a.n(j),g=a(19),f=a.n(g),v=(a(34),function(){var e=l,t=d,a=h,n=u;return Object(o.jsxs)("div",{className:"about center",children:[e&&Object(o.jsxs)("h1",{children:["Hi, I'm ",Object(o.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(o.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(o.jsx)("p",{className:"about__desc",children:"I'm a software engineer with a focus on the front-end. I've worked across numerous business domains, and have an eye for responsive, pixel-perfect design in websites that are a pleasure to use. My background is in computer science (though my interest in technology began far before that), and my experience across the whole software stack allow me to work with everything from websites for smaller business to complex web applications."}),Object(o.jsx)("p",{className:"about__desc",children:"I have been programming for about 13 years, personal and professional. Here are some of the projects I've worked on and technologies I've used in that time!"}),Object(o.jsxs)("div",{className:"about__contact center",children:[a&&Object(o.jsx)("a",{href:a,children:Object(o.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(o.jsxs)(o.Fragment,{children:[n.github&&Object(o.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(o.jsx)(b.a,{})}),n.linkedin&&Object(o.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(o.jsx)(f.a,{})})]})]})]})}),x=a(7),O=a.n(x),w=a(20),k=a.n(w),y=a(22),S=(a(36),"".concat("","/gan.png"),function(e){var t=e.project;return Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("h3",{children:t.name}),t.stack&&Object(o.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(o.jsx)("li",{className:"project__stack-item",children:e},O()())}))}),t.img&&Object(o.jsx)(y.a,{className:"project__img",hideDownload:!0,hideZoom:!0,showRotate:!1,small:""+t.img,large:""+t.img,alt:t.name}),Object(o.jsx)("p",{className:"project__description",children:t.description}),Object(o.jsx)("div",{className:"project__fill"}),Object(o.jsxs)("div",{children:[t.sourceCode&&Object(o.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(o.jsx)(b.a,{})}),t.livePreview&&Object(o.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(o.jsx)(k.a,{})})]})]})}),N=(a(37),function(){return p.length?Object(o.jsxs)("section",{id:"projects",className:"section projects",children:[Object(o.jsx)("h2",{className:"section__title",children:"Project Technology Timeline"}),Object(o.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(o.jsx)(S,{project:e},O()())}))})]}):null}),P=(a(38),a(21)),A=a.n(P),_=(a(39),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(o.jsx)("div",{className:"scroll-top",children:Object(o.jsx)("a",{href:"#top",children:Object(o.jsx)(A.a,{fontSize:"large"})})}):null}),C=(a(40),function(){return m.email?Object(o.jsx)("section",{className:"section contact center",id:"contact",children:Object(o.jsx)("a",{href:"".concat(m.email),children:Object(o.jsx)("span",{type:"button",className:"btn btn--outline",children:"Contact me"})})}):null}),L=(a(41),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:" "})})}),M=(a(42),function(){var e=Object(s.useContext)(c),t=Object(i.a)(e,1)[0].themeName;return Object(o.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(o.jsxs)("main",{children:[Object(o.jsx)(v,{}),Object(o.jsx)(N,{}),Object(o.jsx)(C,{})]}),Object(o.jsx)(_,{}),Object(o.jsx)(L,{})]})});a(43);Object(n.render)(Object(o.jsx)(r,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.98857c4b.chunk.js.map