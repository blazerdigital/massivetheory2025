(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{4350:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library",function(){return s(4454)}])},4454:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSG:function(){return l},default:function(){return o}});var a=s(5893),i=s(1664),n=s.n(i);s(7243);var l=!0;function o(e){let{books:r,episodes:s}=e;if(!r.length)return(0,a.jsxs)("div",{className:"library-container",children:[(0,a.jsx)("h1",{className:"title",children:"Library"}),(0,a.jsx)("p",{className:"error-message",children:"⚠️ No books available."})]});let i=Object.entries(r.reduce((e,r)=>{let a=r.attributes||r,i=void 0!==a.order?a.order:"Unknown",n=null==s?void 0:s.find(e=>Number(null==e?void 0:e.order)===Number(i)),l="EP".concat(i),o=(null==n?void 0:n.Title)||"Episode ".concat(i),t=(null==n?void 0:n.thumb)||"/images/fallback-thumbnail.jpg";return e[l]||(e[l]={books:[],episodeTitle:o,episodeThumb:t}),e[l].books.push(a),e},{})).sort((e,r)=>{let[s]=e,[a]=r;return Number(a.replace("EP",""))-Number(s.replace("EP",""))});i.length;let l=i.slice(0,2);return(0,a.jsxs)("div",{className:"library-container",children:[(0,a.jsx)("h1",{className:"title",children:"Library"}),(0,a.jsx)("p",{className:"library-description",children:"\uD83D\uDCDA Explore books and media from our episodes. Click on a book for details."}),l.map(e=>{let[r,s]=e;return(0,a.jsxs)("div",{className:"episode-section",children:[(0,a.jsxs)("div",{className:"episode-header",children:[(0,a.jsx)("img",{src:s.episodeThumb,alt:s.episodeTitle,className:"episode-thumbnail"}),(0,a.jsx)("h2",{className:"episode-title",children:s.episodeTitle})]}),(0,a.jsx)("div",{className:"booksGrid",children:s.books.map(e=>(0,a.jsxs)("div",{className:"bookCard",children:[(0,a.jsx)(n(),{href:"/library/".concat(e.slug),passHref:!0,children:(0,a.jsx)("img",{src:e.cover_image,alt:"Book Cover",className:"book-image"})}),e.amazon_link&&(0,a.jsx)("a",{href:e.amazon_link,target:"_blank",rel:"noopener noreferrer",className:"buy-button",children:(0,a.jsx)("img",{src:"/images/amazonbuy.png",alt:"Buy on Amazon",className:"amazon-buy-img"})})]},e.id))})]},r)})]})}},7243:function(){}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4350)}),_N_E=e.O()}]);