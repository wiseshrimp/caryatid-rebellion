(this["webpackJsonpthesis-website-3"]=this["webpackJsonpthesis-website-3"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);n(10),n(11);var a=n(2),s=n.n(a),r=n(8),i=n.n(r),o=n(9),d=n(3),c=n(4),l=n(6),u=n(5),h=n(1),p=n.n(h),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).create=function(){a.load(),a.createContainer(),a.createTitle(),a.createInstructions(),a.add(),a.addEventListener()},a.addEventListener=function(){window.addEventListener("resize",a.resize)},a.componentDidUpdate=function(e){var t=a.state.hasAddedToStage,n=a.props,s=n.stage,r=n.hasScrolled,i=n.loadedPercentage;s&&!t&&(a.create(),a.setState({hasAddedToStage:!0})),!e.hasScrolled&&r&&a.addClickInstructions(),i!==e.loadedPercentage&&a.addLoading()},a.add=function(){a.props.stage.addChild(a.container)},a.addArrow=function(){var e=a.props.stage,t=e.canvas.width/15;a.arrowEl.setTransform(e.canvas.width/2-t/2,e.canvas.height/4+e.canvas.height/2+10,t/a.arrowEl.image.width,t/a.arrowEl.image.width),a.arrowY=e.canvas.height/4+e.canvas.height/2+10,a.container.addChild(a.arrowEl),a.animateArrow()},a.addClickInstructions=function(){var e=a.props.stage,t=e.canvas.width/15+10,n=e.canvas.height/20,s=e.canvas.height/4+e.canvas.height/2+20+t,r=(new p.a.Text).set({text:"CLICK TO REPLAY COMICS",x:0,y:s,font:"".concat(n,"px custard, sans-serif"),lineWidth:e.canvas.width-30});a.container.addChild(r),r.x=e.canvas.width/2,r.textAlign="center"},a.addLoading=function(){var e=a.props.loadedPercentage;if(e>=1)return a.container.removeChild(a.fill),void a.container.removeChild(a.bar);p.a.Tween.get(a.fill,{override:!0}).to({scaleX:e},150)},a.animateArrow=function(){a.arrowTween=p.a.Tween.get(a.arrowEl).to({y:a.arrowY-10},500).to({y:a.arrowY+10},500).call((function(){a.animateArrow()}))},a.createContainer=function(){var e=a.props.stage,t=new p.a.Container;if(a.container=t,t.setBounds(0,0,e.canvas.width,e.canvas.height),!a.props.hasLoaded){var n=a.createLoadingBar(),s=n.bar,r=n.fill;t.addChild(s),t.addChild(r),a.fill=r,a.bar=s}a.setState({scale:{x:e.canvas.width,y:e.canvas.height}})},a.createInstructions=function(){var e=a.props.stage,t=e.canvas.height/20,n=(new p.a.Text).set({text:"SCROLL",x:0,y:e.canvas.height/5+e.canvas.height/2,font:"".concat(t,"px custard, sans-serif"),lineWidth:e.canvas.width-30});n.x=e.canvas.width/2,n.textAlign="center",a.container.addChild(n)},a.createLoadingBar=function(){var e=a.props.stage,t=new p.a.Shape,n=e.canvas.width/4,s=e.canvas.height/2;t.graphics.setStrokeStyle(3).beginStroke("black").drawRoundRectComplex((e.canvas.width-n)/2,s,n,30,5,5,5,5).endStroke();var r=(new p.a.Shape).set({scaleX:0,x:(e.canvas.width-n)/2+1.5,y:s+1.5});return r.graphics.beginLinearGradientFill(["#4158D0","#C850C0","#FFCC70"],[0,.46,1],0,100,200,300).drawRoundRectComplex(0,0,n-3,27,5,5,5,5),{bar:t,fill:r}},a.createTitle=function(){var e=a.props.stage,t=new p.a.Container,n=e.canvas.height/10,s=(new p.a.Text).set({text:"THE CARYATID REVOLUTION",x:0,y:0,font:"".concat(n,"px custard, sans-serif"),lineWidth:e.canvas.width-30});t.addChild(s),s.textAlign="center",t.x=e.canvas.width/2,t.y=e.canvas.height/2-e.canvas.height/5,a.container.addChild(t)},a.handleLoad=function(e){a.arrowEl=new p.a.Bitmap(e.target,"down-arrow"),a.addArrow()},a.load=function(){var e=new Image;e.src="./title/down-arrow.png",e.onload=a.handleLoad},a.removeLoading=function(){a.container.removeChild(a.fill),a.container.removeChild(a.bar)},a.resize=function(){a.props.stage.removeChild(a.container),a.props.stage.removeChild(a.arrowEl),p.a.Tween.removeAllTweens(),a.createContainer(),a.createTitle(),a.createInstructions(),a.addArrow(),a.add()},a.state={hasAddedToStage:!1},a}return Object(c.a)(n,[{key:"render",value:function(){return null}}]),n}(s.a.Component),f=[{id:"CARD_1",src:"./sprites/card1/card1.json"},{id:"CARD_2",src:"./sprites/card2/card2.json"},{id:"CARD_3",src:"./sprites/card3/card3.json"},{id:"CARD_4",src:"./sprites/card4/card4.json"},{id:"CARD_5",src:"./sprites/card5/card5.json"},{id:"CARD_6",src:"./sprites/card6/card6.json"},{id:"CARD_7",src:"./sprites/card7/card7.json"},{id:"CARD_9",src:"./sprites/card9/card9.json"},{id:"CARD_10",src:"./sprites/card10/card12.json"},{id:"CARD_12",src:"./sprites/card12/card12.json"},{id:"CARD_19",src:"./sprites/card20/card20.json"},{id:"CARD_21",src:"./sprites/card22/card22.json"},{id:"CARD_25",src:"./sprites/card26/card26.json"},{id:"CARD_27",src:"./sprites/card28/card28.json"},{id:"CARD_28",src:"./sprites/card29/card29.json"},{id:"CARD_29",src:"./sprites/card30/card30.json"},{id:"CARD_31",src:"./sprites/card32/card32.json"},{id:"CARD_33",src:"./sprites/card34/card34.json"},{id:"CARD_35",src:"./sprites/card36/card36.json"},{id:"CARD_36",src:"./sprites/card37/card37.json"},{id:"CARD_37",src:"./sprites/card38/card38.json"},{id:"CARD_38",src:"./sprites/card39/card39.json"},{id:"CARD_40",src:"./sprites/card41/card41.json"},{id:"CARD_41",src:"./sprites/card42/card42.json"},{id:"CARD_43",src:"./sprites/card44/card44.json"},{id:"CARD_46",src:"./sprites/card47/card47.json"},{id:"CARD_49",src:"./sprites/card50/card50.json"},{id:"CARD_50",src:"./sprites/card51/card51.json"},{id:"CARD_52",src:"./sprites/card53/card53.json"}],g=[{id:"CARD_8",src:"./stills/Still8.png"},{id:"CARD_11",src:"./stills/Still11.png"},{id:"CARD_13",src:"./stills/Still13.png"},{id:"CARD_14",src:"./stills/Still14.png"},{id:"CARD_15",src:"./stills/Still15.png"},{id:"CARD_16",src:"./stills/Still16.png"},{id:"CARD_17",src:"./stills/Still17.png"},{id:"CARD_18",src:"./stills/Still19.png"},{id:"CARD_20",src:"./stills/Still21.png"},{id:"CARD_22",src:"./stills/Still23.png"},{id:"CARD_23",src:"./stills/Still24.png"},{id:"CARD_24",src:"./stills/Still25.png"},{id:"CARD_26",src:"./stills/Still27.png"},{id:"CARD_30",src:"./stills/Still31.png"},{id:"CARD_32",src:"./stills/Still33.png"},{id:"CARD_34",src:"./stills/Still35.png"},{id:"CARD_39",src:"./stills/Still40.png"},{id:"CARD_42",src:"./stills/Still43.png"},{id:"CARD_44",src:"./stills/Still45.png"},{id:"CARD_45",src:"./stills/Still46.png"},{id:"CARD_47",src:"./stills/Still48.png"},{id:"CARD_48",src:"./stills/Still49.png"},{id:"CARD_51",src:"./stills/Still52.png"},{id:"CARD_53",src:"./stills/Still54.png"},{id:"CARD_54",src:"./stills/Still55.png"}],m=[{id:"PLACARD_1",src:"./placards/placard1/card9.json",after:{idx:8}},{id:"PLACARD_2",src:"./placards/placard2/card10.json",after:{idx:8}},{id:"PLACARD_3",src:"./placards/placard3/placard3.json",after:{idx:33}}],w=20,y=30,b=f.length+m.length+g.length,C=n(0),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).add=function(){var e=a.props.stage;a.transform(),a.addEventListener(),e.addChild(a.spriteEl),a.play()},a.addEventListener=function(){window.addEventListener("resize",a.transform)},a.handleLoad=function(e){var t=a.props,n=t.handleLoad,s=t.id;a.spriteEl=new p.a.Sprite(e.result,a.id),n(s),a.add()},a.load=function(){var e=a.props,t=e.src,n=e.id,s=new p.a.LoadQueue(!1),r={src:t,id:n,type:"spritesheet",crossOrigin:!0};s.loadManifest(r,!0),s.on("fileload",a.handleLoad)},a.play=function(){a.spriteEl.play()},a.transform=function(){var e=a.props,t=e.stage,n=e.after,s=e.id,r=e.setTransform,i=t.canvas.width/10<w?w:t.canvas.width/10,o={x:0,y:0,w:0,h:0},d=1440,c=d+2*y>t.canvas.width,l=t.canvas.width<=600;o.w=c?t.canvas.width-i:d,o.w=l?t.canvas.width:o.w,o.h=200/d*o.w,o.x=(t.canvas.width-o.w)/2,o.x=l?0:o.x;var u=2.4*o.h,h=n.idx*u+(n.idx+1)*y*2;m.forEach((function(e){var t=e.id.split("_"),n=Number(t[t.length-1])-1;a.state.idx>n&&(h+=o.h+2*y)})),o.y=h+t.canvas.height;var p=o.w/d;a.spriteEl.setTransform(o.x,o.y,p,p),a.setState({transform:o}),"PLACARD_1"===s&&r(o,"placards")};var s=e.id.split("_");return a.state={idx:Number(s[s.length-1])-1,transform:{x:0,y:0,w:0,h:0}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return Object(C.jsx)("div",{})}}]),n}(s.a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).add=function(){a.transform(),a.stop(),a.addEventListeners(),a.props.stage.addChild(a.spriteEl)},a.addEventListeners=function(){a.spriteEl.addEventListener("click",a.onClick),window.addEventListener("resize",a.transform)},a.calculateYOffset=function(e){var t=0;return m.forEach((function(n){var s=n.after.idx;a.state.idx>=s&&(t+=5*e/12+2*y)})),t},a.checkBounds=function(){var e=a.state.transform,t=a.props,n=t.stage,s=t.y,r=t.currentSprite,i=e.h>n.canvas.height;if(a.state.isPlaying)i?-s<e.y&&-s>e.y+e.h&&a.stop():(e.y<-s||e.y+e.h>-s+n.canvas.height)&&a.stop();else{if(!e||a.state.hasPlayed||r)return;(i&&-s<e.y&&-s>e.y+e.h||e.y>-s&&e.y+e.h<-s+n.canvas.height)&&a.play()}},a.componentDidUpdate=function(e){!e.queue&&a.props.queue&&a.load(),!e.popup&&a.props.popup&&a.state.isPlaying&&a.stop(),e.y!==a.props.y&&a.checkBounds()},a.check=function(){a.spriteEl.currentFrame===a.spriteEl.spriteSheet._frames.length-1&&(a.stop(),a.setState({hasPlayed:!0}),p.a.Ticker.removeEventListener("tick",a.check))},a.handleLoad=function(e){e.item.id===a.props.id&&(a.spriteEl=new p.a.Sprite(e.result,a.id),a.props.handleLoad(a.props.id,"sprites"),a.add())},a.load=function(){var e={src:a.props.src,id:a.props.id,type:"spritesheet",crossOrigin:!0};a.props.queue.loadManifest(e,!0),a.props.queue.on("fileload",a.handleLoad)},a.onClick=function(e){a.spriteEl&&a.state.hasPlayed&&a.play(!0)},a.play=function(e){a.spriteEl&&(a.state.hasPlayed?(a.spriteEl.gotoAndPlay(0),a.setState({hasPlayed:!1})):(a.setState({isPlaying:!0}),a.spriteEl.play()),p.a.Ticker.addEventListener("tick",a.check),a.props.setCurrentSprite(a.props.id))},a.stop=function(e){e||a.props.setCurrentSprite(null),a.spriteEl.stop(),a.setState({isPlaying:!1})},a.transform=function(){var e=a.props,t=e.stage,n=e.id,s=e.setTransform,r=t.canvas.width/10<w?w:t.canvas.width/10,i={x:0,y:0,w:0,h:0},o=1440,d=o+2*y>t.canvas.width,c=t.canvas.width<=600;i.w=d?t.canvas.width-r:o,i.w=c?t.canvas.width:i.w,i.h=480/o*i.w,i.x=(t.canvas.width-i.w)/2,i.x=c?0:i.x,i.y=t.canvas.height+i.h*a.state.idx+2*y*(a.state.idx+1),i.y+=a.calculateYOffset(i.h);var l=i.w/o;a.spriteEl.scaleX=l,a.spriteEl.scaleY=l,a.spriteEl.x=i.x,a.spriteEl.y=i.y,a.setState({transform:i}),"CARD_1"===n&&s(i,"sprites")};var s=e.id.split("_");return a.state={idx:Number(s[s.length-1])-1,transform:{x:0,y:0,w:0,h:0}},a}return Object(c.a)(n,[{key:"render",value:function(){return null}}]),n}(s.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).debounce=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){for(var a=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){e.apply(a,r)}),n)}},a.addEventListener=function(){window.addEventListener("resize",a.debounce(a.transform,100))},a.add=function(){var e=a.props.stage;a.transform(),e.addChild(a.stillEl)},a.calculateYOffset=function(e){var t=0;return m.forEach((function(n){var s=n.after.idx;a.state.idx>=s&&(t+=5*e/12+2*y)})),t},a.handleLoad=function(e){var t=a.props,n=t.handleLoad,s=t.id;a.stillEl=new p.a.Bitmap(e.target,s),n(s,"stills"),a.add(),a.addEventListener()},a.load=function(){var e=new Image;e.src=a.props.src,e.onload=a.handleLoad},a.transform=function(){var e=a.state.idx,t=a.props.stage,n=t.canvas.width/10<w?w:t.canvas.width/10,s={x:0,y:0,w:0,h:0},r=1440,i=r+2*y>t.canvas.width,o=t.canvas.width<=600;s.w=i?t.canvas.width-n:r,s.w=o?t.canvas.width:s.w,s.h=480/r*s.w,s.x=(t.canvas.width-s.w)/2,s.x=o?0:s.x,s.y=t.canvas.height+s.h*e+2*y*(e+1),s.y+=a.calculateYOffset(s.h);var d=s.w/r;a.stillEl.scaleX=d,a.stillEl.scaleY=d,a.stillEl.x=s.x,a.stillEl.y=s.y,a.setState({transform:s})};var s=e.id.split("_");return a.state={idx:Number(s[s.length-1])-1,transform:{x:0,y:0,w:0,h:0}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return Object(C.jsx)("div",{})}}]),n}(s.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onButtonClick=function(e){a.props.setPopup(e.target.id)},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"buttons ".concat(this.props.showButtons?"visible":"hidden"),children:[Object(C.jsxs)("div",{id:"buttons-container",className:"buttons-container",children:[Object(C.jsx)("div",{id:"audrey",className:"button",onClick:this.onButtonClick,children:"AUDREY"}),Object(C.jsx)("div",{id:"doris",className:"button",onClick:this.onButtonClick,children:"DORIS"}),Object(C.jsx)("div",{id:"hettie",className:"button",onClick:this.onButtonClick,children:"HETTIE"})]}),Object(C.jsxs)("div",{id:"bottom-buttons-container",className:"bottom-button-container",children:[Object(C.jsx)("div",{id:"about",className:"button",onClick:this.onButtonClick,children:"ABOUT"}),Object(C.jsx)("div",{id:"video",className:"button",onClick:this.onButtonClick,children:"THE VIDEO"})]})]})}}]),n}(s.a.Component);var E={audrey:{header:"AUDREY",html:'\n    <div class="chunk">\n        Born on June 8, 1891 in Rochester, NY, Audrey Munson was catapulted from a young age to fame, which according to her mother, was her destiny forecasted as a young child. At five-years-old, Audrey\u2019s mother, Katherine Mahaney, took her daughter to see Gypsy Queen Eliza who was visiting from England. Eliza looked at Audrey and predicted:\n    </div>\n    <div class="quote">\n        \u201cYou shall be beloved and famous. But when you think that happiness is yours, its Dead Sea fruit shall turn to ashes in your mouth.\u201d\n    </div>\n    <div class="chunk">\n        Eleven years later, Eliza\u2019s prophecy would be realized when Audrey was approached by a photographer in Manhattan asking her to model for an upcoming project. Baffled by her natural professionalism and captivating presence, he referred Audrey to other artists. At just sixteen-years-old, Audrey posed nude for artists such as Isidore Kante, Daniel Chester French, Allen George Newman, Albert Jaegers, and many other renowned sculptors. By her early twenties, she became one of the best known women in Manhattan. She was called \u201cAmerica\u2019s First Supermodel\u201d, Miss Manhattan, and other names acknowledging her greatness.\n    </div>\n    <div class="chunk">\n        Audrey Munson was a living muse for artists at the peak of the Beaux Art movement in New York City. She was regarded as \u201cthe most perfect, most versatile, most famous of American models, whose face and figure have inspired thousands of modern masterpieces of sculpture and painting.\u201d At one point, over thirty sculptures were present at the Metropolitan Museum of Art alone bearing Audrey\u2019s likeness, while hundreds of others are scattered across the country.\n    </div>\n    <div class="chunk">\n        Though her image can be seen everywhere from museums to city streets, few know her name. Plaques publicize the name of the piece - Memory, Progress, Republic, or Victory - and the artist, but Audrey Munson remains unrecognized. We know her naked body, her vacant stare, but we don\u2019t know her name. As quickly as she ascended to fame, she fell into obscurity.\n    </div>\n    <div class="quote">\n        \u201cThe sculptor\u2019s natural way of expressing himself is to mold into form his conceptions. From the earliest ages beauty and truth have been expressed in the figure of a woman.\u201d <br />- Allen George Newman\n    </div>\n\n    <br />\n    <h1>IN THE REBELLION</h2>\n    <div class="chunk">\n        During the Caryatid Rebellion, Audrey broke out of her marble cage on '.concat(function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var s="am";n>12&&(n-=12,s="pm");var r=e.getDate();return t+", "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+r+", "+e.getFullYear()+" at "+n+":"+a+s}()," and became ruler of the snakes, turning men into stone to live the fate that she and her sisters lived. You can watch her in the Rebellion as Alma Mater at Columbia University and Brian Tolle\u2019s Miss Manhattan and Miss Brooklyn in Downtown Brooklyn.\n    </div>\n    <br />\n    <br />\n    ")},doris:{header:"DORIS",html:"\n        <div></div>\n    "},hettie:{header:"HETTIE",html:"\n        <div></div>\n    "},about:{header:"ABOUT",html:"\n    <div>\n        In New York City, there are only five monuments of named women but hundreds of anonymous ones such as caryatids, architectural columns in the form of feminine bodies. The male monument is allowed individuality while her body is an allegory, inexpressible and unable to exist independently as flesh and blood. Looking for the original women behind the sculptures, I found Audrey Munson, Hettie Anderson, and Doris Doscher, three models who posed for many of the unnamed sculptures found in New York and across the United States. <br><br>\n\n        <i>The Caryatid Rebellion</i> is an interactive comic and 7-minute video experience based on Hettie, Audrey, and Doris and their uprising against the buildings and institutions they have been forced to carry. With music by Violet June of Machine+, the experience begins with the caryatids\u2019 current state, holding up buildings and institutions that continue to exclude and oppress, and documents their eventual rebellion and reclamation of the built world. Creating this world also involved my own process of rebellion by 3D modeling Korean architecture and designing avatars that looked more like me and other people of color, subverting the encoded white standards of beauty in Neoclassical architecture.\n    </div>\n    <br />\n    <br />\n\n    <h1>CREDITS</h1>\n    "},video:{header:"WATCH THE REBELLION",html:'\n    <iframe src="https://player.vimeo.com/video/544792816" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>    \n    '}},D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).close=function(){a.props.setPopup(null)},a.renderClose=function(){return Object(C.jsx)("div",{className:"close-container",children:Object(C.jsx)("div",{onClick:a.close,className:"close"})})},a.renderText=function(){return{__html:E[a.props.which].html}},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"popup-container visible",children:[this.renderClose(),Object(C.jsx)("div",{className:"text",children:Object(C.jsx)("h1",{children:E[this.props.which].header})}),Object(C.jsx)("div",{className:"description",children:Object(C.jsx)("div",{dangerouslySetInnerHTML:this.renderText()})})]})}}]),n}(s.a.Component);window.createjs=p.a;var R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentWillUnmount=function(){document.removeEventListener("wheel",a.scroll),window.removeEventListener("resize",a.resize),clearInterval(a.changeHue)},a.addEventListeners=function(){document.addEventListener("wheel",a.onScroll),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(document.getElementById("canvas").addEventListener("touchend",a.onMouseUp),document.getElementById("canvas").addEventListener("touchstart",a.onMouseDown)),window.addEventListener("resize",a.resize)},a.calculateLowerBound=function(){var e=f.length+g.length,t=m.length,n=e*a.state.assetTransform.sprites.h+t*a.state.assetTransform.placards.h;return n+=b*y*2+4*y,a.setState({lowerBound:n}),n},a.changeBackground=function(){var e=360;a.changeHue=setInterval((function(){var t=Math.abs(e%720-360),n=Math.abs((e+90)%720-360);e++,document.body.style.background="linear-gradient(to right, hsl("+t+",70%, 75%) 0%,hsl("+n+",90%,75%) 100%)"}),64)},a.draw=function(){a.stage.update()},a.isTouchDevice=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},a.onLoad=function(){var e=a.state.loadedElements+1===b;a.setState({loadedElements:a.state.loadedElements+1,hasLoaded:e}),e&&a.calculateLowerBound()},a.onMouseDown=function(e){a.setState({mouseY:e.touches[0].pageY}),document.getElementById("canvas").addEventListener("touchmove",a.onMouseMove)},a.onMouseMove=function(e){var t=a.state.y+(e.touches[0].pageY-a.state.mouseY)/40;a.scroll(t)},a.onMouseUp=function(e){document.getElementById("canvas").removeEventListener("touchmove",a.onMouseMove)},a.onScroll=function(e){var t=a.state.y-e.deltaY;a.scroll(t)},a.scroll=function(e){a.state.popup||(Math.abs(e)>window.innerHeight&&!a.state.areButtonsShowing?a.setState({areButtonsShowing:!0}):Math.abs(a.state.y)<window.innerHeight&&a.state.areButtonsShowing&&a.setState({areButtonsShowing:!1}),e>0||-e>a.state.lowerBound&&a.state.lowerBound||(a.setState({hasScrolled:!0,y:e}),a.y=e,p.a.Tween.get(a.stage,{override:!0}).to({y:e},500,p.a.Ease.sineOut)))},a.setCurrentSprite=function(e){a.setState({currentSprite:e})},a.setTransform=function(e,t){a.setState({assetTransform:Object.assign({},a.state.assetTransform,Object(o.a)({},t,e))})},a.setup=function(){a.stage=new p.a.Stage("canvas"),a.stage.snapToPixelEnabled=!0,a.stage.snapToPixel=!0;var e=a.stage.canvas.getContext("2d");e.webkitImageSmoothingEnabled=e.mozImageSmoothingEnabled=e.imageSmoothingEnabled=!0,p.a.Touch.enable(a.stage),a.resize(),p.a.Ticker.timingMode=p.a.Ticker.RAF_SYNCHED,p.a.Ticker.framerate=15,p.a.Ticker.on("tick",a.draw),a.queue=new p.a.LoadQueue(!0),a.queue.maintainScriptOrder=!0,a.stage.enableMouseOver(20)},a.renderLanding=function(){return Object(C.jsx)(v,{stage:a.stage,loadedPercentage:a.state.loadedElements/b,hasScrolled:a.state.hasScrolled})},a.renderPlacard=function(e){var t=e.id,n=e.src,s=e.after;return Object(C.jsx)(j,{id:t,stage:a.stage,handleLoad:a.onLoad,setTransform:a.setTransform,src:n,after:s},t)},a.renderPopup=function(){return Object(C.jsx)(D,{setPopup:a.setPopup,which:a.state.popup})},a.renderSprite=function(e){var t=e.id,n=e.src;return Object(C.jsx)(A,{id:t,stage:a.stage,handleLoad:a.onLoad,setTransform:a.setTransform,queue:a.queue,src:n,y:a.state.y,popup:a.state.popup,loaded:a.state.loaded,setCurrentSprite:a.setCurrentSprite,currentSprite:a.state.currentSprite},t)},a.renderStill=function(e){var t=e.id,n=e.src;return Object(C.jsx)(S,{id:t,stage:a.stage,handleLoad:a.onLoad,src:n},t)},a.resize=function(){var e=a.state.y/a.state.lowerBound;a.stage.canvas.width=window.innerWidth,a.stage.canvas.height=window.innerHeight,window.innerWidth<600&&(a.stage.canvas.width=700,a.stage.canvas.height=1260),a.state.hasLoaded&&setTimeout((function(){var t=a.calculateLowerBound(),n=e*t;a.scroll(n)}),100)},a.setPopup=function(e){var t=!e;a.setState({popup:e,areButtonsShowing:t})},a.state={areButtonsShowing:!1,assetTransform:{sprites:{},placards:{}},currentSprite:null,hasLoaded:!1,hasScrolled:!1,y:0,mouseY:0,isTouchDevice:!1,popup:null,lowerBound:0,loadedElements:0,loaded:{sprites:0,placards:0}},a.y=0,a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({isTouchDevice:this.isTouchDevice()}),this.setup(),this.addEventListeners(),this.changeBackground()}},{key:"render",value:function(){var e=this.state,t=e.popup,n=e.areButtonsShowing;return Object(C.jsxs)("div",{children:[Object(C.jsx)("canvas",{id:"canvas",className:"".concat(t?"blurred":"")}),Object(C.jsx)(x,{showButtons:n,setPopup:this.setPopup}),t?this.renderPopup():null,this.renderLanding(),f.map(this.renderSprite),g.map(this.renderStill),m.map(this.renderPlacard)]})}}]),n}(s.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(R,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.c0c0798e.chunk.js.map