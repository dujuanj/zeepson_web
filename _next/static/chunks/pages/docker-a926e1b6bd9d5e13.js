(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{1410:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docker",function(){return n(5969)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,l=n(1598).Z,a=n(7273).Z,s=l(n(7294)),o=i(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=i(n(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,i,l,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,o=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:l,qualityInt:o,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:h,placeholder:m,loading:p,srcString:v,config:b,unoptimized:w,loader:x,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:C,setShowAltText:E,onLoad:S,onError:N}=e,k=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},k,n,{width:l,height:i,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:p,style:r({},u,d),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&g(e,v,m,y,j,C,w))},[v,m,y,j,C,N,w,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,m,y,j,C,w)},onError:e=>{E(!0),"blur"===m&&C(!0),N&&N(e)}})))}),b=s.forwardRef((e,t)=>{let n,i;var l,{src:g,sizes:b,unoptimized:w=!1,priority:x=!1,loading:y,className:j,quality:C,width:E,height:S,fill:N,style:k,onLoad:_,onLoadingComplete:I,placeholder:R="empty",blurDataURL:Z,layout:z,objectFit:O,objectPosition:P,lazyBoundary:T,lazyRoot:L}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=s.useContext(d.ImageConfigContext),$=s.useMemo(()=>{let e=h||A||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[A]),D=M,B=D.loader||f.default;delete D.loader;let F="__next_img_default"in B;if(F){if("custom"===$.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=B;B=e=>{let{config:t}=e,n=a(e,["config"]);return W(n)}}if(z){"fill"===z&&(N=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];q&&(k=r({},k,q));let G={responsive:"100vw",fill:"100vw"}[z];G&&!b&&(b=G)}let V="",X=p(E),U=p(S);if("object"==typeof(l=g)&&(m(l)||void 0!==l.src)){let H=m(g)?g.default:g;if(!H.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(!H.height||!H.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)));if(n=H.blurWidth,i=H.blurHeight,Z=Z||H.blurDataURL,V=H.src,!N){if(X||U){if(X&&!U){let J=X/H.width;U=Math.round(H.height*J)}else if(!X&&U){let K=U/H.height;X=Math.round(H.width*K)}}else X=H.width,U=H.height}}let Q=!x&&("lazy"===y||void 0===y);((g="string"==typeof g?g:V).startsWith("data:")||g.startsWith("blob:"))&&(w=!0,Q=!1),$.unoptimized&&(w=!0),F&&g.endsWith(".svg")&&!$.dangerouslyAllowSVG&&(w=!0);let[Y,ee]=s.useState(!1),[et,en]=s.useState(!1),er=p(C),ei=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},et?{}:{color:"transparent"},k),el="blur"===R&&Z&&!Y?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:X,heightInt:U,blurWidth:n,blurHeight:i,blurDataURL:Z}),'")')}:{},ea=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:l,sizes:a,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let l=/(^|\s)(1?\d?\d)vw/g,a=[];for(let s;s=l.exec(n);s)a.push(parseInt(s[2]));if(a.length){let o=.01*Math.min(...a);return{widths:i.filter(e=>e>=r[0]*o),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),u=o.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:o.map((e,r)=>"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:s({config:t,src:n,quality:l,width:o[u]})}}({config:$,src:g,unoptimized:w,width:X,quality:er,sizes:b,loader:B}),es=g,eo={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:D.crossOrigin},ec=s.useRef(_);s.useEffect(()=>{ec.current=_},[_]);let eu=s.useRef(I);s.useEffect(()=>{eu.current=I},[I]);let ed=r({isLazy:Q,imgAttributes:ea,heightInt:U,widthInt:X,qualityInt:er,className:j,imgStyle:ei,blurStyle:el,loading:y,config:$,fill:N,unoptimized:w,placeholder:R,loader:B,srcString:es,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:en},D);return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,Object.assign({},ed,{ref:t})),x?s.default.createElement(o.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},eo))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:l}=e,a=r||t,s=i||n,o=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},5969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=n(7294),l=n(9370),a=n(9008),s=n.n(a),o=n(5675),c=n.n(o),u=n(6483);function d(){let[e,t]=(0,i.useState)(0),n=(e,n)=>{t(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"碳通科技"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,r.jsx)(l.Z,{href:"/"}),(0,r.jsxs)(u.Z,{activeIndex:e,onSelect:n,children:[(0,r.jsxs)(u.Z.Item,{children:[(0,r.jsx)(c(),{className:"d-block w-100",src:"/images/finace_home.png",alt:"me",width:800,height:300}),(0,r.jsxs)(u.Z.Caption,{children:[(0,r.jsx)("h1",{children:"docker"}),(0,r.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),(0,r.jsxs)(u.Z.Item,{children:[(0,r.jsx)(c(),{className:"d-block w-100",src:"/images/finace_home.png",alt:"Second slide",width:100,height:300}),(0,r.jsxs)(u.Z.Caption,{children:[(0,r.jsx)("h3",{children:"Second slide label"}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),(0,r.jsxs)(u.Z.Item,{children:[(0,r.jsx)(c(),{className:"d-block w-100",src:"/images/finace_home.png",alt:"Third slide",width:100,height:300}),(0,r.jsxs)(u.Z.Caption,{children:[(0,r.jsx)("h3",{children:"Third slide label"}),(0,r.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})]})}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},6483:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(8146),i=n(7294),l=function(e,t){var n=(0,i.useRef)(!0);(0,i.useEffect)(function(){if(n.current){n.current=!1;return}return e()},t)},a=n(2029),s=n(6454),o=n(6852),c=n(1819),u=n(4184),d=n.n(u),f=n(5446),h=(0,n(6611).Z)("carousel-caption"),m=n(6792),p=n(5893);let g=i.forwardRef(({as:e="div",bsPrefix:t,className:n,...r},i)=>{let l=d()(n,(0,m.vE)(t,"carousel-item"));return(0,p.jsx)(e,{ref:i,...r,className:l})});function v(e,t){let n=0;return i.Children.map(e,e=>i.isValidElement(e)?t(e,n++):e)}g.displayName="CarouselItem";var b=n(2646),w=n(4509),x=n(2785);let y={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},j=i.forwardRef((e,t)=>{var n,u,h;let g,y;let{as:j="div",bsPrefix:C,slide:E,fade:S,controls:N,indicators:k,indicatorLabels:_,activeIndex:I,onSelect:R,onSlide:Z,onSlid:z,interval:O,keyboard:P,onKeyDown:T,pause:L,onMouseOver:M,onMouseOut:A,wrap:$,touch:D,onTouchStart:B,onTouchMove:F,onTouchEnd:W,prevIcon:q,prevLabel:G,nextIcon:V,nextLabel:X,variant:U,className:H,children:J,...K}=(0,f.Ch)(e,{activeIndex:"onSelect"}),Q=(0,m.vE)(C,"carousel"),Y=(0,m.SC)(),ee=(0,i.useRef)(null),[et,en]=(0,i.useState)("next"),[er,ei]=(0,i.useState)(!1),[el,ea]=(0,i.useState)(!1),[es,eo]=(0,i.useState)(I||0);(0,i.useEffect)(()=>{el||I===es||(ee.current?en(ee.current):en((I||0)>es?"next":"prev"),E&&ea(!0),eo(I||0))},[I,el,es,E]),(0,i.useEffect)(()=>{ee.current&&(ee.current=null)});let ec=0;n=(e,t)=>{++ec,t===I&&(g=e.props.interval)},y=0,i.Children.forEach(J,e=>{i.isValidElement(e)&&n(e,y++)});let eu=(0,a.Z)(g),ed=(0,i.useCallback)(e=>{if(el)return;let t=es-1;if(t<0){if(!$)return;t=ec-1}ee.current="prev",null==R||R(t,e)},[el,es,R,$,ec]),ef=(0,r.Z)(e=>{if(el)return;let t=es+1;if(t>=ec){if(!$)return;t=0}ee.current="next",null==R||R(t,e)}),eh=(0,i.useRef)();(0,i.useImperativeHandle)(t,()=>({element:eh.current,prev:ed,next:ef}));let em=(0,r.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(eh.current)&&(Y?ed():ef())}),ep="next"===et?"start":"end";l(()=>{E||(null==Z||Z(es,ep),null==z||z(es,ep))},[es]);let eg=`${Q}-item-${et}`,ev=`${Q}-item-${ep}`,eb=(0,i.useCallback)(e=>{(0,w.Z)(e),null==Z||Z(es,ep)},[Z,es,ep]),ew=(0,i.useCallback)(()=>{ea(!1),null==z||z(es,ep)},[z,es,ep]),ex=(0,i.useCallback)(e=>{if(P&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),Y?ef(e):ed(e);return;case"ArrowRight":e.preventDefault(),Y?ed(e):ef(e);return}null==T||T(e)},[P,T,ed,ef,Y]),ey=(0,i.useCallback)(e=>{"hover"===L&&ei(!0),null==M||M(e)},[L,M]),ej=(0,i.useCallback)(e=>{ei(!1),null==A||A(e)},[A]),eC=(0,i.useRef)(0),eE=(0,i.useRef)(0),eS=(u=(0,s.Z)(),h=(0,i.useRef)(),(0,o.Z)(function(){return clearTimeout(h.current)}),(0,i.useMemo)(function(){var e=function(){return clearTimeout(h.current)};return{set:function(t,n){void 0===n&&(n=0),u()&&(e(),n<=2147483647?h.current=setTimeout(t,n):function e(t,n,r){var i=r-Date.now();t.current=i<=2147483647?setTimeout(n,i):setTimeout(function(){return e(t,n,r)},2147483647)}(h,t,Date.now()+n))},clear:e}},[])),eN=(0,i.useCallback)(e=>{eC.current=e.touches[0].clientX,eE.current=0,"hover"===L&&ei(!0),null==B||B(e)},[L,B]),ek=(0,i.useCallback)(e=>{e.touches&&e.touches.length>1?eE.current=0:eE.current=e.touches[0].clientX-eC.current,null==F||F(e)},[F]),e_=(0,i.useCallback)(e=>{if(D){let t=eE.current;Math.abs(t)>40&&(t>0?ed(e):ef(e))}"hover"===L&&eS.set(()=>{ei(!1)},O||void 0),null==W||W(e)},[D,L,ed,ef,eS,O,W]),eI=null!=O&&!er&&!el,eR=(0,i.useRef)();(0,i.useEffect)(()=>{var e,t;if(eI)return eR.current=window.setInterval(document.visibilityState?em:Y?ed:ef,null!=(e=null!=(t=eu.current)?t:O)?e:void 0),()=>{null!==eR.current&&clearInterval(eR.current)}},[eI,ed,ef,eu,O,em,Y]);let eZ=(0,i.useMemo)(()=>k&&Array.from({length:ec},(e,t)=>e=>{null==R||R(t,e)}),[k,ec,R]);return(0,p.jsxs)(j,{ref:eh,...K,onKeyDown:ex,onMouseOver:ey,onMouseOut:ej,onTouchStart:eN,onTouchMove:ek,onTouchEnd:e_,className:d()(H,Q,E&&"slide",S&&`${Q}-fade`,U&&`${Q}-${U}`),children:[k&&(0,p.jsx)("div",{className:`${Q}-indicators`,children:v(J,(e,t)=>(0,p.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=_&&_.length?_[t]:`Slide ${t+1}`,className:t===es?"active":void 0,onClick:eZ?eZ[t]:void 0,"aria-current":t===es},t))}),(0,p.jsx)("div",{className:`${Q}-inner`,children:v(J,(e,t)=>{let n=t===es;return E?(0,p.jsx)(x.Z,{in:n,onEnter:n?eb:void 0,onEntered:n?ew:void 0,addEndListener:b.Z,children:(t,r)=>i.cloneElement(e,{...r,className:d()(e.props.className,n&&"entered"!==t&&eg,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ev)})}):i.cloneElement(e,{className:d()(e.props.className,n&&"active")})})}),N&&(0,p.jsxs)(p.Fragment,{children:[($||0!==I)&&(0,p.jsxs)(c.Z,{className:`${Q}-control-prev`,onClick:ed,children:[q,G&&(0,p.jsx)("span",{className:"visually-hidden",children:G})]}),($||I!==ec-1)&&(0,p.jsxs)(c.Z,{className:`${Q}-control-next`,onClick:ef,children:[V,X&&(0,p.jsx)("span",{className:"visually-hidden",children:X})]})]})]})});j.displayName="Carousel",j.defaultProps=y;var C=Object.assign(j,{Caption:h,Item:g})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1410)}),_N_E=e.O()}]);