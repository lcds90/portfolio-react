(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{105:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(11),c=n.n(i),o=(n(99),n(17)),s=n(39),l=n(73),d=n(166),j=n(2),b=Object(l.a)((function(e){return{message:{width:"50vw",height:"25vh",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",color:"var(--theme-alt-one)",fontSize:"2.5rem",borderRadius:"25px",transition:"background-color 2s"}}})),h=function(){var e=new Date;return e=e.getHours(),e>=6&&e<=12?"Bom Dia!":e>12&&e<=18?"Boa Tarde!":e>18&&e<=23?"Boa Noite!":"Ol\xe1!"},u=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useRef)(null),a=Object(r.useRef)(null),i=b();return Object(r.useEffect)((function(){var r=s.a.timeline({defaults:{duration:2,ease:"power2"}}),i=s.a.timeline({defaults:{duration:3,ease:"power3"}}),c=s.a.timeline({defaults:{duration:2,ease:"linear"}});r.from(a.current,{opacity:0,backgroundColor:"var(--theme-dark)",duration:2.5,x:200}),r.to(a.current,{backgroundColor:"",duration:2.5}),r.to(a.current,{x:25,y:25,ease:"bounce",duration:2.5}),i.from(n.current,{opacity:0,backgroundColor:"",duration:2.5,x:200}),i.to(n.current,{backgroundColor:"var(--theme-dark)",duration:2.5}),i.to(n.current,{x:-25,y:-25,ease:"bounce",backgroundColor:"",duration:2.5}),c.fromTo(t.current,{duration:4,width:"100vw",height:"2px",backgroundColor:"var(--theme-light)",borderWidth:0},{width:"0%"}),c.fromTo(e.current,{duration:4,width:"100vw",height:"2px",backgroundColor:"var(--theme-alt-one)",borderWidth:0},{width:"0%"},"-=1"),c.fromTo(e.current,{duration:4,width:"0%",height:"2px",backgroundColor:"var(--theme-alt-one)",borderWidth:0},{width:"100%",opacity:0}),c.fromTo(t.current,{duration:4,width:"0%",height:"2px",backgroundColor:"var(--theme-alt-one)",borderWidth:0},{width:"100%",opacity:0},"-=1"),c.set(t.current,{display:"none"}),c.set(e.current,{display:"none"})}),[a,t,e,n]),Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"80vh",justifyContent:"center",children:[Object(j.jsx)("hr",{ref:e}),Object(j.jsx)("span",{className:i.message,ref:a,children:h()}),Object(j.jsx)("hr",{ref:t}),Object(j.jsx)("span",{className:i.message,ref:n,children:"Seja bem vindo ao meu portf\xf3lio!"})]})})},m=(n(105),function(){return Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("div",{className:"person",children:Object(j.jsx)("img",{src:"/img/profile.png",alt:"Foto de Leonardo Santos"})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("p",{children:"Ol\xe1!"}),Object(j.jsx)("p",{children:"Sou Leonardo Santos"}),Object(j.jsx)("p",{children:"Bem vindo ao meu portf\xf3lio!"})]})})]})})}),x=n(37),p=n.n(x),g=Object(l.a)((function(e){return{root:{width:"100%",fontSize:"1.2rem"},heading:{margin:"40px 0",borderBottom:"2px double var(--theme-light)",fontWeight:"400",fontStyle:"italic",color:"var(--theme-dark)"}}})),f=function(){var e=g();return Object(j.jsxs)(d.a,{className:e.root,flexGrow:"1",margin:"5vh 0",children:[Object(j.jsx)("h1",{className:e.heading,children:"Sobre mim"}),Object(j.jsx)(p.a,{offset:400,duration:1,animateIn:"fadeInDown",animateOut:"fadeOutUp",children:Object(j.jsx)("p",{children:"Desde cedo sempre fui apaixonado por tecnologia, e explorar-la s\xf3 me faz cada vez mais estudar sobre o assunto."})}),Object(j.jsxs)(p.a,{offset:400,duration:1,animateIn:"fadeInUp",animateOut:"fadeOutDown",children:[Object(j.jsx)("p",{children:"Atrav\xe9s da influ\xeancia que tive desde cedo atrav\xe9s de jogos, acabei me interessando por quest\xf5es sobre o desenvolvimento de tecnologias."}),Object(j.jsx)("p",{children:"Seguindo dessa ambi\xe7\xe3o que obtive e reflex\xe3o sobre os avan\xe7os da tecnologia com o tempo, busquei determina\xe7\xe3o para prosseguir e seguir minha forma\xe7\xe3o voltado para a \xe1rea do desenvolvimento."}),Object(j.jsx)("p",{children:"Bolsista do ProUni realizei tecnol\xf3go especializado em sistemas para internet e atualmente estou evoluindo estudando sobre Desenvolvimento Web na Trybe."})]})]})},O=n(155),v=n(157),k=n(154),w=n(74),y=(n(108),function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{className:"contact",children:Object(j.jsx)("em",{children:"Contato"})}),Object(j.jsx)("div",{className:"circle-img",children:Object(j.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://github.com/lcds90",children:Object(j.jsx)("img",{src:"".concat("","/svg/github.svg"),alt:"Github"})})}),Object(j.jsx)("div",{className:"circle-img",children:Object(j.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"mailto:lcds90@gmail.com",children:Object(j.jsx)("img",{src:"".concat("","/svg/gmail.svg"),alt:"Gmail"})})}),Object(j.jsx)("div",{className:"circle-img",children:Object(j.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/lcds90/",children:Object(j.jsx)("img",{src:"".concat("","/svg/linkedin.svg"),alt:"Linkedin"})})}),Object(j.jsx)("div",{className:"circle-img",children:Object(j.jsx)("img",{src:"".concat("","/svg/telegram.svg"),alt:"Telegram"})}),Object(j.jsx)("div",{className:"circle-img",children:Object(j.jsx)("img",{src:"".concat("","/svg/whatsapp.svg"),alt:"Whatsapp"})})]})});function N(e){var t=e.children,n=e.window,r=Object(k.a)({target:n?n():void 0});return Object(j.jsx)(w.a,{appear:!1,direction:"down",in:!r,children:t})}function C(e){return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsx)(N,Object(o.a)(Object(o.a)({},e),{},{children:Object(j.jsx)(O.a,{color:"transparent",elevation:0,children:Object(j.jsx)(v.a,{children:Object(j.jsx)(y,{})})})}))})}n(109);var S=[{id:1,title:"[R\xe9plica] Netflix",description:"Clone de interface do Netflix",info:"Este projeto consiste em um clone da interface do servi\xe7o de streaming Netflix, por\xe9m no projeto foi utilizado a API do themoviedb para mostrar o catalogo de filmes e s\xe9ries exibidas",techs:"HTML, CSS, Javascript",links:{deploy:"http://netflix.lcds.me/",github:"https://github.com/lcds90/project-netflix"},images:["/img/projects/netflix-desktop.png","/img/projects/netflix-desktop2.png","/img/projects/netflix-desktop3.png","/img/projects/netflix-mobile.png","/img/projects/netflix-mobile2.png"]}],I=n(164),R=n(4),T=n(168),z=n(160),B=n(158),D=n(162),L=n(159),H=n(78),W=n.n(H),F=n(163),q=n(161),A=n(80),P=n.n(A),_=n(79),E=n.n(_),G=Object(l.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:700,letterSpacing:"2px",borderRight:"2px gray double",padding:"1vh 1vw"},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,padding:"1vh 1vw"},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center",background:"var(--theme-dark)",color:"white"},actions:{background:"var(--theme-alt-one)"},buttons:{background:"grey",borderRadius:"5px"},column:{flexBasis:"50%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},accordion:{backgroundColor:"silver"},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));var J=function(e){var t=e.project,n=G();return Object(j.jsx)("div",{className:n.root,children:Object(j.jsxs)(T.a,{className:n.accordion,children:[Object(j.jsxs)(B.a,{expandIcon:Object(j.jsx)(W.a,{}),"aria-controls":"panel1c-content",id:"panel1c-header",children:[Object(j.jsx)("div",{className:n.column,children:Object(j.jsx)(L.a,{className:n.heading,children:t.title})}),Object(j.jsx)("div",{className:n.column,children:Object(j.jsx)(L.a,{className:n.secondaryHeading,children:t.description})})]}),Object(j.jsxs)(z.a,{className:n.details,children:[Object(j.jsx)("div",{className:n.column,children:t.info}),Object(j.jsx)("div",{className:Object(R.a)(n.column,n.helper),children:Object(j.jsxs)(L.a,{variant:"caption",children:[Object(j.jsx)("em",{children:"Tecnologias utilizadas"})," ",Object(j.jsx)("br",{}),t.techs]})})]}),Object(j.jsx)(q.a,{}),Object(j.jsxs)(D.a,{className:n.actions,children:[Object(j.jsx)(F.a,{href:t.links.deploy,target:"_blank",className:n.buttons,size:"small",children:Object(j.jsx)(E.a,{})}),Object(j.jsx)(F.a,{href:t.links.github,target:"_blank",className:n.buttons,size:"small",children:Object(j.jsx)(P.a,{})})]})]})})},U=n(21),V=n(167),M=n(68),K=n(82),Q=n.n(K),X=n(81),Y=n.n(X),Z=n(75),$=Object(l.a)((function(e){return{appBar:{position:"relative",backgroundColor:"var(--theme-dark)"},title:{marginLeft:e.spacing(2),flex:1},img:{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"700px"}}})),ee=a.a.forwardRef((function(e,t){return Object(j.jsx)(Z.a,Object(o.a)({ref:t},e))})),te=function(e,t){var n=$();return Object(j.jsx)(d.a,{marginTop:"25px",display:"flex",justifyContent:"center",children:Object(j.jsx)("img",{id:"image"+t,className:n.img,src:e,alt:""},t)})};function ne(e){var t=$(),n=a.a.useState(!1),r=Object(U.a)(n,2),i=r[0],c=r[1],o=function(){c(!1)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){c(!0)},children:"Abrir imagens do projeto"}),Object(j.jsxs)(V.a,{disableScrollLock:!0,open:i,onClose:o,TransitionComponent:ee,children:[Object(j.jsx)(O.a,{className:t.appBar,children:Object(j.jsxs)(v.a,{children:[Object(j.jsx)(M.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",children:Object(j.jsx)(Q.a,{})}),Object(j.jsxs)(L.a,{variant:"h6",className:t.title,children:[e.project.title," - ",e.project.description]})]})}),Object(j.jsx)(d.a,{maxWidth:"550px",minHeight:"700px",children:Object(j.jsx)(Y.a,{fullHeightHover:!1,animation:"fade",indicators:!1,navButtonsAlwaysVisible:"true",children:e.project.images.map(te)})})]})]})}var re=function(e){var t=Object(l.a)((function(t){return{box:{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(e.project.images[0],")"),filter:"blur(1px)"},boxBtn:{transform:"translate(-50%, -50%)",top:"50%",left:"50%",position:"absolute"}}}))();return Object(j.jsxs)("section",{style:{position:"relative"},children:[Object(j.jsx)(d.a,{overflow:"hidden",width:"100%",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 5px 10px var(--theme-dark)",border:"2px double var(--theme-light)",className:t.box}),Object(j.jsx)(d.a,{className:t.boxBtn,children:Object(j.jsx)(ne,{project:e.project})})]})},ae=Object(l.a)((function(e){return{root:{width:"100%"},line:{margin:"10vh 0 30vh 0"}}})),ie=function(e){var t=(e.target.ownerDocument||document).querySelector("#".concat(e.target.attributes.anchor.textContent));t&&t.scrollIntoView({behavior:"smooth",block:"center"})},ce=function(e){return Object(j.jsx)("div",{onClick:ie,className:"project-title",anchor:e.title.split("")[0]+e.id,children:e.title},e.id)},oe=function(e){var t=ae();return Object(j.jsx)("li",{id:e.title.split("")[0]+e.id,className:t.line,children:Object(j.jsxs)(I.a,{justify:"center",alignItems:"center",container:!0,spacing:3,children:[Object(j.jsx)(I.a,{item:!0,md:6,xs:12,children:Object(j.jsx)(p.a,{offset:500,duration:1,animateIn:"backInLeft",animateOut:"backOutRight",children:Object(j.jsx)(J,{project:e})})}),Object(j.jsx)(I.a,{item:!0,md:6,xs:12,children:Object(j.jsx)(p.a,{offset:500,duration:2,animateIn:"backInRight ",animateOut:"backOutLeft",children:Object(j.jsx)(re,{project:e})})})]})},e.id)};function se(e){var t=e.children,n=window.screen.width<=768,r=Object(k.a)({disableHysteresis:!0,threshold:n?1e3:800});return Object(j.jsx)(w.a,{direction:"right",in:r,children:t})}var le=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"projects",children:[Object(j.jsx)("h1",{children:"Projetos"}),Object(j.jsx)("ul",{children:S.map(oe)})]}),Object(j.jsx)(se,Object(o.a)(Object(o.a)({},e),{},{children:Object(j.jsx)("div",{className:"navbar",children:S.map(ce)})}))]})},de=n(165),je=n(83),be=n.n(je),he=(n(125),n(126),Object(l.a)((function(e){return{fab:{position:"fixed",right:"0vw",bottom:0,backgroundColor:"var(--theme-alt-one)"}}})));function ue(e){var t=e.children,n=e.window,r=Object(k.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(j.jsx)(Z.a,{in:r,children:Object(j.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",children:t})})}var me=function(e){var t=he(),n=Object(r.useRef)(null),a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=s.a.timeline({defaults:{duration:2}});e.set(".app",{overflow:"hidden"}),e.to(n.current,{opacity:0,delay:10,duration:2}),e.set(n.current,{display:"none"}),e.set(a.current,{display:"block"}),e.set(".app",{overflow:"normal"}),e.from(a.current,{opacity:0,duration:2})}),[n,a]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{id:"intro",ref:n,children:Object(j.jsx)(u,{})}),Object(j.jsxs)("div",{ref:a,id:"page",children:[Object(j.jsx)(C,{}),Object(j.jsx)(v.a,{id:"back-to-top-anchor"}),Object(j.jsx)(m,{}),Object(j.jsx)(f,{}),Object(j.jsx)(le,{}),Object(j.jsx)(ue,Object(o.a)(Object(o.a)({},e),{},{children:Object(j.jsx)(de.a,{className:t.fab,size:"small","aria-label":"scroll back to top",children:Object(j.jsx)(be.a,{})})}))]})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,170)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(me,{}),document.getElementById("root")),xe()},99:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.af645ee5.chunk.js.map