(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8193:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/accommodation/filter",function(){return i(4671)}])},4671:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return x}});var s=i(5893),n=i(9008),a=i.n(n),r=i(7959),l=i.n(r),c=i(5152),o=i.n(c),d=i(9743),_=i(9209),h=i(7294);i(1963);var m=i(9448);i(2013);var u=i(1163),f=i(1484);let p=o()(()=>Promise.all([i.e(5104),i.e(1255),i.e(3884)]).then(i.bind(i,3884)),{loadableGenerated:{webpack:()=>[3884]},ssr:!1});function x(){let[e,t]=(0,h.useState)([]),[i,n]=(0,h.useState)(!0),[r,c]=(0,h.useState)(null),{type:o,location:x,check_in:j,check_out:N,invite:b}=(0,u.useRouter)().query;return(0,h.useEffect)(()=>{fetch("/api/hebergement/getAll").then(e=>e.json()).then(e=>t(e)).catch(e=>console.log(e))},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"Accommodation"})}),(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsxs)("div",{className:l().filter_header_top,children:[(0,s.jsxs)("div",{className:l().filter_header_top_title_container,children:[(0,s.jsx)("span",{className:l().filter_header_top_title,children:"Find your best accommodation on Hotello"}),(0,s.jsx)("span",{className:l().filter_header_top_subtitle,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate "})]}),(0,s.jsx)("div",{className:l().filter_parent,children:(0,s.jsx)(m.Z,{locationSelected:x&&x,typeSelected:o&&o})})]}),(0,s.jsxs)("div",{className:l().filter_header_container,children:[(0,s.jsxs)("span",{className:l().filter_header_left,children:["Properties in Antananarivo :",(0,s.jsxs)("span",{className:l().filter_header_left_bold,children:[" ",e.length," properties found"]})]}),(0,s.jsx)("div",{})]}),(0,s.jsxs)("div",{className:l().filter_container,children:[(0,s.jsxs)("div",{className:l().filter_left,children:[(0,s.jsx)(p,{lat:-18.9433924,lng:47.5288271}),(0,s.jsx)(d.Z,{}),(0,s.jsx)(d.Z,{}),(0,s.jsx)(d.Z,{}),(0,s.jsx)(d.Z,{})]}),(0,s.jsx)("div",{className:l().filter_right,children:(0,s.jsx)(f.VO,{emptyMessage:"No hotel found",itemTemplate:e=>(0,s.jsx)(_.Z,{href:"/users/accommodation/".concat(e.id),rate:e.nombre_etoile_hebergement,img:e.images,price:e.min_prix_nuit_chambre,name:e.nom_hebergement,localisation:"Localisation information here",description:e.description_hebergement}),value:e,paginator:!0,rows:4})})]})]})]})}}},function(e){e.O(0,[5342,4908,4182,8504,3013,2748,1484,3602,2888,9774,179],function(){return e(e.s=8193)}),_N_E=e.O()}]);