import{h as a,g as n}from"./model-de6b70d1.js";import{f as i}from"./pages-e50f7e35.js";import{e as s}from"./index-c810d7ef.js";const f=a(),m=({params:t,url:r})=>{const o=n(t.mutation),e=i(r.pathname);if(!o||!e)throw s(404,`Mutation ${t.mutation} not found.`);return{field:o,page:e}},c=Object.freeze(Object.defineProperty({__proto__:null,prerender:f,load:m},Symbol.toStringTag,{value:"Module"}));export{c as _,m as l,f as p};