(window["webpackJsonppics-grid"]=window["webpackJsonppics-grid"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),i=a(7),o=a.n(i),u=a(18),l=a(2),m=a(3),p=a(5),f=a(4),h=a(6),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.onformSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.searchTerm)},a.onInputChange=function(e){var t=e.target.value;a.setState(function(){return{searchTerm:t}})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onformSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"search"},"Image Search"),r.a.createElement("input",{type:"text",id:"search",value:this.state.searchTerm,onChange:this.onInputChange}))))}}]),t}(n.Component),d=a(19),g=a.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 681e2f5134297cd742a890f3fff16ff77b5089490a714d08b513a83fddb25399"}}),v=(a(43),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.urls,a=e.alt_description;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{src:t.regular,alt:a,ref:this.imageRef}))}}]),t}(n.Component)),j=function(e){var t=e.images.map(function(e){return r.a.createElement(v,{image:e,key:e.id})});return r.a.createElement("div",{className:"image-list"},t)},E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/search/photos",{params:{query:t,per_page:20}});case 3:n=e.sent,a.setState(function(){return{images:n.data.results}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error: "+e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:20}},r.a.createElement(b,{onSubmit:this.onSearchSubmit}),r.a.createElement(j,{images:this.state.images}))}}]),t}(n.Component);s.a.render(r.a.createElement(E,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a8cd2a09.chunk.js.map