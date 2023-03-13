(this["webpackJsonpmy-resume-react"]=this["webpackJsonpmy-resume-react"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"bio":{"firstName":"Grzegorz","lastName":"Patyk","title":"Frontend Developer","email":"grzegorzxpatyk@gmail.com","phoneNumber":"(+48) 662 444 438","about":"Creative Front End Developer with more than two year experience in software development industry. Trained architect, self-taught software developer. Bringing my problem solving and analytical thinking skills from architecture into web development. Passionate about design, architecture, snowboarding and dogs \ud83d\udc36"},"experience":[{"position":"Junior Frontend developer","duration":"Jun 2022 - Present","company":"Transition Technologies MS","location":"Cracow/Remote","description":"Development of web applications, using <strong>JavaScript / TypeScript</strong>, <strong>React</strong>, <strong>Redux</strong>, & <strong>CSS / SASS</strong>. Effective implementation of User Interfaces using <strong>react-bootstrap</strong> UI library. Taking part in meetings with clients, discussing their needs and explaining possible solutions."},{"position":"Junior Frontend developer","duration":"Jan 2022 - May 2022","company":"ALTEN","location":"Cracow","description":"Development of the internal applications using <strong>PHP, jQuery, JavaScript and SASS</strong>. Implementation of client-side form validation, with the use of <strong>js and regular expressions</strong>. Testing API with <strong>Swagger</strong> and <strong>Postman</strong>."},{"position":"Frontend development intern","duration":"Jun 2021 - Dec 2021","company":"Beeanco","location":"Remote","description":"Implementation of new <strong>Svelte</strong> components of the web application, improvement of existing components. Standardization of the output to a <strong>responsive, mobile-first</strong> approach using <strong>SASS</strong>. Working on the verge of back-end and front-end with <strong>WordPress as headless CMS</strong>. Effective translation of UI designs to code implementations."},{"position":"Freelance web developer","duration":"Feb 2020 - Present","company":"Freelance","location":"Remote","description":"Design, build and maintenance of responsive websites for small businesses, using <strong>Wordpress</strong>, <strong>JavaScript</strong>, <strong>SASS</strong> and <strong>HTML</strong>. Handling all verbal and written communications with clients and hosting companies. Meeting with clients to review website designs and gather their feedback."}],"education":[{"name":"Cracow University of Technology","degree":"MSc in Architecture and Urban Planning","duration":"Feb 2019 - Sep 2020","location":"Cracow"},{"name":"Lublin University of Technology","degree":"BSc in Architecture and Urban Planning","duration":"Oct 2015 - Jan 2019","location":"Lublin"}],"skills":["React.js","JavaScript","TypeScript","Redux","Svelte.js","HTML","CSS","SASS/SCSS","Bootstrap","react-bootstrap","styled-components","stitches.js","Radix UI","formik","material-ui","git/github"],"interests":["Design","Architecture","Snowboarding","Dogs\ud83d\udc36"]}')},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(1),i=t.n(s),a=t(6),o=t.n(a),r=(t(13),t(2)),c=(t(14),t(15),t(0));function l(e){return Object(c.jsxs)("div",{className:"contact-info",children:[Object(c.jsx)("span",{className:"email",children:Object(c.jsx)("a",{href:"mailto:".concat(e.email),target:"_blank",rel:"noopener noreferrer",children:e.email})}),Object(c.jsx)("span",{className:"phone",children:e.phoneNumber}),Object(c.jsxs)("span",{className:"social-icons",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/grzegorz-patyk",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("i",{className:"fab fa-linkedin"})}),Object(c.jsx)("a",{href:"https://github.com/grzegorzxpatyk",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("i",{className:"fab fa-github-square"})})]})]})}function d(e){return Object(c.jsxs)("header",{className:"bio",children:[Object(c.jsxs)("h1",{className:"full-name",children:[Object(c.jsx)("span",{className:"first-name",children:e.firstName}),Object(c.jsx)("span",{className:"last-name",children:e.lastName})]}),Object(c.jsxs)("section",{className:"title-contact",children:[Object(c.jsx)("h3",{className:"title",children:e.title}),Object(c.jsx)(l,Object(r.a)({},e))]}),Object(c.jsx)("h2",{className:"section-title",children:"Profile"}),Object(c.jsx)("div",{className:"about",children:e.about})]})}t(17);function b(e){return Object(c.jsxs)("div",{className:"school",children:[Object(c.jsxs)("h3",{className:"school-name",children:[Object(c.jsx)("span",{children:e.name}),Object(c.jsx)("span",{className:"duration",children:e.duration})]}),Object(c.jsxs)("div",{className:"school-details",children:[Object(c.jsx)("span",{className:"degree",children:e.degree}),Object(c.jsx)("span",{className:"location",children:e.location})]})]})}function p(e){return Object(c.jsxs)("section",{className:"education",children:[Object(c.jsx)("h2",{className:"section-title",children:"Education"}),e.schools.map((function(e,n){return Object(c.jsx)(b,Object(r.a)({},e),n)}))]})}function m(e){return Object(c.jsxs)("div",{className:"job",children:[Object(c.jsxs)("h3",{className:"job-position",children:[Object(c.jsx)("span",{children:e.position}),Object(c.jsx)("span",{className:"duration",children:e.duration})]}),Object(c.jsxs)("div",{className:"job-details",children:[Object(c.jsx)("span",{className:"company",children:e.company}),Object(c.jsx)("span",{className:"location",children:e.location}),Object(c.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:"".concat(e.description)}})]})]})}t(18);function j(e){return Object(c.jsxs)("section",{className:"experience",children:[Object(c.jsx)("h2",{className:"section-title",children:"Experience"}),e.jobs.map((function(e,n){return Object(c.jsx)(m,Object(r.a)({},e),n)}))]})}t(19);function u(e){return Object(c.jsxs)("section",{className:"skills",children:[Object(c.jsx)("h3",{className:"section-title",children:"Technologies"}),Object(c.jsx)("div",{className:"skills-list",children:e.skills.map((function(n,t){return Object(c.jsxs)("span",{className:"skill",children:[n,t===e.skills.length-1?".":", "]})}))})]})}t(20);function h(e){return Object(c.jsxs)("main",{className:"resume",children:[Object(c.jsx)(d,Object(r.a)({},e.bio)),Object(c.jsx)(j,{jobs:e.experience}),Object(c.jsx)(p,{schools:e.education}),Object(c.jsx)(u,{skills:e.skills})]})}var g=t(7),f=t(8),x=t(3),O=Object(f.a)("button",{all:"unset",padding:".6rem 1rem",margin:".4rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:".4rem",cursor:"pointer",fontWeight:600,transition:"transform .08s ease-in-out","&:active":{transform:"translate(0, 2px) scale(0.95)"},"&:focus":{outline:"3px solid ".concat(x.a.blueA9),boxShadow:"0 0 15px ".concat(x.a.blueA9)},"@media print":{display:"none"},variants:{variant:{default:{background:x.b.slate12,color:x.b.slate6,"&:hover":{background:x.b.slate11}},outlined:{backgroundColor:"#ffffff00",backdropFilter:"blur(1px)",transition:"transform .08s ease-in-out, backdrop-filter .15s ease-in-out, background-color 0.3s ease-in-out",color:x.b.slate12,border:"1px solid ".concat(x.b.slate11),"&:hover":{backdropFilter:"blur(2px)",backgroundColor:x.c.slateA6}}}},defaultVariants:{variant:"default"}});var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,Object(r.a)({},g)),Object(c.jsx)(O,{onClick:function(){return window.print()},css:{position:"fixed",bottom:"3vh",right:"3vw"},children:"Print"})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.927a3247.chunk.js.map