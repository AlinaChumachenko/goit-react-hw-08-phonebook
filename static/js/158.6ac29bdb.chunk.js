"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{4158:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(4420),r="ContactForm_form__dhl+T",s="ContactForm_label__-cVXI",c="ContactForm_input__Bl93P",i="ContactForm_button__eSwX9",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},l=n(3553),u=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},h=(0,l.P1)([u,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),_=n(3634),p=n(184),f=function(){var e=(0,a.I0)(),t=(0,a.v9)(u);return(0,p.jsxs)("form",{className:r,onSubmit:function(n){n.preventDefault();var a=n.target.elements.name.value;if(t&&t.some((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("Contact with this name already exist!"),void n.target.reset();var r={id:o(),name:n.target.elements.name.value,number:n.target.elements.number.value};e((0,_.uK)(r)),n.target.reset()},children:[(0,p.jsxs)("label",{className:s,children:["Name",(0,p.jsx)("input",{className:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,placeholder:"Enter name..."})]}),(0,p.jsxs)("label",{className:s,children:["Number",(0,p.jsx)("input",{className:c,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number..."})]}),(0,p.jsx)("button",{className:i,type:"submit",children:"New contact"})]})},x="ContactItem_item__gxreB",v="ContactItem_button__IRFBz",j=function(e){var t=e.name,n=e.id,r=e.phone,s=(0,a.I0)();return(0,p.jsxs)("li",{className:x,children:[t+": "+r,(0,p.jsx)("button",{className:v,type:"button",onClick:function(){return s((0,_.GK)(n))},children:"Delete"})]})},b="ContactList_list__csErn",C=function(){var e=(0,a.v9)(h);return e.length>0?(0,p.jsx)("ul",{className:b,children:e.map((function(e){var t=e.name,n=e.id,a=e.number;return(0,p.jsx)(j,{name:t,id:n,phone:a},n)}))}):(0,p.jsx)("p",{children:"This contact does not exist"})},g=n(4808),N="Filter_label__vEd1E",w="Filter_input__N7T3z",y=function(){var e=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)();return(0,p.jsxs)("label",{className:N,children:["Find in Contacts",(0,p.jsx)("input",{className:w,type:"text",onChange:function(e){t((0,g.Y)(e.target.value))},value:e,placeholder:"Start entering a contact"})]})},F=n(2791),k="Contacts_box__Uwh0J",I="Contacts_title__dHlef";function L(){var e=(0,a.v9)(u),t=(0,a.v9)(m),n=(0,a.v9)(d),r=(0,a.I0)();return(0,F.useEffect)((function(){r((0,_.yF)())}),[r]),(0,p.jsxs)("div",{className:k,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{className:I,children:"Phonebook"}),(0,p.jsx)(f,{})]}),(0,p.jsx)("div",{children:t&&!n?(0,p.jsx)("p",{children:"Loading..."}):(0,p.jsx)(p.Fragment,{children:e&&e.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:I,children:"Contacts"}),(0,p.jsx)(y,{}),(0,p.jsx)(C,{})]}):(0,p.jsx)("p",{children:"Your contact list is empty"})})})]})}}}]);
//# sourceMappingURL=158.6ac29bdb.chunk.js.map