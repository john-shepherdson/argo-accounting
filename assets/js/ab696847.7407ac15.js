"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<n;l++)r[l]=a[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(7294),i=a(6010);const n="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(n,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(7462),i=a(7294),n=a(6010),r=a(2389),s=a(7392),c=a(7094),l=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:r,block:d,defaultValue:h,values:m,groupId:g,className:f}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=m?m:b.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),v=(0,s.l)(T,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===h?h:null!=(t=null!=h?h:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==k&&!T.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+T.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:x}=(0,c.U)(),[j,I]=(0,i.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=g){const e=y[g];null!=e&&e!==j&&T.some((t=>t.value===e))&&I(e)}const Z=e=>{const t=e.currentTarget,a=w.indexOf(t),o=T[a].value;o!==j&&(P(t),I(o),null!=g&&x(g,String(o)))},_=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var o;const t=w.indexOf(e.currentTarget)+1;a=null!=(o=w[t])?o:w[0];break}case"ArrowLeft":{var i;const t=w.indexOf(e.currentTarget)-1;a=null!=(i=w[t])?i:w[w.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,n.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":d},f)},T.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,o.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>w.push(e),onKeyDown:_,onFocus:Z,onClick:Z},r,{className:(0,n.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),r?(0,i.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function h(e){const t=(0,r.Z)();return i.createElement(d,(0,o.Z)({key:String(t)},e))}},2e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=a(7462),i=(a(7294),a(3905)),n=a(5488),r=a(5162);const s={id:"project_admin",title:"Project Admin",sidebar_position:3},c=void 0,l={unversionedId:"guides/project_admin",id:"guides/project_admin",title:"Project Admin",description:"Before you start",source:"@site/docs/guides/project_admin.md",sourceDirName:"guides",slug:"/guides/project_admin",permalink:"/argo-accounting/docs/guides/project_admin",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"project_admin",title:"Project Admin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up a Project",permalink:"/argo-accounting/docs/guides/setting_up_a_project"},next:{title:"Provider Admin",permalink:"/argo-accounting/docs/guides/provider_admin"}},u={},p=[{value:"Before you start",id:"before-you-start",level:3},{value:"Actions",id:"actions",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," ",(0,i.kt)("a",{parentName:"p",href:"/argo-accounting/docs/guides/registration"},"Register")," to Accounting Service.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"2.")," ",(0,i.kt)("a",{parentName:"p",href:"/argo-accounting/docs/authorization/assigning_roles"},"Contact")," the system administrator, to assign you the Project Admin role upon the project you want. "),(0,i.kt)("p",null,"In the Accounting Service, the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"project_admin"))," role is the main role for managing a Project. This role permits the client to perform any operation, on a specific Project."),(0,i.kt)("p",null,"Below we describe the actions a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"project_admin"))," can either perform through the Accounting User Interface or a simple HTTP request."),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"VIEW all Projects that are assigned to you",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/project#get---fetch-all-projects"},"document."),"."))),(0,i.kt)("admonition",{title:"ASSOCIATE one or more Providers with a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/project#associate-providers-with-a-specific-project"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/project#post---associate-providers-with-a-specific-project"},"document"),"."))),(0,i.kt)("admonition",{title:"DISSOCIATE Provider from a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/project/#dissociate-providers-from-a-specific-project"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/project#post---dissociate-providers-from-a-project"},"document"),"."))),(0,i.kt)("admonition",{title:"Create a new Installation on a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/installations"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/installation#create-a-new-installation"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#post---create-a-new-installation"},"document"),"."))),(0,i.kt)("admonition",{title:"Update the Installations belonging to a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/installations"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/installation#update-an-existing-installation"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#patch---update-an-existing-installation"},"document"),"."))),(0,i.kt)("admonition",{title:"Delete the Installations belonging to a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/installations"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/installation#delete-an-existing-installation"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#delete---delete-an-existing-installation"},"document"),"."))),(0,i.kt)("admonition",{title:"Collect Metrics from a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/project#collect-metrics-from-specific-project"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/collect_metrics#get---collecting-metrics-from-specific-project"},"document"),"."))),(0,i.kt)("admonition",{title:"Add a new Metric to a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"You can add Metrics to all the Installations belonging to the Project you have been granted as project admin."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/project/#add-a-new-metric"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#post---create-a-new-metric"},"document"),"."))),(0,i.kt)("admonition",{title:"Update a Metric belonging to a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"You can edit all Metrics belonging to the Project you have been granted as project admin."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/project/#update-an-existing-metric"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#patch---update-an-existing-metric"},"document"),"."))),(0,i.kt)("admonition",{title:"Delete a Metric belonging to a specific Project",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"You can delete all Metrics belonging to the Project you have been granted as project admin."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To perform this action via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/projects"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/project/#delete-an-existing-metric"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To syntax the HTTP request, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#delete---delete-an-existing-metric"},"document"),"."))),(0,i.kt)("admonition",{title:"Manage Metric Definitions",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"As a project admin, you can create new Metric Definitions and delete/update your created ones."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To manage them via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/metrics-definitions"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/metric_definition"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To manage them via the Accounting Service, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric_definition"},"document"),"."))),(0,i.kt)("admonition",{title:"Manage Providers",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"As a project admin, you can create new Providers and delete/update your created ones."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To manage them via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/providers"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/provider"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To manage them via the Accounting Service, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/provider"},"document"),"."))),(0,i.kt)("admonition",{title:"Manage Unit Types",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"As a project admin, you can create new Unit Types and delete/update your created ones."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To manage them via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/unit-types"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/unit_type"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To manage them via the Accounting Service, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/unit_type"},"document"),"."))),(0,i.kt)("admonition",{title:"Manage Metric Types",type:"info"},(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"info",label:"Info",mdxType:"TabItem"},"As a project admin, you can create new Metric Types and delete/update your created ones."),(0,i.kt)(r.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"To manage them via the website, please click ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/metric-types"},"here")," and follow the provided ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/ui_actions/metric_type"},"instructions"),"."),(0,i.kt)(r.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"To manage them via the Accounting Service, please visit the corresponding ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric_type"},"document"),"."))),(0,i.kt)("p",null,"Please note that you can perform all the actions on ",(0,i.kt)("a",{parentName:"p",href:"/argo-accounting/docs/guides/provider_admin"},"Providers")," and ",(0,i.kt)("a",{parentName:"p",href:"/argo-accounting/docs/guides/installation_admin"},"Installations")," belonging to the Project you have been granted as a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"project_admin")),"."),(0,i.kt)("hr",null))}h.isMDXComponent=!0}}]);