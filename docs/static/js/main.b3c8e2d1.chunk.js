(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.c2a8512d.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},40:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.5705ed98.png"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.31887912.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.7192f376.png"},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(21),n=a.n(l),o=a(5),s=a(8),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(o.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},v=a(11),u=a(3),p=a.n(u),h=a(17),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(v.a)(a,2),n=l[0],o=l[1],s=Object(i.useState)([]),c=Object(v.a)(s,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(h.throttle)((function(){b(),p()}),30),E=Object(h.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:p.a.func.isRequired};var f=b,E=a(13),g=(a(33),a(7)),N=function(){return r.a.createElement("div",{class:"easter-egg-avocado"},r.a.createElement("div",{class:"nav"},r.a.createElement(g.a,{to:"/portfolio"},"Home")),"immortality",r.a.createElement("div",{class:"onepiece"},r.a.createElement(g.a,{to:"https://www.tiktok.com/@pmckane69/video/6958344533880966406"},"single")),r.a.createElement("batman",null,"oak"))},w=a(1),O=a.n(w),y=["className","src","width","height","alt"],j=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,o=e.alt,s=Object(c.a)(e,y),m=Object(i.useState)(!1),d=Object(v.a)(m,2),u=d[0],p=d[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},s,{ref:h,className:t,src:a,width:l,height:n,alt:o,onLoad:function(){p(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=j,x=["className"],C=function(e){var t=e.className,i=Object(c.a)(e,x),l=O()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(g.a,{to:"/"},r.a.createElement(D,{src:a(34),alt:"Open",width:32,height:32}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],L=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,k),d=Object(i.useState)(!1),u=Object(v.a)(d,2),p=u[0],h=u[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",w),document.addEventListener("click",y),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",y),N()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},w=function(e){p&&27===e.keyCode&&N()},y=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==f.current&&N()},j=O()("site-header",o&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:j}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:O()("site-header-inner",s&&"has-bottom-divider")},r.a.createElement(C,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?N:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:O()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:O()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(g.a,{to:"#0",onClick:N},"Documentation"))),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Sign up")))))))))};L.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var S=L,F=["className"],A=function(e){var t=e.className,a=Object(c.a)(e,F),i=O()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"#0"},"Contact")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"#0"},"About us")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"#0"},"FAQ's")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"#0"},"Support"))))},P=["className"],B=function(e){var t=e.className,a=Object(c.a)(e,P),i=O()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://google.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},H=["className","topOuterDivider","topDivider"],T=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(c.a)(e,H),n=O()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:O()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(C,null),r.a.createElement(B,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(A,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"/portfolio/easter-egg"},"Cruip"),". All right reserved")))))};T.defaultProps={topOuterDivider:!1,topDivider:!1};var M=T,z=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(M,null))},R=a(4),I={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},_={types:Object(R.a)({},I.types),defaults:Object(R.a)({},I.defaults)},V={types:Object(R.a)(Object(R.a)({},I.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(R.a)(Object(R.a)({},I.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},W={types:Object(R.a)(Object(R.a)({},I.types),{},{pushLeft:p.a.bool}),defaults:Object(R.a)(Object(R.a)({},I.defaults),{},{pushLeft:!1})},G=["className"],K=function(e){var t=e.className,a=Object(c.a)(e,G),i=O()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},q=["className","tag","color","size","loading","wide","wideMobile","disabled"],U=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,q),v=O()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),u=a;return r.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};U.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var J=U,Q=["className","children","handleClose","show","closeHidden","video","videoTag"],Y=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,Q);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",p),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},h=O()("modal",n&&"is-active",s&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:h,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},s?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:s})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};Y.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var $=Y,X=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],Z=Object(R.a)({},_.defaults),ee=function(e){var t=e.className,l=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,u=Object(c.a)(e,X),p=Object(i.useState)(!1),h=Object(v.a)(p,2),b=h[0],f=h[1],E=O()("hero section center-content",l&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),g=O()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},u,{className:E}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:g},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Samuel Cruz ",r.a.createElement("span",{className:"text-color-primary"})),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"just a normal guy from Costa Rica who enjoys video games and sports"),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(K,null,r.a.createElement(J,{tag:"a",color:"dark",wideMobile:!0,href:"/portfolio/easter-egg"},"More info"),r.a.createElement(J,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"exclusiveness"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},r.a.createElement(D,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))),r.a.createElement($,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};ee.defaultProps=Z;var te=ee,ae=["className","data","children","tag"],ie=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(c.a)(e,ae),o=O()("section-header",t),s=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:o}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(s,{className:O()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};ie.defaultProps={children:null,tag:"h2"};var re=ie,le=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ne=Object(R.a)({},W.defaults),oe=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,le),u=O()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=O()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",o&&"has-bottom-divider"),h=O()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},v,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(re,{data:{title:"Get the Whole Picture",paragraph:"some extra and a summary of what I do and what i like"},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(D,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"tennis"),r.a.createElement("p",{className:"m-0 text-sm"},"started playing tennis when I was 14 got to be 8 in my country and 1600 in the world played at college level for four year.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(D,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Video Games")," Enjoy playing different types of video games some like God of War, Need for Speed and in an amazing love/hate relationship with FIFA",r.a.createElement("p",{className:"m-0 text-sm"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(D,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Childhood"),r.a.createElement("p",{className:"m-0 text-sm"},"Grew up in Costa Rica in a big city entered school when I was 5, used to practice different sports, loved the adrenaline of doing risky stuff")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(D,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Sports"),r.a.createElement("p",{className:"m-0 text-sm"},"Started Doing Sports when I was 3 months old doing swimming, at 2 years started playing soccer at age 4 started some martial arts like Kenpo Karate, Taekwondo, and boxing."))))))))};oe.defaultProps=ne;var se=oe,ce=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],me=Object(R.a)({},V.defaults),de=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(c.a)(e,ce),b=O()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=O()("features-split-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider"),E=O()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(re,{data:{title:"Other"},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"more about me"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Qualities"),r.a.createElement("p",{className:"m-0"},"Thanks to the many sports that I played im a respectful person, pretty chill, and many more.")),r.a.createElement("div",{className:O()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(D,{src:a(40),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),r.a.createElement("h3",{className:"mt-0 mb-12"},"School"),r.a.createElement("p",{className:"m-0"},"Graduated in 2017 from Costa Rica Christian School, went to University Of South Carolina Sumter (junior college), currently enrolled at Southwestern College                   ")),r.a.createElement("div",{className:O()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(D,{src:a(41),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),r.a.createElement("h3",{className:"mt-0 mb-12"}),r.a.createElement("p",{className:"m-0"})),r.a.createElement("div",{className:O()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(D,{src:a(42),alt:"Features split 03",width:528,height:396})))))))};de.defaultProps=me;var ve=de,ue=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],pe=Object(R.a)({},W.defaults),he=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,ue),v=O()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),u=O()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=O()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement(re,{data:{title:"Customer testimonials",paragraph:"some words from random people about me before they got to meet me "},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 I hated you because of the way you walk.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Anon"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"})))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 You look like you believe that you owned the world.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Anon"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"})))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 I looked at you entering through the door the first day of class and i instantly hated you.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Anon"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"}))))))))};he.defaultProps=pe;var be=he,fe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ee=Object(R.a)(Object(R.a)({},_.defaults),{},{split:!1}),ge=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=(e.topDivider,e.bottomDivider,e.hasBgColor),n=e.invertColor,o=(e.split,Object(c.a)(e,fe)),s=O()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",n&&"invert-color",t);return r.a.createElement("section",Object.assign({},o,{className:s}),r.a.createElement("div",{className:"container"}))};ge.defaultProps=Ee;var Ne=ge,we=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{className:"illustration-section-01"}),r.a.createElement(se,null),r.a.createElement(ve,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(be,{topDivider:!0}),r.a.createElement(Ne,{split:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Oe=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(o.c,null,r.a.createElement(d,{exact:!0,path:"/portfolio",component:we,layout:z}),r.a.createElement(d,{exact:!0,path:"/portfolio/easter-egg",component:N}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43);var ye=Object(s.a)();n.a.render(r.a.createElement(o.b,{history:ye},r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b3c8e2d1.chunk.js.map