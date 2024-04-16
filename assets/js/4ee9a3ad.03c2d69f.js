"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[659],{569:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(4848),e=t(8453);const a={id:"assigning_roles",title:"Assigning Roles to a Client",sidebar_position:3},s=void 0,r={id:"authorization/assigning_roles",title:"Assigning Roles to a Client",description:"As we have already mentioned, a client can interact with a Project-Provider-Installation relationship only if it has been assigned to it one of the following roles:",source:"@site/docs/authorization/assigning_roles.md",sourceDirName:"authorization",slug:"/authorization/assigning_roles",permalink:"/argo-accounting/docs/authorization/assigning_roles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"assigning_roles",title:"Assigning Roles to a Client",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accounting System Roles",permalink:"/argo-accounting/docs/authorization/accounting_system_roles"},next:{title:"Accounting System Collections",permalink:"/argo-accounting/docs/category/accounting-system-collections"}},l={},c=[{value:"Assigning Roles to a Client as a Project Admin",id:"assigning-roles-to-a-client-as-a-project-admin",level:3},{value:"Assigning Roles to a Client as a Provider Admin",id:"assigning-roles-to-a-client-as-a-provider-admin",level:3},{value:"Assigning Roles to a Client as an Installation Admin",id:"assigning-roles-to-a-client-as-an-installation-admin",level:3}];function d(n){const i={a:"a",h3:"h3",img:"img",li:"li",p:"p",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,e.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"As we have already mentioned, a client can interact with a Project-Provider-Installation relationship only if it has been assigned to it one of the following roles:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/authorization/accounting_system_roles#project-admin",children:"Project Admin"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/authorization/accounting_system_roles#provider-admin",children:"Provider Admin"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/authorization/accounting_system_roles#installation-admin",children:"Installation Admin"})}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Initially, no client has a role. The Accounting System Administrators can initially turn any client into a Project Admin."}),"\n",(0,o.jsx)(i.table,{children:(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:(0,o.jsx)(i.img,{src:t(487).A+"",width:"225",height:"225"})}),(0,o.jsxs)(i.th,{children:["If you want to be a Project Admin to a particular Project, then send an email to ",(0,o.jsx)(i.a,{href:"mailto:accounting@einfra.grnet.gr",children:"accounting@einfra.grnet.gr"}),"."]})]})})}),"\n",(0,o.jsx)(i.p,{children:"Once you have been assigned the Project Admin role, you can in turn grant roles to other clients.\nGenerally, any of the above roles can assign roles to other clients at the level of the Project-Provider-Installation relationship they manage."}),"\n",(0,o.jsx)(i.h3,{id:"assigning-roles-to-a-client-as-a-project-admin",children:"Assigning Roles to a Client as a Project Admin"}),"\n",(0,o.jsx)(i.p,{children:"As a Project Admin, you can grant the above roles to other clients for a specific Project :"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/api/project#post-access-control",children:"You can turn a client into a Project Admin for the Project you manage."})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/api/provider#post---access-control-entry-for-a-particular-provider-of-a-specific-project",children:"You can turn a client into a Provider Admin for the Providers belonging to the Project you manage."})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/api/installation#post---access-control-entry-for-a-particular-installation",children:"You can turn a client into an Installation Admin for the Installations belonging to the Project you manage."})}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"assigning-roles-to-a-client-as-a-provider-admin",children:"Assigning Roles to a Client as a Provider Admin"}),"\n",(0,o.jsx)(i.p,{children:"As a Provider Admin, you can grant the Provider Admin and Installation Admin roles to other clients for a particular Provider:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/api/provider#post---access-control-entry-for-a-particular-provider-of-a-specific-project",children:"You can turn a client into a Provider Admin for the Provider you manage."})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/api/installation#post---access-control-entry-for-a-particular-installation",children:"You can turn a client into an Installation Admin for the Installations belonging to the Provider you manage."})}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"assigning-roles-to-a-client-as-an-installation-admin",children:"Assigning Roles to a Client as an Installation Admin"}),"\n",(0,o.jsx)(i.p,{children:"As an Installation Admin, you can grant the Installation Admin role to other clients for a particular Installation:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/argo-accounting/docs/api/installation#post---access-control-entry-for-a-particular-installation",children:"You can turn a client into an Installation Admin for the Installation you manage."})}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,e.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},487:(n,i,t)=>{t.d(i,{A:()=>o});const o="data:image/png;base64,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"},8453:(n,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var o=t(6540);const e={},a=o.createContext(e);function s(n){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:s(n.components),o.createElement(a.Provider,{value:i},n.children)}}}]);