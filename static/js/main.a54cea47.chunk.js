(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(401)},173:function(e,t,a){},207:function(e,t){},209:function(e,t){},241:function(e,t){},242:function(e,t){},311:function(e,t){},401:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(163),r=a.n(c),o=a(27),i=a(28),s=a(30),u=a(29),d=a(31),p=a(53),m=a.n(p),f=a(164),h=a.n(f),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"deleteProject",value:function(e){this.props.onDelete(e)}},{key:"render",value:function(){return l.a.createElement("li",{className:"Projects"},this.props.project.id,": ",this.props.project.title,": ",this.props.project.category," ",l.a.createElement("a",{href:"#",onClick:this.deleteProject.bind(this,this.props.project.id)},"X"))}}]),t}(n.Component),b=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={newProject:{}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){""===this.refs.title.value?alert("Title is required"):this.setState({newProject:{id:m.a.v4(),title:this.refs.title.value,category:this.refs.category.value}},function(){console.log(this.state),this.props.addProject(this.state.newProject)}),e.preventDefault()}},{key:"render",value:function(){var e=this.props.categories.map(function(e){return l.a.createElement("option",{key:e,value:e},e)});return l.a.createElement("div",null,l.a.createElement("h3",null,"AddProject"),l.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},l.a.createElement("div",null,l.a.createElement("label",null,"Title"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",ref:"title"})),l.a.createElement("div",null,l.a.createElement("label",null,"Category"),l.a.createElement("br",null),l.a.createElement("select",{ref:"category"},e)),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component));b.defaultProps={categories:["adfasdf\u0444\u044b\u0432\u0430","adfasdf","adfasdf"]};a(173);var j=a(165),E=a.n(j),y=a(166),g=a.n(y),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={data:[],projects:[],todos:[]},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getTodos",value:function(){h.a.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/MIN3Oas7rzWoff82GiE5xAclnDHiouvYI/values:batchGet",dataType:"json",cache:!1,success:function(e){console.log(e)}.bind(this),error:function(e,t,a){console.log(a)}})}},{key:"getTodo",value:function(){E.a.get("https://sheets.googleapis.com/v4/spreadsheets/1waPRw7sSGcWwlG4dfQxVkH-irMvWdVkSVSWYXW_c-_s/values:batchGet").then(function(e){console.log(e)})}},{key:"getProjects",value:function(){this.setState({projects:[{id:m.a.v4(),title:"adfa1",category:"adf"},{id:m.a.v4(),title:"adfa",category:"adf1"}]})}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;g.a.init({key:"1waPRw7sSGcWwlG4dfQxVkH-irMvWdVkSVSWYXW_c-_s",callback:function(t){e.setState({data:t})},simpleSheet:!0})}},{key:"handleAddProject",value:function(e){var t=this.state.projects;t.push(e),this.setState({projects:t})}},{key:"handleDeleteProject",value:function(e){var t=this.state.projects,a=t.findIndex(function(t){return t.id===e});t.splice(a,1),this.setState({projects:t})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",{className:"App-title"})),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Category:"),l.a.createElement("th",null,"Title:"),l.a.createElement("th",null,"Link:"))),l.a.createElement("div",{id:"employee-details"},e.map(function(e){return l.a.createElement("div",{key:e.employee},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,e.employee),l.a.createElement("td",null,e.favDog),l.a.createElement("td",null,l.a.createElement("button",null,l.a.createElement("a",{href:e.img,target:"_blank"},e.employee))))))})),l.a.createElement("div",null,l.a.createElement("a",{href:"https://script.google.com/macros/s/AKfycbzuOXb05nYvdvo4gWRFY2odI0WYgZ0ui-eHeWtUtSE-/dev",target:"_blank"},"add new")))}}]),t}(n.Component);r.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[167,2,1]]]);
//# sourceMappingURL=main.a54cea47.chunk.js.map