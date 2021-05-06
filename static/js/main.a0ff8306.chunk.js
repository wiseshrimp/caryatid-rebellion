(this["webpackJsonpthesis-website-3"]=this["webpackJsonpthesis-website-3"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);a(10),a(11);var n=a(2),s=a.n(n),r=a(8),i=a.n(r),o=a(9),d=a(3),c=a(4),l=a(6),u=a(5),h=a(1),p=a.n(h),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).create=function(){n.load(),n.createContainer(),n.createTitle(),n.createInstructions(),n.add(),n.addEventListener()},n.addEventListener=function(){window.addEventListener("resize",n.resize)},n.componentDidUpdate=function(e){var t=n.state.hasAddedToStage,a=n.props,s=a.stage,r=a.hasScrolled,i=a.loadedPercentage;s&&!t&&(n.create(),n.setState({hasAddedToStage:!0})),!e.hasScrolled&&r&&n.addClickInstructions(),i!==e.loadedPercentage&&n.addLoading()},n.add=function(){n.props.stage.addChild(n.container)},n.addArrow=function(){var e=n.props.stage,t=e.canvas.width/15;n.arrowEl.setTransform(e.canvas.width/2-t/2,e.canvas.height/4+e.canvas.height/2+10,t/n.arrowEl.image.width,t/n.arrowEl.image.width),n.arrowY=e.canvas.height/4+e.canvas.height/2+10,n.container.addChild(n.arrowEl),n.animateArrow()},n.addClickInstructions=function(){var e=n.props.stage,t=e.canvas.width/15+10,a=e.canvas.height/20,s=e.canvas.height/4+e.canvas.height/2+20+t,r=(new p.a.Text).set({text:"CLICK TO REPLAY COMICS",x:0,y:s,font:"".concat(a,"px custard, sans-serif"),lineWidth:e.canvas.width-30});n.container.addChild(r),r.x=e.canvas.width/2,r.textAlign="center"},n.addLoading=function(){var e=n.props.loadedPercentage;if(e>=1)return n.container.removeChild(n.fill),void n.container.removeChild(n.bar);p.a.Tween.get(n.fill,{override:!0}).to({scaleX:e},150)},n.animateArrow=function(){n.arrowTween=p.a.Tween.get(n.arrowEl).to({y:n.arrowY-10},500).to({y:n.arrowY+10},500).call((function(){n.animateArrow()}))},n.createContainer=function(){var e=n.props.stage,t=new p.a.Container;if(n.container=t,t.setBounds(0,0,e.canvas.width,e.canvas.height),!n.props.hasLoaded){var a=n.createLoadingBar(),s=a.bar,r=a.fill;t.addChild(s),t.addChild(r),n.fill=r,n.bar=s}n.setState({scale:{x:e.canvas.width,y:e.canvas.height}})},n.createInstructions=function(){var e=n.props.stage,t=e.canvas.height/20,a=(new p.a.Text).set({text:"SCROLL",x:0,y:e.canvas.height/5+e.canvas.height/2,font:"".concat(t,"px custard, sans-serif"),lineWidth:e.canvas.width-30});a.x=e.canvas.width/2,a.textAlign="center",n.container.addChild(a)},n.createLoadingBar=function(){var e=n.props.stage,t=new p.a.Shape,a=e.canvas.width/4,s=e.canvas.height/2;t.graphics.setStrokeStyle(3).beginStroke("black").drawRoundRectComplex((e.canvas.width-a)/2,s,a,30,5,5,5,5).endStroke();var r=(new p.a.Shape).set({scaleX:0,x:(e.canvas.width-a)/2+1.5,y:s+1.5});return r.graphics.beginLinearGradientFill(["#4158D0","#C850C0","#FFCC70"],[0,.46,1],0,100,200,300).drawRoundRectComplex(0,0,a-3,27,5,5,5,5),{bar:t,fill:r}},n.createTitle=function(){var e=n.props.stage,t=new p.a.Container,a=e.canvas.height/10,s=(new p.a.Text).set({text:"THE CARYATID REVOLUTION",x:0,y:0,font:"".concat(a,"px custard, sans-serif"),lineWidth:e.canvas.width-30});t.addChild(s),s.textAlign="center",t.x=e.canvas.width/2,t.y=e.canvas.height/2-e.canvas.height/5,n.container.addChild(t)},n.handleLoad=function(e){n.arrowEl=new p.a.Bitmap(e.target,"down-arrow"),n.addArrow()},n.load=function(){var e=new Image;e.src="./title/down-arrow.png",e.onload=n.handleLoad},n.removeLoading=function(){n.container.removeChild(n.fill),n.container.removeChild(n.bar)},n.resize=function(){n.props.stage.removeChild(n.container),n.props.stage.removeChild(n.arrowEl),p.a.Tween.removeAllTweens(),n.createContainer(),n.createTitle(),n.createInstructions(),n.addArrow(),n.add()},n.state={hasAddedToStage:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return null}}]),a}(s.a.Component),f=[{id:"CARD_1",src:"./sprites/card1/card1.json"},{id:"CARD_2",src:"./sprites/card2/card2.json"},{id:"CARD_3",src:"./sprites/card3/card3.json"},{id:"CARD_4",src:"./sprites/card4/card4.json"},{id:"CARD_5",src:"./sprites/card5/card5.json"},{id:"CARD_6",src:"./sprites/card6/card6.json"},{id:"CARD_7",src:"./sprites/card7/card7.json"},{id:"CARD_9",src:"./sprites/card9/card9.json"},{id:"CARD_10",src:"./sprites/card10/card12.json"},{id:"CARD_12",src:"./sprites/card12/card12.json"},{id:"CARD_19",src:"./sprites/card20/card20.json"},{id:"CARD_21",src:"./sprites/card22/card22.json"},{id:"CARD_25",src:"./sprites/card26/card26.json"},{id:"CARD_27",src:"./sprites/card28/card28.json"},{id:"CARD_28",src:"./sprites/card29/card29.json"},{id:"CARD_29",src:"./sprites/card30/card30.json"},{id:"CARD_31",src:"./sprites/card32/card32.json"},{id:"CARD_33",src:"./sprites/card34/card34.json"},{id:"CARD_35",src:"./sprites/card36/card36.json"},{id:"CARD_36",src:"./sprites/card37/card37.json"},{id:"CARD_37",src:"./sprites/card38/card38.json"},{id:"CARD_38",src:"./sprites/card39/card39.json"},{id:"CARD_40",src:"./sprites/card41/card41.json"},{id:"CARD_41",src:"./sprites/card42/card42.json"},{id:"CARD_43",src:"./sprites/card44/card44.json"},{id:"CARD_46",src:"./sprites/card47/card47.json"}],g=[{id:"CARD_8",src:"./stills/Still8.png"},{id:"CARD_11",src:"./stills/Still11.png"},{id:"CARD_13",src:"./stills/Still13.png"},{id:"CARD_14",src:"./stills/Still14.png"},{id:"CARD_15",src:"./stills/Still15.png"},{id:"CARD_16",src:"./stills/Still16.png"},{id:"CARD_17",src:"./stills/Still17.png"},{id:"CARD_18",src:"./stills/Still19.png"},{id:"CARD_20",src:"./stills/Still21.png"},{id:"CARD_22",src:"./stills/Still23.png"},{id:"CARD_23",src:"./stills/Still24.png"},{id:"CARD_24",src:"./stills/Still25.png"},{id:"CARD_26",src:"./stills/Still27.png"},{id:"CARD_30",src:"./stills/Still31.png"},{id:"CARD_32",src:"./stills/Still33.png"},{id:"CARD_34",src:"./stills/Still35.png"},{id:"CARD_39",src:"./stills/Still40.png"},{id:"CARD_42",src:"./stills/Still43.png"},{id:"CARD_44",src:"./stills/Still45.png"},{id:"CARD_45",src:"./stills/Still46.png"},{id:"CARD_47",src:"./stills/Still48.png"}],w=[{id:"PLACARD_1",src:"./placards/placard1/card9.json",after:{idx:8}},{id:"PLACARD_2",src:"./placards/placard2/card10.json",after:{idx:8}},{id:"PLACARD_3",src:"./placards/placard3/placard3.json",after:{idx:33}}],m=20,b=30,C=f.length+w.length+g.length,y=a(0),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).add=function(){var e=n.props.stage;n.transform(),n.addEventListener(),e.addChild(n.spriteEl),n.play()},n.addEventListener=function(){window.addEventListener("resize",n.transform)},n.handleLoad=function(e){var t=n.props,a=t.handleLoad,s=t.id;n.spriteEl=new p.a.Sprite(e.result,n.id),a(s),n.add()},n.load=function(){var e=n.props,t=e.src,a=e.id,s=new p.a.LoadQueue(!1),r={src:t,id:a,type:"spritesheet",crossOrigin:!0};s.loadManifest(r,!0),s.on("fileload",n.handleLoad)},n.play=function(){n.spriteEl.play()},n.transform=function(){var e=n.props,t=e.stage,a=e.after,s=e.id,r=e.setTransform,i=t.canvas.width/10<m?m:t.canvas.width/10,o={x:0,y:0,w:0,h:0},d=1440,c=d+2*b>t.canvas.width,l=t.canvas.width<=600;o.w=c?t.canvas.width-i:d,o.w=l?t.canvas.width:o.w,o.h=200/d*o.w,o.x=(t.canvas.width-o.w)/2,o.x=l?0:o.x;var u=2.4*o.h,h=a.idx*u+(a.idx+1)*b*2;w.forEach((function(e){var t=e.id.split("_"),a=Number(t[t.length-1])-1;n.state.idx>a&&(h+=o.h+2*b)})),o.y=h+t.canvas.height;var p=o.w/d;n.spriteEl.setTransform(o.x,o.y,p,p),n.setState({transform:o}),"PLACARD_1"===s&&r(o,"placards")};var s=e.id.split("_");return n.state={idx:Number(s[s.length-1])-1,transform:{x:0,y:0,w:0,h:0}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return Object(y.jsx)("div",{})}}]),a}(s.a.Component),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).add=function(){n.transform(),n.stop(),n.addEventListeners(),n.props.stage.addChild(n.spriteEl)},n.addEventListeners=function(){n.spriteEl.addEventListener("click",n.onClick),window.addEventListener("resize",n.transform)},n.calculateYOffset=function(e){var t=0;return w.forEach((function(a){var s=a.after.idx;n.state.idx>=s&&(t+=5*e/12+2*b)})),t},n.checkBounds=function(){var e=n.state.transform,t=n.props,a=t.stage,s=t.y,r=t.currentSprite,i=e.h>a.canvas.height;if(n.state.isPlaying)i?-s<e.y&&-s>e.y+e.h&&n.stop():(e.y<-s||e.y+e.h>-s+a.canvas.height)&&n.stop();else{if(!e||n.state.hasPlayed||r)return;(i&&-s<e.y&&-s>e.y+e.h||e.y>-s&&e.y+e.h<-s+a.canvas.height)&&n.play()}},n.componentDidUpdate=function(e){!e.queue&&n.props.queue&&n.load(),!e.popup&&n.props.popup&&n.state.isPlaying&&n.stop(),e.y!==n.props.y&&n.checkBounds()},n.check=function(){n.spriteEl.currentFrame===n.spriteEl.spriteSheet._frames.length-1&&(n.stop(),n.setState({hasPlayed:!0}),p.a.Ticker.removeEventListener("tick",n.check))},n.handleLoad=function(e){e.item.id===n.props.id&&(n.spriteEl=new p.a.Sprite(e.result,n.id),n.props.handleLoad(n.props.id,"sprites"),n.add())},n.load=function(){var e={src:n.props.src,id:n.props.id,type:"spritesheet",crossOrigin:!0};n.props.queue.loadManifest(e,!0),n.props.queue.on("fileload",n.handleLoad)},n.onClick=function(e){n.spriteEl&&n.state.hasPlayed&&n.play(!0)},n.play=function(e){n.spriteEl&&(n.state.hasPlayed?(n.spriteEl.gotoAndPlay(0),n.setState({hasPlayed:!1})):(n.setState({isPlaying:!0}),n.spriteEl.play()),p.a.Ticker.addEventListener("tick",n.check),n.props.setCurrentSprite(n.props.id))},n.stop=function(e){e||n.props.setCurrentSprite(null),n.spriteEl.stop(),n.setState({isPlaying:!1})},n.transform=function(){var e=n.props,t=e.stage,a=e.id,s=e.setTransform,r=t.canvas.width/10<m?m:t.canvas.width/10,i={x:0,y:0,w:0,h:0},o=1440,d=o+2*b>t.canvas.width,c=t.canvas.width<=600;i.w=d?t.canvas.width-r:o,i.w=c?t.canvas.width:i.w,i.h=480/o*i.w,i.x=(t.canvas.width-i.w)/2,i.x=c?0:i.x,i.y=t.canvas.height+i.h*n.state.idx+2*b*(n.state.idx+1),i.y+=n.calculateYOffset(i.h);var l=i.w/o;n.spriteEl.scaleX=l,n.spriteEl.scaleY=l,n.spriteEl.x=i.x,n.spriteEl.y=i.y,n.setState({transform:i}),"CARD_1"===a&&s(i,"sprites")};var s=e.id.split("_");return n.state={idx:Number(s[s.length-1])-1,transform:{x:0,y:0,w:0,h:0}},n}return Object(c.a)(a,[{key:"render",value:function(){return null}}]),a}(s.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).debounce=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){for(var n=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){e.apply(n,r)}),a)}},n.addEventListener=function(){window.addEventListener("resize",n.debounce(n.transform,100))},n.add=function(){var e=n.props.stage;n.transform(),e.addChild(n.stillEl)},n.calculateYOffset=function(e){var t=0;return w.forEach((function(a){var s=a.after.idx;n.state.idx>=s&&(t+=5*e/12+2*b)})),t},n.handleLoad=function(e){var t=n.props,a=t.handleLoad,s=t.id;n.stillEl=new p.a.Bitmap(e.target,s),a(s,"stills"),n.add(),n.addEventListener()},n.load=function(){var e=new Image;e.src=n.props.src,e.onload=n.handleLoad},n.transform=function(){var e=n.state.idx,t=n.props.stage,a=t.canvas.width/10<m?m:t.canvas.width/10,s={x:0,y:0,w:0,h:0},r=1440,i=r+2*b>t.canvas.width,o=t.canvas.width<=600;s.w=i?t.canvas.width-a:r,s.w=o?t.canvas.width:s.w,s.h=480/r*s.w,s.x=(t.canvas.width-s.w)/2,s.x=o?0:s.x,s.y=t.canvas.height+s.h*e+2*b*(e+1),s.y+=n.calculateYOffset(s.h);var d=s.w/r;n.stillEl.scaleX=d,n.stillEl.scaleY=d,n.stillEl.x=s.x,n.stillEl.y=s.y,n.setState({transform:s})};var s=e.id.split("_");return n.state={idx:Number(s[s.length-1])-1,transform:{x:0,y:0,w:0,h:0}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return Object(y.jsx)("div",{})}}]),a}(s.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onButtonClick=function(e){n.props.setPopup(e.target.id)},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"buttons ".concat(this.props.showButtons?"visible":"hidden"),children:[Object(y.jsxs)("div",{id:"buttons-container",className:"buttons-container",children:[Object(y.jsx)("div",{id:"audrey",className:"button",onClick:this.onButtonClick,children:"AUDREY"}),Object(y.jsx)("div",{id:"doris",className:"button",onClick:this.onButtonClick,children:"DORIS"}),Object(y.jsx)("div",{id:"hettie",className:"button",onClick:this.onButtonClick,children:"HETTIE"})]}),Object(y.jsxs)("div",{id:"bottom-buttons-container",className:"bottom-button-container",children:[Object(y.jsx)("div",{id:"about",className:"button",onClick:this.onButtonClick,children:"ABOUT"}),Object(y.jsx)("div",{id:"video",className:"button",onClick:this.onButtonClick,children:"THE VIDEO"})]})]})}}]),a}(s.a.Component),A={audrey:{header:"AUDREY",html:'\n    <div>\n        Born on June 8, 1891 in Rochester, NY, Audrey Munson was catapulted from a young age to fame, which according to her mother, was her destiny forecasted as a young child. At five-years-old, Audrey\u2019s mother, Katherine Mahaney, took her daughter to see Gypsy Queen Eliza who was visiting from England. Eliza looked at Audrey and predicted:\n    </div>\n    <div class="quote">\n        \u201cYou shall be beloved and famous. But when you think that happiness is yours, its Dead Sea fruit shall turn to ashes in your mouth.\u201d\n    </div>\n    '},doris:{header:"DORIS",html:"\n        <div></div>\n    "},hettie:{header:"HETTIE",html:"\n        <div></div>\n    "},about:{header:"ABOUT",html:"\n    <div>\n        In New York City, there are only five monuments of named women but hundreds of anonymous ones such as caryatids, architectural columns in the form of feminine bodies. The male monument is allowed individuality while her body is an allegory, inexpressible and unable to exist independently as flesh and blood. Looking for the original women behind the sculptures, I found Audrey Munson, Hettie Anderson, and Doris Doscher, three models who posed for many of the unnamed sculptures found in New York and across the United States. <br><br>\n\n        <i>The Caryatid Rebellion</i> is an interactive comic and 7-minute video experience based on Hettie, Audrey, and Doris and their uprising against the buildings and institutions they have been forced to carry. With music by Violet June of Machine+, the experience begins with the caryatids\u2019 current state, holding up buildings and institutions that continue to exclude and oppress, and documents their eventual rebellion and reclamation of the built world. Creating this world also involved my own process of rebellion by 3D modeling Korean architecture and designing avatars that looked more like me and other people of color, subverting the encoded white standards of beauty in Neoclassical architecture.\n    </div>\n\n    <h1>CREDITS</h1>\n    "},video:{header:"WATCH THE REBELLION",html:'\n    <iframe src="https://player.vimeo.com/video/544792816" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>    \n    '}},D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).close=function(){n.props.setPopup(null)},n.renderClose=function(){return Object(y.jsx)("div",{className:"close-container",children:Object(y.jsx)("div",{onClick:n.close,className:"close"})})},n.renderText=function(){return{__html:A[n.props.which].html}},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"popup-container visible",children:[this.renderClose(),Object(y.jsx)("div",{className:"text",children:Object(y.jsx)("h1",{children:A[this.props.which].header})}),Object(y.jsx)("div",{className:"description",children:Object(y.jsx)("div",{dangerouslySetInnerHTML:this.renderText()})})]})}}]),a}(s.a.Component);window.createjs=p.a;var O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentWillUnmount=function(){document.removeEventListener("wheel",n.scroll),window.removeEventListener("resize",n.resize),clearInterval(n.changeHue)},n.addEventListeners=function(){document.addEventListener("wheel",n.onScroll),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(document.getElementById("canvas").addEventListener("touchend",n.onMouseUp),document.getElementById("canvas").addEventListener("touchstart",n.onMouseDown)),window.addEventListener("resize",n.resize)},n.calculateLowerBound=function(){var e=f.length+g.length,t=w.length,a=e*n.state.assetTransform.sprites.h+t*n.state.assetTransform.placards.h;return a+=C*b*2+4*b,n.setState({lowerBound:a}),a},n.changeBackground=function(){var e=360;n.changeHue=setInterval((function(){var t=Math.abs(e%720-360),a=Math.abs((e+90)%720-360);e++,document.body.style.background="linear-gradient(to right, hsl("+t+",70%, 75%) 0%,hsl("+a+",90%,75%) 100%)"}),64)},n.draw=function(){n.stage.update()},n.isTouchDevice=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},n.onLoad=function(){var e=n.state.loadedElements+1===C;n.setState({loadedElements:n.state.loadedElements+1,hasLoaded:e}),e&&n.calculateLowerBound()},n.onMouseDown=function(e){n.setState({mouseY:e.touches[0].pageY}),document.getElementById("canvas").addEventListener("touchmove",n.onMouseMove)},n.onMouseMove=function(e){n.scroll(n.state.y+(e.touches[0].pageY-n.state.mouseY)/40)},n.onMouseUp=function(e){document.getElementById("canvas").removeEventListener("touchmove",n.onMouseMove)},n.onScroll=function(e){var t=n.state.y-e.deltaY;n.scroll(t)},n.scroll=function(e){n.state.popup||(Math.abs(e)>window.innerHeight&&!n.state.areButtonsShowing?n.setState({areButtonsShowing:!0}):Math.abs(n.state.y)<window.innerHeight&&n.state.areButtonsShowing&&n.setState({areButtonsShowing:!1}),e>0||-e>n.state.lowerBound&&n.state.lowerBound||(n.setState({hasScrolled:!0,y:e}),p.a.Tween.get(n.stage,{override:!0}).to({y:e},100,p.a.Ease.sineOut)))},n.setCurrentSprite=function(e){n.setState({currentSprite:e})},n.setTransform=function(e,t){n.setState({assetTransform:Object.assign({},n.state.assetTransform,Object(o.a)({},t,e))})},n.setup=function(){n.stage=new p.a.Stage("canvas"),n.stage.snapToPixelEnabled=!0,n.stage.snapToPixel=!0;var e=n.stage.canvas.getContext("2d");e.webkitImageSmoothingEnabled=e.mozImageSmoothingEnabled=e.imageSmoothingEnabled=!0,p.a.Touch.enable(n.stage),n.resize(),p.a.Ticker.timingMode=p.a.Ticker.RAF_SYNCHED,p.a.Ticker.framerate=15,p.a.Ticker.on("tick",n.draw),n.queue=new p.a.LoadQueue(!0),n.queue.maintainScriptOrder=!0,n.stage.enableMouseOver(20)},n.renderLanding=function(){return Object(y.jsx)(v,{stage:n.stage,loadedPercentage:n.state.loadedElements/C,hasScrolled:n.state.hasScrolled})},n.renderPlacard=function(e){var t=e.id,a=e.src,s=e.after;return Object(y.jsx)(j,{id:t,stage:n.stage,handleLoad:n.onLoad,setTransform:n.setTransform,src:a,after:s},t)},n.renderPopup=function(){return Object(y.jsx)(D,{setPopup:n.setPopup,which:n.state.popup})},n.renderSprite=function(e){var t=e.id,a=e.src;return Object(y.jsx)(x,{id:t,stage:n.stage,handleLoad:n.onLoad,setTransform:n.setTransform,queue:n.queue,src:a,y:n.state.y,popup:n.state.popup,loaded:n.state.loaded,setCurrentSprite:n.setCurrentSprite,currentSprite:n.state.currentSprite},t)},n.renderStill=function(e){var t=e.id,a=e.src;return Object(y.jsx)(S,{id:t,stage:n.stage,handleLoad:n.onLoad,src:a},t)},n.resize=function(){var e=n.state.y/n.state.lowerBound;n.stage.canvas.width=window.innerWidth,n.stage.canvas.height=window.innerHeight,window.innerWidth<600&&(n.stage.canvas.width=700,n.stage.canvas.height=1260),n.state.hasLoaded&&setTimeout((function(){var t=n.calculateLowerBound(),a=e*t;n.scroll(a)}),100)},n.setPopup=function(e){var t=!e;n.setState({popup:e,areButtonsShowing:t})},n.state={areButtonsShowing:!1,assetTransform:{sprites:{},placards:{}},currentSprite:null,hasLoaded:!1,hasScrolled:!1,y:0,mouseY:0,isTouchDevice:!1,popup:null,lowerBound:0,loadedElements:0,loaded:{sprites:0,placards:0}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({isTouchDevice:this.isTouchDevice()}),this.setup(),this.addEventListeners(),this.changeBackground()}},{key:"render",value:function(){var e=this.state,t=e.popup,a=e.areButtonsShowing;return Object(y.jsxs)("div",{children:[Object(y.jsx)("canvas",{id:"canvas",className:"".concat(t?"blurred":"")}),Object(y.jsx)(E,{showButtons:a,setPopup:this.setPopup}),t?this.renderPopup():null,this.renderLanding(),f.map(this.renderSprite),g.map(this.renderStill),w.map(this.renderPlacard)]})}}]),a}(s.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(O,{})}),document.getElementById("root")),L()}},[[20,1,2]]]);
//# sourceMappingURL=main.a0ff8306.chunk.js.map