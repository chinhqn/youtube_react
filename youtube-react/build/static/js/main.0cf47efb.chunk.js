(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){e.exports=n(287)},122:function(e,t,n){},123:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),i=(n(122),n(15)),c=n(16),s=n(18),u=n(17),h=n(19),p=(n(123),n(21)),d=n(48),m=n.n(d),b=n(27),g=(n(124),n(140),n(141),n(100)),E=n.n(g),f=n(102),v=n.n(f),O=n(104),y=n.n(O),j=n(103),w=n.n(j),C=n(47),k=n.n(C),M=n(32),S=n.n(M),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={spacing:"16"},n.handleChange=function(e){return function(t,a){n.setState(Object(b.a)({},e,a))}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.video;if(!t)return"<div>Loading ...</div>";var n=t.id.videoId,a="https://www.youtube.com/embed/".concat(n);return o.a.createElement(E.a,{className:e.card},o.a.createElement(v.a,null,o.a.createElement("iframe",{width:"100%",height:"auto",src:a,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),o.a.createElement(w.a,null,o.a.createElement(S.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.snippet.title),o.a.createElement(S.a,{component:"p"},t.snippet.description))),o.a.createElement(y.a,null,o.a.createElement(k.a,{size:"small",color:"primary"},"Share"),o.a.createElement(k.a,{size:"small",color:"primary"},"Learn More")))}}]),t}(a.Component),V=Object(p.withStyles)(function(e){return{root:{flexGrow:1},paper:{height:"auto",padding:1*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},img:{width:280,height:135}}})(x),N=n(46),A=n.n(N),R=n(60),B=n.n(R),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentWillMount=function(){n.setState({video:n.props.video})},n.onVideoSelect=function(){n.props.onVideoSelectChange(n.state.video),window.scrollTo(0,0)},n.state={video:[],onVideoSelect:null},n.myRef=o.a.createRef(),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.myRef.current)}},{key:"render",value:function(){var e=this.props,t=(e.classes,e.video),n=t.snippet.thumbnails.default.url,a=t.snippet.title,r=new Date(t.snippet.publishedAt).toLocaleString();return o.a.createElement(A.a,{onClick:this.onVideoSelect,ref:this.myRef,alignItems:"flex-start"},o.a.createElement("img",{src:n}),o.a.createElement(B.a,{primary:a,secondary:r}))}}]),t}(a.Component),I=Object(p.withStyles)(function(e){return{paper:{height:140,padding:1*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(L),z=n(61),D=n.n(z),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onVideoSelect=function(e){n.setState({videoChange:e}),n.props.onVideoSelect(e)},n.state={videoChange:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props,a=n.videos,r=(n.onVideoSelect,a.map(function(t){return o.a.createElement(I,{key:t.etag,video:t,onVideoSelectChange:e.onVideoSelect})}));return o.a.createElement(D.a,{className:t.root},r)}}]),t}(a.Component),T=Object(p.withStyles)(function(e){return{paper:{height:140,padding:1*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},second:{height:90,padding:1*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(P),G=n(105),W=n.n(G),F="AIzaSyB6_5qfkLODfrm1g64DVEfPX7-3-rFfGjs",J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).selectVideo=function(e){n.setState({selectVideo:e})},n.state={videos:[],selectVideo:null},W()({key:F,term:"surfboards"},function(e){n.setState({videos:e,selectVideo:e[0]})}),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.videos,a=t.selectVideo;return o.a.createElement("div",{className:e.root},o.a.createElement(m.a,{container:!0,spacing:24,className:e.content},o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(V,{video:a})),o.a.createElement(m.a,{item:!0,xs:12,sm:6},o.a.createElement(T,{videos:n,onVideoSelect:this.selectVideo}))))}}]),t}(o.a.Component),q=Object(p.withStyles)(function(e){return{root:{flexGrow:1},paper:{height:140,padding:1*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},control:{padding:1*e.spacing.unit},demo:{paddingTop:10},content:{width:"auto",margin:0}}})(J),H=n(106),X=n.n(H),Y=n(107),$=n.n(Y),_=n(24),K=n.n(_),Q=n(110),U=n.n(Q),Z=n(38),ee=n.n(Z),te=n(33),ne=n.n(te),ae=n(63),oe=n.n(ae),re=n(31),le=n(108),ie=n.n(le),ce=n(109),se=n.n(ce),ue=n(66),he=n.n(ue),pe=n(64),de=n.n(pe),me=n(65),be=n.n(me),ge=n(111),Ee=n.n(ge),fe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,mobileMoreAnchorEl:null},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,n=e.mobileMoreAnchorEl,a=this.props.classes,r=Boolean(t),l=Boolean(n),i=o.a.createElement(oe.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},o.a.createElement(ne.a,{onClick:this.handleMenuClose},"Profile"),o.a.createElement(ne.a,{onClick:this.handleMenuClose},"My account")),c=o.a.createElement(oe.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMenuClose},o.a.createElement(ne.a,{onClick:this.handleMobileMenuClose},o.a.createElement(K.a,{color:"inherit"},o.a.createElement(ee.a,{badgeContent:4,color:"secondary"},o.a.createElement(de.a,null))),o.a.createElement("p",null,"Messages")),o.a.createElement(ne.a,{onClick:this.handleMobileMenuClose},o.a.createElement(K.a,{color:"inherit"},o.a.createElement(ee.a,{badgeContent:11,color:"secondary"},o.a.createElement(be.a,null))),o.a.createElement("p",null,"Notifications")),o.a.createElement(ne.a,{onClick:this.handleProfileMenuOpen},o.a.createElement(K.a,{color:"inherit"},o.a.createElement(he.a,null)),o.a.createElement("p",null,"Profile")));return o.a.createElement("div",{className:a.root},o.a.createElement(X.a,{position:"static"},o.a.createElement($.a,null,o.a.createElement(K.a,{className:a.menuButton,color:"inherit","aria-label":"Open drawer"},o.a.createElement(ie.a,null)),o.a.createElement(S.a,{className:a.title,variant:"h6",color:"inherit",noWrap:!0},"Youtube"),o.a.createElement("div",{className:a.search},o.a.createElement("div",{className:a.searchIcon},o.a.createElement(se.a,null)),o.a.createElement(U.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}})),o.a.createElement("div",{className:a.grow}),o.a.createElement("div",{className:a.sectionDesktop},o.a.createElement(K.a,{color:"inherit"},o.a.createElement(ee.a,{badgeContent:4,color:"secondary"},o.a.createElement(de.a,null))),o.a.createElement(K.a,{color:"inherit"},o.a.createElement(ee.a,{badgeContent:17,color:"secondary"},o.a.createElement(be.a,null))),o.a.createElement(K.a,{"aria-owns":r?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},o.a.createElement(he.a,null))),o.a.createElement("div",{className:a.sectionMobile},o.a.createElement(K.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(Ee.a,null))))),i,c)}}]),t}(o.a.Component),ve=Object(p.withStyles)(function(e){return{root:{width:"100%",backgroundColor:"#2196f3 !important"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(re.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(re.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(b.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(b.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(b.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(fe),Oe=n(112),ye=n.n(Oe),je=n(39),we=n.n(je),Ce=n(113),ke=n.n(Ce),Me=n(114),Se=n.n(Me),xe=n(115),Ve=n.n(xe),Ne=n(62),Ae=n.n(Ne);function Re(e){return o.a.createElement(Ae.a,e,o.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}var Be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:0},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return o.a.createElement(ye.a,{value:t,onChange:this.handleChange,showLabels:!0,className:e.root},o.a.createElement(we.a,{label:"Home",color:"secondary",icon:o.a.createElement(Re,null)}),o.a.createElement(we.a,{label:"Recents",icon:o.a.createElement(ke.a,null)}),o.a.createElement(we.a,{label:"Favorites",icon:o.a.createElement(Se.a,null)}),o.a.createElement(we.a,{label:"Nearby",icon:o.a.createElement(Ve.a,null)}))}}]),t}(o.a.Component),Le=Object(p.withStyles)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#81d4fa"}})(Be),Ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ve,null),o.a.createElement(q,null),o.a.createElement(Le,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[117,1,2]]]);
//# sourceMappingURL=main.0cf47efb.chunk.js.map