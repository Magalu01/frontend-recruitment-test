(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{78:function(n,t,e){"use strict";e.r(t);var i=e(1),c=e(0),r=e.n(c),o=e(11),a=e.n(o),s=e(5),d=e(41),u=e(17),f=e(2),l=e(3);function p(){var n=Object(f.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: 0;\n}\nbody {\n  background: #fff;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  width: 100%;\n  font-family: 'Work Sans', sans-serif;\n}"]);return p=function(){return n},n}var b=Object(l.a)(p()),h=e(16),x=e(4),j=e(10),A=e.p+"static/media/Group.77d3c46d.png",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAZ5JREFUOBGdlLtKA0EUhtdoZbCTiPdLKdoKBpXtJFjY2Vv5AHaCii8hKOgDRLBSGxvFSmxsJGKMCaYNCIoXAjF+J5wlZza7AbPwcWbO/++/O5nJel7oqnveAhxDAb7hDW5hB/pD9ugpxj44gXob3tHWoxO0i0GC7jWkRj2ANZiGZdiGCgQP2ooNxJRVY4k6H2WkPwAX6vulZlp8NNNqkDdKtxhMAz0Jz+p/pHYZmff2vCMVDx0hZoI3o35Z8qK1JZj42ri0QpvxNVpN9SXrk7AhbTxYIW7Mur7QSqqPWJ+E/Whj2ApxY5bWjTaoetX6JCyvjTkrtBnPoPWqnnN8PGlXf1A5RylHjJjgOVe/7P64Y6GRgg+Q3RFj0jGYCdqm+sSbNVJziLBhTAXGK9AIpSZgFs5AQgIiD3cjFdOeMcoNsow8fIb6QdgL/bHmK4VGiKvwFHNzlf4+yFelrB4n0P07EI6phyIn2wc5AhWQXbvBXKKKZ4pyBaNQBB/tldrZReAkyIdBli2/swR3fhEwAUWQwLuWZf43mhDZhFMo/wFNVOfnZ9Lk9wAAAABJRU5ErkJggg==",m=e(20),O=e.n(m),v="get_all_heroes",w="favorites",y="get_heroes_by_id",B="comics_by_hero",S="https://gateway.marvel.com/v1/public",N=v,k=w,E=y,I=B,R=function(n){var t=n?"&nameStartsWith=".concat(n):"";return function(n){O.a.get("".concat(S,"/characters?ts=").concat("1604576114","&apikey=").concat("1e0c79a8d703def813c20fd87bff5f7e","&hash=").concat("d3bf176a851abd7f25fa2f613e337a65","&limit=",20).concat(t),{headers:{Accept:"*/*"}}).then((function(t){var e=t.data.data.results;n({type:N,payload:e})})).catch((function(n){console.log(n)}))}},Q=function(n){return function(t){t({type:k,payload:n})}},C=function(n){return function(t){O.a.get("".concat(S,"/characters/").concat(n,"/comics?ts=").concat("1604576114","&apikey=").concat("1e0c79a8d703def813c20fd87bff5f7e","&hash=").concat("d3bf176a851abd7f25fa2f613e337a65","&limit=10"),{headers:{Accept:"*/*"}}).then((function(n){var e=n.data.data.results;t({type:I,payload:e})})).catch((function(n){console.log(n)}))}};function U(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  img {\n    cursor: pointer;\n  }\n  h1 {\n    margin-top: 20px;\n    color: #404040;\n    font-weight: bold;\n  }\n\n  h4 {\n    color: #8c8c8c;\n    margin-top: 10px;\n    font-size: 14px;\n  }\n  @media (max-width: 500px) {\n    h1 {\n      font-size: 26px;\n    }\n    h4 {\n      margin-top: -10px;\n      padding: 40px;\n    }\n    div {\n      margin-top: -70px;\n    }\n  }\n\n  div {\n    max-width: 1280px;\n    width: 100%;\n    img {\n      position: absolute;\n      margin-top: 70px;\n      height: 25px;\n      margin-left: 20px;\n    }\n    input {\n      margin-top: 50px;\n      border-radius: 100px;\n      height: 60px;\n      width: 100%;\n      border: none;\n      background: #fdecec;\n      text-indent: 80px;\n      font-size: 18px;\n      text-decoration-color: red;\n      color: #ff1510;\n      &::-webkit-input-placeholder {\n        color: #ff1510;\n      }\n    }\n  }\n"]);return U=function(){return n},n}var J=l.b.div(U()),F=function(){var n=Object(s.b)(),t=Object(x.f)();return Object(i.jsxs)(J,{children:[Object(i.jsx)("img",{src:A,alt:"Logo da marvel",onClick:function(){t.push("/"),n(R())}}),Object(i.jsx)("h1",{children:"EXPLORE O UNIVERSO"}),Object(i.jsx)("h4",{children:"Mergulhe no dom\xednio deslumbrante de todos os personagens cl\xe1ssicos que voc\xea ama - e aqueles que voc\xea descobrir\xe1 em breve!"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:g,alt:"lupa"}),Object(i.jsx)("input",{type:"text",placeholder:"Procure por her\xf3is",onChange:function(t){return n(R(t.target.value))}})]})]})},Y=e(18),V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAYlJREFUSA21ls0uA1EYhkcXaoGlJiSi9twA6ZJVw5K9WIk7IMI1EK5BXALJrHEBWGnK0k8kSBfqeZuKmek5M3OmZyZ50znf937v0/npdIIgsXWDoIb20TV6QZ/oDp2gxahd635dffnkv0Gar0W9A/sYttA76lr0Q13QcXSMtLZ5lbM9AFGBxl7KYDLww8F7EAMyuOYwnATnWa/3gEBGUbtk2BP51QrETTQTO1T/i2lxBGv6zzYmNkc4vEdas8a232JLsC8yx/zmGtO+dRo7xpb/Ykewtv9cY2JbsNDY8l8M9eRooDw/zGE9jd73BxaWDPw/e4Dq6K0koHLnY1eFwgrqeAYqbzUG+lvQ2EBpfxsu1005ehTaNww7yCXU5t21UyIdYIdDAo8icdm7wE4LAs+y0xMOQBV07gi80FwiKt+SwSq6zAm8kj9fssVFwAS6zQCqP2mJcCsTNIXuLcAH9d0SM9wEziG9S0Rv9WfW9YzRYm2CF9BrH6jP2EtrsdSUKQBLqIWWU2zG1i9cdJnc2In52QAAAABJRU5ErkJggg==",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAaVJREFUOBGVlD8vQ2EUxl/SpYOk6aRilVhJNJ2YWFjEYmYWIQz9BMS/wRdgUjNfoAnxZ23CKgwWGhGkIaF+D+e+vW2vq1fyc84953mevu29rXOhv7pzBSjBPbzBJexCzlCvmXbSSFsIRTRaFmvwBfUInpiJqJ0869Dl07hYMLGWOzAMPZAHnSIIOrSZdtJIGxxi8SeQQS88g0wz/lVCDfM5mA+NfMt8GuRVRs7xb8sGJa9K2OA/sIxtBZbtYixhjpfjH7WMsgKrdpH1ioQN/qxlVLvx1syfTpgTlgfemgIrthkKKxL2gbeit1y0455RG89Sh4nygLy600UFpuHGBssd5ngZviXzKuP3rdNMgh5QMevV/zTSwifodFNNcgYrtvigTjQtIy7QjMO7eVYjJLyMcxsmeKXmI0UM2Y3Ai2k3/9JJqA94z4SP1MFWsWbwYJp9avyNRJCCIzPcUfuDUPVwa7tjairYxVaEuvMnZrym6psgrmx2Sg0e5tgsv8SQgYoFnFOF7qZmGS9M0mDUL7WeLwUJ9X1JMtq0BAyATnehvk3QMvgGuMAQMQolNcwAAAAASUVORK5CYII=",G=e(45),X=e.n(G);function M(){var n=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin-top: -25px;\n  padding: 25px;\n  h4 {\n    color: #404040;\n  }\n  button {\n    height: 20px;\n    width: 20px;\n    border: none;\n    cursor: pointer;\n  }\n  img {\n    height: 20px;\n    width: 20px;\n  }\n"]);return M=function(){return n},n}function K(){var n=Object(f.a)(["\n  cursor: pointer;\n  img {\n    width: 250px;\n    height: 250px;\n    border-bottom: 6px solid red;\n  }\n  padding: 25px;\n"]);return K=function(){return n},n}function q(){var n=Object(f.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 300px;\n  height: 300px;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]);return q=function(){return n},n}function W(){var n=Object(f.a)(["\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  flex-flow: wrap;\n"]);return W=function(){return n},n}function D(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  cursor: pointer;\n  img {\n    height: 15px;\n    width: 15px;\n  }\n  h4 {\n    padding-left: 5px;\n    color: #ff1510;\n  }\n"]);return D=function(){return n},n}function P(){var n=Object(f.a)(["\n  width: 60px;\n  height: 50px;\n  margin-top: -5px;\n"]);return P=function(){return n},n}function T(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding-right: 25px;\n  h4 {\n    padding-right: 25px;\n    padding-left: 5px;\n    color: #ff1510;\n  }\n  img {\n    height: 20px;\n    width: 20px;\n  }\n"]);return T=function(){return n},n}function H(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: right;\n  margin-right: 20px;\n"]);return H=function(){return n},n}function Z(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  width: 30%;\n  margin-left: 20px;\n  h4 {\n    color: #8c8c8c;\n  }\n"]);return Z=function(){return n},n}function L(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return L=function(){return n},n}function _(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  width: 1360px;\n  margin-top: 30px;\n  flex-direction: column;\n"]);return _=function(){return n},n}var $=l.b.div(_()),nn=l.b.div(L()),tn=l.b.div(Z()),en=l.b.div(H()),cn=l.b.div(T()),rn=Object(l.b)(X.a)(P()),on=l.b.div(D()),an=l.b.div(W()),sn=l.b.div(q()),dn=l.b.div(K()),un=l.b.div(M()),fn=function(n){var t=n.heroes,e=n.setAllHeroes,r=n.setOrder,o=n.order,a=n.setMyFavorites,d=n.myFavorites,f=Object(s.b)(),l=Object(x.f)(),p=Object(s.c)((function(n){return n.heroes})).favorites,b=Object(c.useState)([]),h=Object(j.a)(b,2),A=h[0],g=h[1];Object(c.useEffect)((function(){g(t)}),[A,g,e,d,a]);var m=function(n){var e,i=t.find((function(t){return t.id===n}));f((e=i,function(n){n({type:E,payload:e})})),l.push("/details/".concat(n),{id:n})};return Object(i.jsxs)($,{children:[Object(i.jsxs)(nn,{children:[Object(i.jsx)(tn,{children:Object(i.jsxs)("h4",{children:["Encontrado ",t.length," ",t.length>1?"her\xf3is":"her\xf3i"]})}),Object(i.jsxs)(en,{children:[Object(i.jsxs)(cn,{children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAbCAYAAABxwd+fAAAAAXNSR0IArs4c6QAAAnxJREFUOBF9lE9IFkEYh0cpC7WMOhR1ETpEFEGHhLJbFzOhxKRLVKcuEV0ML0LHrmEEHUQJoYMUqJDUrUOlJQafeTCIgiCKiizLsJLs+c03s/u23+73wrPv33lnZ3ZmnSuQVecaYRAWYB5OFJRWDzPwBqwafmPvKhpVW5Qg3pbJrcU/koklbrVGb5Oq1MiLpdk8i2W0wBeztFHsmrxaxSoSFNcR3xIGbEYfgk/wNMT+MOhzsPMVTc6AvpLd5Dz7ITXNuV1IDBQ0+FAQXyTe+l8zAqdNsc5MfAsVd8A9WAnxN+ifwX6PXpc0w5kIiVl0A6jwBxxUEboGhkATXIWjwZbvj0n8/BtD149s5BL2LDRAD4Wb0DvgHEhm4J23yo841s94JczwF30e4ql+ia03K0Fc2n7sKdDb/IKtSVOcJngFSopxY8eY9Fd4bHJ9SZNokNwNr0PRfVNsGz0ivhRy/eh43pzfIwI6mLfgInTCWciTEsHDoJpluAmp0OgAxJn1SU8ZP8alX8AF0J9Avt5OH6X8RujjaVv3AFszRpFPvZe9POdgTdl19ej2YPuquTCDZumE78Zvw35i/D7sSeOPqFEtgZ3oPaHrN7Rmawz+AloX9k7wpboz/jF61Guz7bLG8e2yxvAvQwmi7MN4Hh20X54a2X/xKH6HKVJj+bqcz0xcV8c269YyrsFd2AaSDWXltMwV0NHogmFoAclJuA2qnYcJSIW1DptN1EAvxHRpm01OH0V7Wykk6kBXQEXC7p0fQGza5HsruxChoN0U6T+0PltIrNfUTNt8/I0ott0kxtgYXYGs6BjQy0vVpV2nagTixocxqSJ3CfQDtMfE/QNCd3jjZUP/EQAAAABJRU5ErkJggg==",alt:""}),Object(i.jsx)("h4",{children:"Ordenar por nome - A/Z"}),Object(i.jsx)(rn,{onColor:"#ff1510",offHandleColor:"#fff",uncheckedIcon:!1,checkedIcon:!1,boxShadow:"",activeBoxShadow:"",onChange:function(n){var e;(e=n)?(t=t?t.sort((function(n,t){return t.name-n.name||t.name.localeCompare(n.name)})):[],g(t),r(e)):(t=t?t.sort((function(n,t){return n.name-t.name||n.name.localeCompare(t.name)})):[],g(t),r(e))},checked:o})]}),Object(i.jsxs)(on,{onClick:function(){d?(a(!1),f(R()),e(t)):(a(!0),e(p||t))},children:[Object(i.jsx)("img",{src:d?V:z,alt:"heart"}),Object(i.jsx)("h4",{children:"Somente favoritos"})]})]})]}),Object(i.jsx)(an,{children:t.length>0?t.map((function(n){var e=n.thumbnail,c=e.path,r=e.extension,o=p.find((function(t){return t.id===n.id}));return Object(i.jsxs)(sn,{children:[Object(i.jsx)(dn,{children:Object(i.jsx)("img",{src:"".concat(c,".").concat(r),alt:n.name,onClick:function(){return m(n.id)}})}),Object(i.jsxs)(un,{children:[Object(i.jsx)("h4",{children:n.name}),Object(i.jsx)("button",{onClick:function(){return function(n){var e=t.find((function(t){return t.id===n}));if(p.find((function(t){return t.id===n}))){var i=p.filter((function(t){return t.id!==n}));i.sort((function(n,t){return n.name-t.name||n.name.localeCompare(t.name)})),f(Q(Object(Y.a)(i)))}else p.length<5?(p.sort((function(n,t){return n.name-t.name||n.name.localeCompare(t.name)})),f(Q([].concat(Object(Y.a)(p),[e])))):Object(u.b)("Voc\xea s\xf3 pode favoritar at\xe9 5 her\xf3is")}(n.id)},children:Object(i.jsx)("img",{src:o?V:z,alt:"icons-heart"})})]})]},n.id)})):Object(i.jsx)("h1",{children:Object(i.jsx)("b",{children:"Nenhum her\xf3i encontrado"})})})]})};function ln(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n"]);return ln=function(){return n},n}function pn(){var n=Object(f.a)(["\n  padding-top: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return pn=function(){return n},n}function bn(){var n=Object(f.a)(["\n  background-color: #fff;\n  width: 100%;\n  footer {\n    background: #ff1510;\n    height: 90px;\n  }\n"]);return bn=function(){return n},n}var hn=l.b.div(bn()),xn=l.b.div(pn()),jn=l.b.div(ln()),An=function(){var n=Object(c.useState)(!1),t=Object(j.a)(n,2),e=t[0],r=t[1],o=Object(c.useState)([]),a=Object(j.a)(o,2),d=a[0],u=a[1],f=Object(c.useState)(!1),l=Object(j.a)(f,2),p=l[0],b=l[1],h=Object(s.c)((function(n){return n.heroes})).heroes,x=Object(s.b)();return Object(c.useEffect)((function(){x(R())}),[x]),Object(c.useEffect)((function(){u(h)}),[h]),Object(i.jsxs)(hn,{children:[Object(i.jsx)(xn,{children:Object(i.jsx)(F,{heroes:h})}),Object(i.jsx)(jn,{children:Object(i.jsx)(fn,{heroes:d,setAllHeroes:u,setOrder:r,order:e,myFavorites:p,setMyFavorites:b})}),Object(i.jsx)("footer",{})]})};function gn(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 40px;\n"]);return gn=function(){return n},n}function mn(){var n=Object(f.a)(["\n  padding-top: 30px;\n  padding-left: 60px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n"]);return mn=function(){return n},n}function On(){var n=Object(f.a)(["\n  width: 100%;\n  background: #e7f6e7;\n  height: 100vw;\n"]);return On=function(){return n},n}var vn=l.b.div(On()),wn=l.b.div(mn()),yn=l.b.div(gn());function Bn(){var n=Object(f.a)(["\n  max-width: 1280px;\n  min-width: 500px;\n  width: 100%;\n  img {\n    position: absolute;\n    margin-top: 30px;\n    height: 25px;\n    margin-left: 60px;\n  }\n  input {\n    max-width: 100vh;\n    margin-left: 40px;\n    margin-top: 10px;\n    border-radius: 100px;\n    height: 60px;\n    width: 900px;\n    border: none;\n    background: #fff;\n    text-indent: 80px;\n    font-size: 18px;\n    text-decoration-color: #8c8c8c;\n    color: #8c8c8c;\n    &::-webkit-input-placeholder {\n      color: #8c8c8c;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    img {\n      margin-left: -10px;\n    }\n\n    input {\n      max-width: 100vh;\n      margin-left: -40px;\n      margin-top: 10px;\n      border-radius: 100px;\n      height: 60px;\n      width: 500px;\n      border: none;\n      background: #fff;\n      text-indent: 80px;\n      font-size: 18px;\n      text-decoration-color: #8c8c8c;\n      color: #8c8c8c;\n      &::-webkit-input-placeholder {\n        color: #8c8c8c;\n      }\n    }\n  }\n\n  @media (max-width: 700px) {\n    img {\n      margin-left: -10px;\n    }\n\n    input {\n      max-width: 100vh;\n      margin-left: -40px;\n      margin-top: 10px;\n      border-radius: 100px;\n      height: 60px;\n      width: 100%;\n      border: none;\n      background: #fff;\n      text-indent: 80px;\n      font-size: 18px;\n      text-decoration-color: #8c8c8c;\n      color: #8c8c8c;\n      &::-webkit-input-placeholder {\n        color: #8c8c8c;\n      }\n    }\n  }\n"]);return Bn=function(){return n},n}function Sn(){var n=Object(f.a)(["\n  img {\n    height: 100px;\n    cursor: pointer;\n  }\n"]);return Sn=function(){return n},n}function Nn(){var n=Object(f.a)(["\n  display: flex;\n  @media (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n  }\n  @media (max-width: 1200px) {\n    display: flex;\n    align-items: start;\n    justify-content: center;\n  }\n"]);return Nn=function(){return n},n}var kn=l.b.div(Nn()),En=l.b.div(Sn()),In=l.b.div(Bn()),Rn=function(n){var t=n.setHeroFilter,e=n.history;return Object(i.jsxs)(kn,{children:[Object(i.jsx)(En,{children:Object(i.jsx)("img",{src:A,alt:"Logo da marvel",onClick:function(){return e.push("/")}})}),Object(i.jsxs)(In,{children:[Object(i.jsx)("img",{src:g,alt:"lupa"}),Object(i.jsx)("input",{type:"text",placeholder:"Procures por her\xf3is",onChange:function(n){return t(n.target.value)}})]})]})},Qn=function(){return(new Date).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"})};function Cn(){var n=Object(f.a)(["\n  white-space: nowrap;\n  width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex;\n  justify-content: space-between;\n  margin-top: -25px;\n  padding: 25px;\n  h4 {\n    font-size: 15px;\n    color: #404040;\n  }\n  button {\n    border: none;\n  }\n"]);return Cn=function(){return n},n}function Un(){var n=Object(f.a)(["\n  img {\n    width: 100px;\n    height: 150px;\n    border-bottom: 6px solid red;\n  }\n  padding: 25px;\n"]);return Un=function(){return n},n}function Jn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: end;\n  flex-direction: column;\n  flex-flow: wrap;\n  div {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n"]);return Jn=function(){return n},n}function Fn(){var n=Object(f.a)(["\n  margin-top: 120px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-content: center;\n\n  h1 {\n    margin-top: 40px;\n  }\n"]);return Fn=function(){return n},n}var Yn=l.b.div(Fn()),Vn=l.b.div(Jn()),zn=l.b.div(Un()),Gn=l.b.div(Cn()),Xn=function(n){var t=n.idHero,e=n.comicsByGet,r=n.history.location,o=Object(c.useState)([]),a=Object(j.a)(o,2),d=a[0],u=a[1],f=Object(s.b)(),l=Object(s.c)((function(n){return n.heroes})).comicsBy;return Object(c.useEffect)((function(){if(t)f(C(t));else{var n=r.state;n&&(f(C(n.id)),u(e))}}),[d]),Object(i.jsxs)(Yn,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"\xdaltimos lan\xe7amentos"})}),Object(i.jsx)(Vn,{children:l&&l.length>0?l.map((function(n){var t=n.thumbnail,e=t.path,c=t.extension;return Object(i.jsxs)("div",{children:[Object(i.jsx)(zn,{children:Object(i.jsx)("img",{src:"".concat(e,".").concat(c),alt:n.title})}),Object(i.jsx)(Gn,{children:Object(i.jsx)("h4",{children:n.title})})]},n.id)})):Object(i.jsx)("div",{children:Object(i.jsx)("h2",{style:{textAlign:"center"},children:"Nenhuma HQ Encontrada."})})})]})};function Mn(){var n=Object(f.a)(["\n  margin-top: 10px;\n  div {\n    display: flex;\n    align-items: center;\n    margin-top: 5px;\n    h5 {\n      padding-left: 20px;\n      font-size: 20px;\n      color: #404040;\n    }\n  }\n"]);return Mn=function(){return n},n}function Kn(){var n=Object(f.a)(["\n  margin-top: 10px;\n  div {\n    display: flex;\n    align-items: center;\n    margin-top: 5px;\n    h5 {\n      padding-left: 20px;\n      font-size: 20px;\n      color: #404040;\n    }\n  }\n"]);return Kn=function(){return n},n}function qn(){var n=Object(f.a)(["\n  margin-top: 20px;\n"]);return qn=function(){return n},n}function Wn(){var n=Object(f.a)(["\n  margin-top: 40px;\n"]);return Wn=function(){return n},n}function Dn(){var n=Object(f.a)(["\n  margin-top: 25px;\n  display: flex;\n  justify-content: space-between;\n"]);return Dn=function(){return n},n}function Pn(){var n=Object(f.a)(["\n  p {\n    font-size: 18px;\n    color: #8c8c8c;\n  }\n"]);return Pn=function(){return n},n}function Tn(){var n=Object(f.a)(["\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  h1 {\n    color: #404040;\n  }\n  img {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n  }\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]);return Tn=function(){return n},n}function Hn(){var n=Object(f.a)(["\n  width: 300px;\n  margin-right: 170px;\n  @media (max-width: 700px) {\n    width: 500px;\n    margin-right: 0px;\n    padding: 20px;\n  }\n"]);return Hn=function(){return n},n}function Zn(){var n=Object(f.a)(["\n  img {\n    height: 500px;\n    width: 500px;\n  }\n  @media (max-width: 700px) {\n    padding: 25px;\n  }\n"]);return Zn=function(){return n},n}function Ln(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return Ln=function(){return n},n}function _n(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 1280px;\n"]);return _n=function(){return n},n}var $n=l.b.div(_n()),nt=l.b.div(Ln()),tt=l.b.div(Zn()),et=l.b.div(Hn()),it=l.b.div(Tn()),ct=l.b.div(Pn()),rt=l.b.div(Dn()),ot=l.b.div(Wn()),at=l.b.div(qn()),st=l.b.div(Kn()),dt=l.b.div(Mn()),ut=function(){var n=Object(s.b)(),t=Object(x.f)(),e=t.location,r=Object(s.c)((function(n){return n.heroes})),o=r.comicsBy,a=r.hero,d=r.favorites;Object(c.useEffect)((function(){if(a.id)n(C(a.id));else{var t=e.state;t&&(n((i=t.id,function(n){O.a.get("".concat(S,"/characters/").concat(i,"?ts=").concat("1604576114","&apikey=").concat("1e0c79a8d703def813c20fd87bff5f7e","&hash=").concat("d3bf176a851abd7f25fa2f613e337a65"),{headers:{Accept:"*/*"}}).then((function(t){var e=t.data.data.results;n({type:E,payload:e[0]})})).catch((function(n){console.log(n)}))})),n(C(t.id)))}var i}),[a]);return Object(i.jsx)($n,{children:function(){if(a.id){var c=a.id,r=a.name,s=a.series,f=a.comics,l=a.description,p=a.thumbnail,b=a.modified,h=f,x=s.available,j=p.path,A=p.extension,g={favorite:d.find((function(n){return n.id===c})),id:c,name:r,series:s,comics:f,description:l,itemsStories:h,thumbnail:p,available:x,path:j,extension:A,modified:b};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(nt,{children:[Object(i.jsxs)(et,{children:[Object(i.jsxs)(it,{children:[Object(i.jsx)("h1",{children:g.name||""}),Object(i.jsx)("img",{src:g.favorite?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbZJREFUSA3Flz8vA2Ecx6/aqBj8iSYkDMJIQpgsbF3rBXTiRfASGNDNzo6hO1MnYUAiQcLESCJUIurzlR696/Xp3WmfPsm39zy/P9/PXe/ytOc4AaPiOHOogC7RC3pF12gXLfhbFKvmVKNa9ahXHvP++ro1RQNoD32hikFH5DJoCGluqpXXPhqsAypAYhRdIJNJbe6eWqk2ZppfUTvmgRPoRqcRTEwAU+4MRvoXzmLDAtQ9oU2BEwAzHB9QrwIWxhuM8S4+8sgWVNclVl7grFaWR1bgactQ4aZ0j8tM/p40O2fxoSsW2PYoC/xkmyqmwKUOgEsCFzsALmqPTqIb5O4s7T6Klfy5WCY5i+Cc5xsGvGMBXvBAtQCqr/ygjfBDMerAVXia5HEb4Cd49gRC3SAFfUi/m616yM7x6nf9jUcKh9FtC+B3eIwYYf4kDRPo8R9w9U76fUOtaZxBzzHg6pkNBWlUhMEieo8AV+1SI79IcYxy6BM1e+BUsxzJvFkxhishwKvNfGLlAa8Z4OuxTMM2Ad4KgG+H7Y9dB1R/l/Sa495vvZ4kYhtGaQSUQtrXtf+movS6td+0Uu5LdjpVagAAAABJRU5ErkJggg==":z,alt:"heart",onClick:function(){return function(t){if(d.find((function(n){return n.id===t}))){var e=d.filter((function(n){return n.id!==t}));e.sort((function(n,t){return n.name-t.name||n.name.localeCompare(t.name)})),n(Q(Object(Y.a)(e)))}else d.length<5?(d.sort((function(n,t){return n.name-t.name||n.name.localeCompare(t.name)})),n(Q([].concat(Object(Y.a)(d),[a])))):Object(u.b)("Voc\xea s\xf3 pode favoritar at\xe9 5 her\xf3is")}(g.id)}})]}),Object(i.jsxs)(ct,{children:[Object(i.jsx)("p",{children:g.description||""}),Object(i.jsxs)(rt,{children:[Object(i.jsxs)(st,{children:[Object(i.jsx)("p",{children:"Quadrinhos"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAAAXNSR0IArs4c6QAAA1FJREFUSA2tlklIVVEYx2+iWQSCKBSUGDYsWgRlUovMBopIkMZFYRBCmFotpBZRJEQ8GqAQF7ZqUVBCNNAmlUqTCoIisrk2ZtmkRPOo2e9/Pef1uu/evPrehd/7zv3Od77/me45z3FCPv2OE4FRIcMTC0MoA37CcWXCpsPI4WRNDdmomLg0KEWoHdsHMymvH+Hq85bMh8St0G/owy6HqxBJpo6bi6T5ILHfxqr8HorgGZQnVZSE1+ArTIEKsCN9QnkBfABNeeIPiXaDBGohRRmxO41P/iZYC58gPyFFEmwFTeNHmABVUGNE6yjbkR6ivAdewcQhi9IoG46BTbiK8ljoMb6N2BS4Yd4VVwZn4SFkhhIlMAt2wTtQkjewAkZDbPJq4+vC2k59p7wE2uEKpAeKUrkINKIvoAQ3YTNkQp55t4k1gjTYAdZnraa0EDQTDcAn6vNQYRvItikEOw60Np/B1mstp8Ek0M60/lirzi6DX3DAR85NHtvA3W0Eax01GlunXs+FMaBps34/e5L6ShNTGSfq0/gtvqmQA51wCTQqTXEL+Il4fZryI9ALJf+IBiTowD8eshSMnQGPwZs46F3H30poBe2NgqgoL6r0a3gPfyGop0Exfu2sT2teBNrN2vF5riiFarBBybY15L5s8muGBr5RCvXGmUxBjUrfps15kbKuODyOkwpNMZU2KBFbQb7rJqd2doYrZn/kAK1bIiK27S3yrDO5nmN1q2gWB0YYI5qL8zXYhsOx+qzmgb7dbigGfV7K1WC1ohbnbND9Nxwx/e9ZCrdBa7gYnoJyaaR/P4+oIgUq1oCupqGI6gAvhROgWSoBK9ZCeU6sRlyZAJ0WYQVfELsQToOmbwNoatXpg1AFnXEiXgdBR2Ew0WZitAx3oA3KQUuiKZTwBVCOHm/+uHeCdBVpOryi6vk50O7bBBphBHQqqe4M7AN75YUTVA9opEP7EVhRXVkFsA10bJ0CjUQnyX3QFD4AGy/7DeriRhTkIHgyaJu7PcXqrtwL86EWXoJG5z081IHtkB2UO9BPI92HP0DC06EeGmE/nAdNpTrUAYdhVmCysBUk0bbvhtVQBlqrXrgLWsNBRfz/d/ynByTdQnUu5EAjNJOkCxvq+QP0IMAuh5qHyQAAAABJRU5ErkJggg==",alt:""}),Object(i.jsx)("h5",{children:g&&g.itemsStories?g.itemsStories.available:""})]})]}),Object(i.jsxs)(dt,{children:[Object(i.jsx)("p",{children:"Filmes"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAXCAYAAAAcP/9qAAAAAXNSR0IArs4c6QAAASpJREFUSA3tlk0OgjAQhQcTFga8BTfQaFx7LU/gCbwO0YS1ay9ixATfNB0ytJDwV9xIfJaW6Xwz7VShiiiDbtAHqgKLGczKCF95YFhbMnkE6JuIYmjJq2QwPstfK4tMIqKIhX4aIIzU9W8ytsCaN/cqtPk3GQOUCBX3s2fs+DesoXt8QIAb6AplEuyolpe1rwQA+zV0gUaffS7pwWAVwA7zH0N8iK2A9R4n8tBtBahb2MTQGXq59qrv+Tdg7Yjv1YTGarh2uo85x77z2O5nVd2ZXVv0OkO5h12fpW6sHPueBIaDLTSpuLyIOCpXKsvZjpNXdS7U9vdoT9Cz47kXrLXz/P9/q2Ubg7d8jsvgFB9QMrjwx4OPFHyO+S3zDo3+p7GV21XRerx+y/wCxuNHUzq+1DYAAAAASUVORK5CYII=",alt:""}),Object(i.jsx)("h5",{children:g.available||""})]})]})]}),Object(i.jsxs)(ot,{children:[Object(i.jsx)("p",{children:"Rating: "}),Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAPCAYAAACRFVP2AAAAAXNSR0IArs4c6QAAAZVJREFUWAnNmL1KA0EUhSfa2Kid+IONYhEwlVr4IuL7+ASKIGiR+ALptbDwORQ7gz+9iiTxuysjw3D3sjFL9gY+ZvbembNnTjYhJATjNQ7hBHrGkkotTzouvGBiEz5hDIeVUlQWedJx4wUjVyDBCjdKbpVKnnQyL7eVDqAsynQmy4bNO/ANMVwZ95X7mCVPOiVeDswDKM0SHTsbNi3BHhzDHaTByvwejqADC8p9ixI9NzqNe8HANbxAHqZ1PWT9A1zGkJm70ZnCy2NNZyp05ghHWIkhVRxlzzYMk/WedP7rZaumM/3q8E7NQxesJ1Xr9dgjhyhennQ8eQmYacE5aCFqtS5r/4JNAnaj4+1MEnL680sLVWp9LdgYsIyedJr0kj99b2lIJfNBK4RRSS+WX+PEGGelU9eZJtbJw901woitdpwYY8foxdasdOo603Q6fISeIP06+OL6I6s9x3TKRk86LrxgYhFGIOFKqBcg/y+swSmkIS8bwbrRwbMPLxhZhXcoQs3Do74OZzCAjbwfr+m50Wnayw++HQTEW0hb9wAAAABJRU5ErkJggg==",alt:""})]}),Object(i.jsxs)(at,{children:[Object(i.jsx)("p",{children:"\xdaltimo quadrinho: "}),Object(i.jsx)("b",{children:Qn(g.modified)})]})]})]}),Object(i.jsx)(tt,{children:g&&g.path&&g.extension?Object(i.jsx)("img",{src:"".concat(g.path,".").concat(g.extension),alt:""}):Object(i.jsx)("img",{src:"/",alt:""})})]}),Object(i.jsx)(Xn,{idHero:e.state?e.state.id:"",comicsByGet:o,history:t})]})}return Object(i.jsx)("b",{children:"Her\xf3i n\xe3o encontrado"})}()})},ft=function(){var n=Object(c.useState)(""),t=Object(j.a)(n,2),e=t[0],r=t[1],o=Object(s.c)((function(n){return n.heroes})).hero,a=Object(c.useState)({}),d=Object(j.a)(a,2),u=d[0],f=d[1],l=Object(s.b)(),p=Object(x.f)();return Object(c.useEffect)((function(){e&&l(function(n){var t=n?"&nameStartsWith=".concat(n):"";return function(n){O.a.get("".concat(S,"/characters?ts=").concat("1604576114","&apikey=").concat("1e0c79a8d703def813c20fd87bff5f7e","&hash=").concat("d3bf176a851abd7f25fa2f613e337a65","&limit=",20).concat(t),{headers:{Accept:"*/*"}}).then((function(t){var e=t.data.data.results;n({type:E,payload:e[0]||e})})).catch((function(n){console.log(n)}))}}(e))}),[e]),Object(c.useEffect)((function(){if(f(o),o.id){var n=o.id;p.push("/details/".concat(n),{id:n})}}),[o]),Object(i.jsxs)(vn,{children:[Object(i.jsx)(wn,{children:Object(i.jsx)(Rn,{setHeroFilter:r,history:p})}),Object(i.jsx)(yn,{children:Object(i.jsx)(ut,{hero:u})})]})},lt=function(){return Object(i.jsx)(h.a,{children:Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/",component:An}),Object(i.jsx)(x.a,{exact:!0,path:"/details/:id",component:ft})]})})},pt=e(8),bt=e(46),ht=e(28),xt=e(47),jt=e.n(xt),At=e(12),gt={heroes:[],favorites:[],hero:{},comicsBy:[]},mt=v,Ot=w,vt=y,wt=B,yt=Object(pt.c)({heroes:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case mt:return Object(At.a)(Object(At.a)({},n),{},{heroes:t.payload});case Ot:return Object(At.a)(Object(At.a)({},n),{},{favorites:t.payload});case vt:return Object(At.a)(Object(At.a)({},n),{},{hero:t.payload});case wt:return Object(At.a)(Object(At.a)({},n),{},{comicsBy:t.payload});default:return n}}}),Bt={key:"root",timeout:1e4,storage:jt.a,version:1},St=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pt.d,Nt=Object(ht.a)(Bt,(function(n,t){return yt(n,t)})),kt=Object(pt.e)(Nt,{},St(Object(pt.a)(bt.a))),Et=Object(ht.b)(kt),It=(e(77),function(){return Object(i.jsx)(s.a,{store:kt,children:Object(i.jsxs)(d.a,{loading:null,persistor:Et,children:[Object(i.jsx)(b,{}),Object(i.jsx)(lt,{}),Object(i.jsx)(u.a,{})]})})});a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(It,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.0e3e17ca.chunk.js.map