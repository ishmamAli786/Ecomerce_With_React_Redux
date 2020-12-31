(this.webpackJsonpecomerce=this.webpackJsonpecomerce||[]).push([[0],{35:function(e,i,t){},46:function(e,i,t){"use strict";t.r(i);var c=t(0),a=t(1),n=t.n(a),s=t(18),r=t.n(s),o=(t(35),t(12)),d=t(3),l=t(7),u=t(11),m=function(){var e=Object(l.c)((function(e){return e.CartReducer})).totalQuantity;return Object(c.jsx)("div",{className:"nav",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"nav__conatiner",children:[Object(c.jsx)("div",{className:"nav__left",children:Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("img",{src:"/images/logo.webp",alt:"logo"})})}),Object(c.jsx)("div",{className:"nav__right",children:Object(c.jsx)(o.b,{to:"/cart",children:Object(c.jsxs)("div",{className:"basket",children:[Object(c.jsx)(u.c,{className:"cart-icon"}),Object(c.jsx)("span",{children:e})]})})})]})})})},j=function(){return Object(c.jsx)("div",{className:"header"})},p=t(10),b=t.n(p),x=function(){var e=Object(l.c)((function(e){return e.productReducer})).products;return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:e.map((function(e){return Object(c.jsx)("div",{className:"col-3",children:Object(c.jsxs)("div",{className:"product",children:[Object(c.jsx)("div",{className:"product__img",children:Object(c.jsx)(o.b,{to:"/details/".concat(e.id),children:Object(c.jsx)("img",{src:"/images/".concat(e.image),alt:"image name"})})}),Object(c.jsx)("div",{className:"product__name",children:e.name}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{className:"product__price",children:[Object(c.jsx)("span",{className:"actualprice",children:b.a.format(e.price,{code:"USD"})}),Object(c.jsxs)("span",{className:"discount",children:["     ",e.discount,"%"]})]})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"product__discount__price",children:b.a.format(e.discountPrice,{code:"USD"})})})]})]})},e.id)}))})})]})},O=function(){var e=Object(l.c)((function(e){return e.CartReducer})),i=e.products,t=e.totalQuantity,a=e.totalPrice,n=Object(l.b)();return Object(c.jsx)("div",{className:"cart",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{children:"Your Cart"}),i.length>0?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-9",children:[Object(c.jsx)("div",{className:"cart__heading",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-2",children:"Picture"}),Object(c.jsx)("div",{className:"col-2",children:"Name"}),Object(c.jsx)("div",{className:"col-2",children:"Price"}),Object(c.jsx)("div",{className:"col-2",children:"Inc/Dec"}),Object(c.jsx)("div",{className:"col-2",children:"Total Price"}),Object(c.jsx)("div",{className:"col-2",children:"Remove"})]})}),i.map((function(e){return Object(c.jsxs)("div",{className:"row verticalAlign",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{className:"cart__image",children:Object(c.jsx)("img",{src:"/images/".concat(e.image)})})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{className:"cart__name",children:e.name})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{className:"cart__price",children:b.a.format(e.discountPrice,{code:"USD"})})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{className:"details__info",children:Object(c.jsxs)("div",{className:"details__incDec",children:[Object(c.jsx)("span",{className:"dec",onClick:function(){return n({type:"DEC",payload:e.id})},children:Object(c.jsx)(u.b,{})}),Object(c.jsx)("span",{className:"quantity",children:e.quantity}),Object(c.jsx)("span",{className:"inc",onClick:function(){return n({type:"INC",payload:e.id})},children:Object(c.jsx)(u.d,{})})]})})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{className:"cart__total text-center",children:b.a.format(e.discountPrice*e.quantity,{code:"USD"})})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{className:"cart__remove",onClick:function(){return n({type:"REMOVE",payload:e.id})},children:Object(c.jsx)(u.a,{})})})]},e.id)}))]}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsxs)("div",{className:"summary",children:[Object(c.jsx)("div",{className:"summary__heading",children:"Summary"}),Object(c.jsx)("div",{className:"summary__details",children:Object(c.jsxs)("div",{className:"row mb-10",children:[Object(c.jsx)("div",{className:"col-6",children:"Total Items:"}),Object(c.jsx)("div",{className:"col-6",children:t}),Object(c.jsxs)("div",{className:"row mb-10",children:[Object(c.jsx)("div",{className:"col-6",children:"Total Price"}),Object(c.jsx)("div",{className:"col-6",children:b.a.format(a,{code:"USD"})})]})]})})]})})]})}):"your cart is empty"]})})},h=t(28),v=function(){var e=Object(a.useState)(1),i=Object(h.a)(e,2),t=i[0],n=i[1],s=Object(d.e)().id,r=Object(l.b)(),o=Object(l.c)((function(e){return e.productReducer})).product;Object(a.useEffect)((function(){r({type:"PRODUCT",id:s})}),[s]);return Object(c.jsx)("div",{className:"conatiner mt-100",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"details__image",children:Object(c.jsx)("img",{src:"/images/".concat(o.image),alt:"image"})})}),Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("div",{className:"details__name",children:o.name}),Object(c.jsxs)("div",{className:"details__price",children:[Object(c.jsx)("span",{className:"details__actual",children:b.a.format(o.price,{code:"USD"})}),Object(c.jsx)("span",{className:"details__discount",children:b.a.format(o.discountPrice,{code:"USD"})})]}),Object(c.jsxs)("div",{className:"details__info",children:[Object(c.jsxs)("div",{className:"details__incDec",children:[Object(c.jsx)("span",{className:"dec",onClick:function(){t>1&&n(t-1)},children:Object(c.jsx)(u.b,{})}),Object(c.jsx)("span",{className:"quantity",children:t}),Object(c.jsx)("span",{className:"inc",onClick:function(){return n(t+1)},children:Object(c.jsx)(u.d,{})}),Object(c.jsx)("button",{className:"btn-default",onClick:function(){return r({type:"ADD_TO_CART",payload:{product:o,quantity:t}})},children:"Add To Cart"})]}),Object(c.jsxs)("div",{className:"details__p",children:[Object(c.jsx)("h4",{children:"Details"}),o.desc]})]})]})]})})},f=t(14),g=t(9),N={products:[{id:1,name:"main t-shirt summer season",image:"1.jpg",price:20,discount:2,discountPrice:19.6,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:2,name:"women jacket for summer",image:"2.jpg",price:30,discount:5,discountPrice:28.5,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:3,name:"man trouser for all season",image:"3.jpg",price:15,discount:3,discountPrice:14.55,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:4,name:"shoes for all season",image:"4.jpg",price:50,discount:4,discountPrice:48,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:5,name:"female suit for summer",image:"5.jpg",price:25,discount:2,discountPrice:24.5,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:6,name:"male jeans",image:"6.jpg",price:60,discount:6,discountPrice:56.4,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:7,name:"man trouser for all season",image:"7.jpg",price:35,discount:2,discountPrice:34.3,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:8,name:"male jacket for winter",image:"8.jpg",price:80,discount:7,discountPrice:74.4,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:9,name:"male jacket for all season",image:"9.jpg",price:95,discount:4,discountPrice:91.2,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:10,name:"male winter jacket",image:"10.jpg",price:120,discount:3,discountPrice:116.4,quantity:1,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],product:{}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case"PRODUCT":return Object(g.a)(Object(g.a)({},e),{},{product:e.products.find((function(e){return e.id===parseInt(i.id)}))});default:return e}},y=t(29),_={products:[],totalPrice:0,totalQuantity:0},P=function(){var e,i,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"ADD_TO_CART":var a=c.payload,n=a.product,s=a.quantity,r=t.products.find((function(e){return e.id===n.id}));if(r)return t;var o=t.totalPrice+n.discountPrice*s,d=t.totalQuantity+s;return n.quantity=s,Object(g.a)(Object(g.a)({},t),{},{products:[].concat(Object(y.a)(t.products),[n]),totalPrice:o,totalQuantity:d});case"INC":return e=t.products.find((function(e){return e.id===c.payload})),i=t.products.findIndex((function(e){return e.id===c.payload})),e.quantity+=1,t.products[i]=e,Object(g.a)(Object(g.a)({},t),{},{totalPrice:t.totalPrice+e.discountPrice,totalQuantity:t.totalQuantity+1});case"DEC":return e=t.products.find((function(e){return e.id===c.payload})),i=t.products.findIndex((function(e){return e.id===c.payload})),e.quantity>1?(e.quantity-=1,t.products[i]=e,Object(g.a)(Object(g.a)({},t),{},{totalPrice:t.totalPrice-e.discountPrice,totalQuantity:t.totalQuantity-1})):t;case"REMOVE":e=t.products.find((function(e){return e.id===c.payload}));var l=t.products.filter((function(e){return e.id!==c.payload}));return Object(g.a)(Object(g.a)({},t),{},{products:l,totalPrice:t.totalPrice-e.discountPrice*e.quantity,totalQuantity:t.totalQuantity-e.quantity});default:return t}},D=t(27),C=Object(f.combineReducers)({productReducer:q,CartReducer:P}),E=Object(f.createStore)(C,Object(D.devToolsEnhancer)());var U=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(l.a,{store:E,children:[Object(c.jsx)(m,{}),Object(c.jsx)(d.a,{path:"/",exact:!0,component:x}),Object(c.jsx)(d.a,{path:"/Cart",exact:!0,component:O}),Object(c.jsx)(d.a,{path:"/details/:id",exact:!0,component:v})]})})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(i){var t=i.getCLS,c=i.getFID,a=i.getFCP,n=i.getLCP,s=i.getTTFB;t(e),c(e),a(e),n(e),s(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.e66577b8.chunk.js.map