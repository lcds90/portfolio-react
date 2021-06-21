(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{105:function(e,t,o){},108:function(e,t,o){},109:function(e,t,o){},126:function(e,t,o){},127:function(e,t,o){"use strict";o.r(t);var a=o(0),i=o.n(a),n=o(11),r=o.n(n),c=(o(99),o(17)),s=o(39),l=o(73),d=o(166),m=o(2),j=Object(l.a)((function(e){return{message:{width:"50vw",height:"25vh",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",color:"var(--theme-alt-one)",fontSize:"2.5rem",borderRadius:"25px",transition:"background-color 2s"}}})),g=function(){var e=new Date;return e=e.getHours(),e>=6&&e<=12?"Bom Dia!":e>12&&e<=18?"Boa Tarde!":e>18&&e<=23?"Boa Noite!":"Ol\xe1!"},b=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),o=Object(a.useRef)(null),i=Object(a.useRef)(null),n=j();return Object(a.useEffect)((function(){var a=s.a.timeline({defaults:{duration:2,ease:"power2"}}),n=s.a.timeline({defaults:{duration:3,ease:"power3"}}),r=s.a.timeline({defaults:{duration:2,ease:"linear"}});a.from(i.current,{opacity:0,backgroundColor:"var(--theme-dark)",duration:2.5,x:200}),a.to(i.current,{backgroundColor:"",duration:2.5}),a.to(i.current,{x:25,y:25,ease:"bounce",duration:2.5}),n.from(o.current,{opacity:0,backgroundColor:"",duration:2.5,x:200}),n.to(o.current,{backgroundColor:"var(--theme-dark)",duration:2.5}),n.to(o.current,{x:-25,y:-25,ease:"bounce",backgroundColor:"",duration:2.5}),r.fromTo(t.current,{duration:4,width:"100vw",height:"2px",backgroundColor:"var(--theme-light)",borderWidth:0},{width:"0%"}),r.fromTo(e.current,{duration:4,width:"100vw",height:"2px",backgroundColor:"var(--theme-alt-one)",borderWidth:0},{width:"0%"},"-=1"),r.fromTo(e.current,{duration:4,width:"0%",height:"2px",backgroundColor:"var(--theme-alt-one)",borderWidth:0},{width:"100%",opacity:0}),r.fromTo(t.current,{duration:4,width:"0%",height:"2px",backgroundColor:"var(--theme-alt-one)",borderWidth:0},{width:"100%",opacity:0},"-=1"),r.set(t.current,{display:"none"}),r.set(e.current,{display:"none"})}),[i,t,e,o]),Object(m.jsx)("div",{children:Object(m.jsxs)(d.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"80vh",justifyContent:"center",children:[Object(m.jsx)("hr",{ref:e}),Object(m.jsx)("span",{className:n.message,ref:i,children:g()}),Object(m.jsx)("hr",{ref:t}),Object(m.jsx)("span",{className:n.message,ref:o,children:"Seja bem vindo ao meu portf\xf3lio!"})]})})},p=(o(105),function(){return Object(m.jsx)("section",{children:Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("div",{className:"person",children:Object(m.jsx)("img",{src:"/img/profile.png",alt:"Foto de Leonardo Santos"})}),Object(m.jsx)("div",{className:"title",children:Object(m.jsxs)("h1",{children:[Object(m.jsx)("p",{children:"Ol\xe1!"}),Object(m.jsx)("p",{children:"Sou Leonardo Santos"}),Object(m.jsx)("p",{children:"Bem vindo ao meu portf\xf3lio!"})]})})]})})}),u=o(37),h=o.n(u),x=Object(l.a)((function(e){return{root:{width:"100%",fontSize:"1.2rem"},heading:{margin:"40px 0",borderBottom:"2px double var(--theme-light)",fontWeight:"400",fontStyle:"italic",color:"var(--theme-dark)"}}})),f=function(){var e=x();return Object(m.jsxs)(d.a,{className:e.root,flexGrow:"1",margin:"5vh 0",children:[Object(m.jsx)("h1",{className:e.heading,children:"Sobre mim"}),Object(m.jsx)(h.a,{offset:400,duration:1,animateIn:"fadeInDown",animateOut:"fadeOutUp",children:Object(m.jsx)("p",{children:"Desde cedo sempre fui apaixonado por tecnologia, e explorar-la s\xf3 me faz cada vez mais estudar sobre o assunto."})}),Object(m.jsxs)(h.a,{offset:400,duration:1,animateIn:"fadeInUp",animateOut:"fadeOutDown",children:[Object(m.jsx)("p",{children:"Atrav\xe9s da influ\xeancia que tive desde cedo atrav\xe9s de jogos, acabei me interessando por quest\xf5es sobre o desenvolvimento de tecnologias."}),Object(m.jsx)("p",{children:"Seguindo dessa ambi\xe7\xe3o que obtive e reflex\xe3o sobre os avan\xe7os da tecnologia com o tempo, busquei determina\xe7\xe3o para prosseguir e seguir minha forma\xe7\xe3o voltado para a \xe1rea do desenvolvimento."}),Object(m.jsx)("p",{children:"Bolsista do ProUni realizei tecnol\xf3go especializado em sistemas para internet e atualmente estou evoluindo estudando sobre Desenvolvimento Web na Trybe."})]})]})},O=o(155),v=o(157),k=o(154),w=o(74),y=(o(108),function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:"contact",children:Object(m.jsx)("em",{children:"Contato"})}),Object(m.jsx)("div",{className:"circle-img",children:Object(m.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://github.com/lcds90",children:Object(m.jsx)("img",{src:"".concat("","/svg/github.svg"),alt:"Github"})})}),Object(m.jsx)("div",{className:"circle-img",children:Object(m.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"mailto:lcds90@gmail.com",children:Object(m.jsx)("img",{src:"".concat("","/svg/gmail.svg"),alt:"Gmail"})})}),Object(m.jsx)("div",{className:"circle-img",children:Object(m.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/lcds90/",children:Object(m.jsx)("img",{src:"".concat("","/svg/linkedin.svg"),alt:"Linkedin"})})}),Object(m.jsx)("div",{className:"circle-img",children:Object(m.jsx)("img",{src:"".concat("","/svg/telegram.svg"),alt:"Telegram"})}),Object(m.jsx)("div",{className:"circle-img",children:Object(m.jsx)("img",{src:"".concat("","/svg/whatsapp.svg"),alt:"Whatsapp"})})]})});function N(e){var t=e.children,o=e.window,a=Object(k.a)({target:o?o():void 0});return Object(m.jsx)(w.a,{appear:!1,direction:"down",in:!a,children:t})}function C(e){return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)(N,Object(c.a)(Object(c.a)({},e),{},{children:Object(m.jsx)(O.a,{color:"transparent",elevation:0,children:Object(m.jsx)(v.a,{children:Object(m.jsx)(y,{})})})}))})}o(109);var S=[{id:"todo",title:"[Projeto] To Do List",description:"Lista de tarefas com Javascript",info:"Este projeto consiste em uma lista de tarefas, onde \xe9 poss\xedvel selecionar tarefas, marcar como finalizadas e salvar em local storage, utilizado bibliotecas: sweerAlert (alertas) e GSAP (anima\xe7\xf5es).",techs:"HTML, CSS, Javascript, Greensock, sweetAlert2",links:{deploy:"http://todo.lcds.me/",github:"https://github.com/lcds90/project-todo-list"},images:["/img/projects/todo-desktop.png","/img/projects/todo-mobile.png"]},{id:"cotacoes",title:"[Projeto] Cota\xe7\xf5es Financeiras",description:"Dashboard de cota\xe7\xf5es com Angular e Spring Boot",info:"Este projeto consiste em um dashobard de lista de cota\xe7\xf5es, o projeto foi realizado com o framework front-end Angular e tendo como back end Java, atrav\xe9s de uma API realizada com Spring Boot. https://redirect.is/cotacoesjava https://redirect.is/gitjava",techs:"Angular, Java (Spring Boot)",links:{deploy:"https://lcds90.github.io/cotacoes-santander-ng/dashboard",github:"https://github.com/lcds90/cotacoes-santander-ng"},images:["/img/projects/cotacoes-front.png","/img/projects/cotacoes-back.png"]},{id:"gameDino",title:"[Jogo] Dino Run",description:"Jogo baseado no jogo do dinossauro do navegador Google Chrome",info:"Este projeto consiste em um jogo do dinossauro com tecnologias Web, recriando com o cores o cl\xe1ssico do navegador Google Chrome quando n\xe3o h\xe1 conex\xe3o dispon\xedvel para navegar na internet.",techs:"HTML, CSS, Javascript",links:{deploy:"http://game-dino.lcds.me/",github:"https://github.com/lcds90/game-dino"},images:["/img/projects/game-dino.png","/img/projects/game-dino2.png","/img/projects/game-dino3.png"]},{id:"gameGenius",title:"[Jogo] Genius",description:"Recria\xe7\xe3o web baseado no jogo Genius",info:"Este projeto consiste na recria\xe7\xe3o do jogo Genius com tecnologias Web, possui trilha sonora pr\xf3pria e aux\xedlio da biblioteca sweetalert para alertas.",techs:"HTML, CSS, Javascript",links:{deploy:"http://game-genius.lcds.me/",github:"https://github.com/lcds90/game-genius"},images:["/img/projects/game-genius.png","/img/projects/game-genius2.png"]},{id:"gameRescue",title:"[Jogo] Rescue",description:"Jogo espacial contra naves espaciais",info:"Este projeto consiste em um jogo onde voc\xea controla uma espacionave, precisa sempre estar atento para proteger seu companheiro espacial e acabar com os inimigos, construido com tecnologias web.",techs:"HTML, CSS, Javascript, Jquery",links:{deploy:"http://game-rescue.lcds.me/",github:"https://github.com/lcds90/game-resgate"},images:["/img/projects/game-rescue.png","/img/projects/game-rescue2.png","/img/projects/game-rescue3.png"]},{id:"gameMemory",title:"[Jogo] Mem\xf3ria Web",description:"Jogo de mem\xf3ria realizado sobre tecnologias Web",info:"Este projeto consiste em um jogo de mem\xf3ria com tecnologias Web, utilizando as tecnologias padr\xf5es com manipula\xe7\xe3o de DOM e identifa\xe7\xe3o de padr\xf5es para reconhecimento da mesma tecnologia ao ser escolhida.",techs:"HTML, CSS, Javascript",links:{deploy:"http://game-memory.lcds.me/",github:"https://github.com/lcds90/game-memory"},images:["/img/projects/game-memory-desktop.png","/img/projects/game-memory-desktop2.png","/img/projects/game-memory-mobile.png","/img/projects/game-memory-mobile2.png"]},{id:"netflix",title:"[R\xe9plica] Netflix",description:"Clone de interface do Netflix",info:"Este projeto consiste em um clone da interface do servi\xe7o de streaming Netflix, por\xe9m no projeto foi utilizado a API do themoviedb para mostrar o catalogo de filmes e s\xe9ries exibidas",techs:"HTML, CSS, Javascript",links:{deploy:"http://netflix.lcds.me/",github:"https://github.com/lcds90/project-netflix"},images:["/img/projects/netflix-desktop.png","/img/projects/netflix-desktop2.png","/img/projects/netflix-desktop3.png","/img/projects/netflix-mobile.png","/img/projects/netflix-mobile2.png"]},{id:"instagram",title:"[R\xe9plica] Instagram",description:"Clone de interface de Login do Instagram",info:"Este projeto consiste em um clone da interface da tela de login do Instagram.",techs:"HTML, CSS, Javascript",links:{deploy:"http://instagram.lcds.me/",github:"https://github.com/lcds90/project-instagram"},images:["/img/projects/instagram-desktop.png","/img/projects/instagram-mobile.png"]}],I=o(164),R=o(4),T=o(168),z=o(160),J=o(158),L=o(162),B=o(159),D=o(78),H=o.n(D),A=o(163),W=o(161),E=o(80),G=o.n(E),M=o(79),P=o.n(M),F=Object(l.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:700,letterSpacing:"2px",borderRight:"2px gray double",padding:"1vh 1vw"},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,padding:"1vh 1vw"},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center",background:"var(--theme-dark)",color:"white"},actions:{background:"var(--theme-alt-one)"},buttons:{background:"grey",borderRadius:"5px"},column:{flexBasis:"50%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},accordion:{backgroundColor:"silver"},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));var q=function(e){var t=e.project,o=F();return Object(m.jsx)("div",{className:o.root,children:Object(m.jsxs)(T.a,{className:o.accordion,children:[Object(m.jsxs)(J.a,{expandIcon:Object(m.jsx)(H.a,{}),"aria-controls":"panel1c-content",id:"panel1c-header",children:[Object(m.jsx)("div",{className:o.column,children:Object(m.jsx)(B.a,{className:o.heading,children:t.title})}),Object(m.jsx)("div",{className:o.column,children:Object(m.jsx)(B.a,{className:o.secondaryHeading,children:t.description})})]}),Object(m.jsxs)(z.a,{className:o.details,children:[Object(m.jsx)("div",{className:o.column,children:t.info}),Object(m.jsx)("div",{className:Object(R.a)(o.column,o.helper),children:Object(m.jsxs)(B.a,{variant:"caption",children:[Object(m.jsx)("em",{children:"Tecnologias utilizadas"})," ",Object(m.jsx)("br",{}),t.techs]})})]}),Object(m.jsx)(W.a,{}),Object(m.jsxs)(L.a,{className:o.actions,children:[Object(m.jsx)(A.a,{href:t.links.deploy,target:"_blank",className:o.buttons,size:"small",children:Object(m.jsx)(P.a,{})}),Object(m.jsx)(A.a,{href:t.links.github,target:"_blank",className:o.buttons,size:"small",children:Object(m.jsx)(G.a,{})})]})]})})},_=o(21),U=o(167),V=o(68),K=o(82),Q=o.n(K),X=o(81),Y=o.n(X),Z=o(75),$=Object(l.a)((function(e){return{appBar:{position:"relative",backgroundColor:"var(--theme-dark)"},title:{marginLeft:e.spacing(2),flex:1},img:{width:"100%",height:"700px",objectFit:"contain"},carousel:{display:"flex",justifyContent:"center",alignItems:"center"}}})),ee=i.a.forwardRef((function(e,t){return Object(m.jsx)(Z.a,Object(c.a)({ref:t},e))})),te=function(e,t){var o=$();return Object(m.jsx)("img",{id:"image"+t,className:o.img,src:e,alt:""},t)};function oe(e){var t=$(),o=i.a.useState(!1),a=Object(_.a)(o,2),n=a[0],r=a[1],c=function(){r(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(A.a,{variant:"contained",color:"primary",onClick:function(){r(!0)},children:"Abrir imagens do projeto"}),Object(m.jsxs)(U.a,{disableScrollLock:!0,open:n,onClose:c,TransitionComponent:ee,children:[Object(m.jsx)(O.a,{className:t.appBar,children:Object(m.jsxs)(v.a,{children:[Object(m.jsx)(V.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"close",children:Object(m.jsx)(Q.a,{})}),Object(m.jsxs)(B.a,{variant:"h6",className:t.title,children:[e.project.title," - ",e.project.description]})]})}),Object(m.jsx)(d.a,{children:Object(m.jsx)(Y.a,{className:t.carousel,fullHeightHover:!1,animation:"fade",indicators:!1,navButtonsAlwaysVisible:"true",children:e.project.images.map(te)})})]})]})}var ae=function(e){var t=Object(l.a)((function(t){return{box:{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(e.project.images[0],")"),filter:"blur(1px)"},boxBtn:{transform:"translate(-50%, -50%)",top:"50%",left:"50%",position:"absolute"}}}))();return Object(m.jsxs)("section",{style:{position:"relative"},children:[Object(m.jsx)(d.a,{overflow:"hidden",width:"100%",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 5px 10px var(--theme-dark)",border:"2px double var(--theme-light)",className:t.box}),Object(m.jsx)(d.a,{className:t.boxBtn,children:Object(m.jsx)(oe,{project:e.project})})]})},ie=Object(l.a)((function(e){return{root:{width:"100%"},line:{margin:"0 0 30vh 0"}}})),ne=function(e){var t=(e.target.ownerDocument||document).querySelector("#".concat(e.target.attributes.anchor.textContent));t&&t.scrollIntoView({behavior:"smooth",block:"center"})},re=function(e){return Object(m.jsx)("div",{onClick:ne,className:"project-title",anchor:e.id,children:e.title},e.id)},ce=function(e){var t=ie();return Object(m.jsx)("li",{id:e.id,className:t.line,children:Object(m.jsxs)(I.a,{justify:"center",alignItems:"center",container:!0,spacing:3,children:[Object(m.jsx)(I.a,{item:!0,md:6,xs:12,children:Object(m.jsx)(h.a,{offset:300,duration:1,animateIn:"backInLeft",animateOut:"backOutRight",children:Object(m.jsx)(q,{project:e})})}),Object(m.jsx)(I.a,{item:!0,md:6,xs:12,children:Object(m.jsx)(h.a,{offset:300,duration:2,animateIn:"backInRight ",animateOut:"backOutLeft",children:Object(m.jsx)(ae,{project:e})})})]})},e.id)};function se(e){var t=e.children,o=window.screen.width<=768,a=Object(k.a)({disableHysteresis:!0,threshold:o?1e3:800});return Object(m.jsx)(w.a,{direction:"right",in:a,children:t})}var le=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"projects",children:[Object(m.jsx)("h1",{children:"Projetos"}),Object(m.jsx)("ul",{children:S.map(ce)})]}),Object(m.jsx)(se,Object(c.a)(Object(c.a)({},e),{},{children:Object(m.jsx)("div",{className:"navbar",children:S.map(re)})}))]})},de=o(165),me=o(83),je=o.n(me),ge=(o(125),o(126),Object(l.a)((function(e){return{fab:{position:"fixed",right:"0vw",bottom:0,backgroundColor:"var(--theme-alt-one)"}}})));function be(e){var t=e.children,o=e.window,a=Object(k.a)({target:o?o():void 0,disableHysteresis:!0,threshold:100});return Object(m.jsx)(Z.a,{in:a,children:Object(m.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",children:t})})}var pe=function(e){var t=ge(),o=Object(a.useRef)(null),i=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=s.a.timeline({defaults:{duration:2}});e.set(".app",{overflow:"hidden"}),e.to(o.current,{opacity:0,delay:10,duration:2}),e.set(o.current,{display:"none"}),e.set(i.current,{display:"block"}),e.set(".app",{overflow:"normal"}),e.from(i.current,{opacity:0,duration:2})}),[o,i]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{id:"intro",ref:o,children:Object(m.jsx)(b,{})}),Object(m.jsxs)("div",{ref:i,id:"page",children:[Object(m.jsx)(C,{}),Object(m.jsx)(v.a,{id:"back-to-top-anchor"}),Object(m.jsx)(p,{}),Object(m.jsx)(f,{}),Object(m.jsx)(le,{}),Object(m.jsx)(be,Object(c.a)(Object(c.a)({},e),{},{children:Object(m.jsx)(de.a,{className:t.fab,size:"small","aria-label":"scroll back to top",children:Object(m.jsx)(je.a,{})})}))]})]})},ue=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,170)).then((function(t){var o=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(pe,{}),document.getElementById("root")),ue()},99:function(e,t,o){}},[[127,1,2]]]);
//# sourceMappingURL=main.2299bc5e.chunk.js.map