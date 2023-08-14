(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{159:function(t,e,i){"use strict";i(173)},160:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const a=()=>{let a=s.info&&s.info[t];return!!(a&&(e&&(a=a[e]),a&&Object.keys(a).length))&&(i(a),!0)};a()||s.on(`info:${t}`,a)}}))},161:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return o}));i(4);var s=i(26);const a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.a;const i=e.getCustomer().favorites||[],a=o(t,e);if(a){const e=i.indexOf(t);i.splice(e,1)}else i.push(t);return e.requestApi("/me.json","patch",{favorites:i}),!a},o=(t,e)=>{const{favorites:i}=e.getCustomer();return i&&i.includes(t)}},172:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((t=>{let{path:e}=t;return e===this.href}))))}}},a=i(40),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},173:function(t,e,i){var s=i(202);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(158).default)("3ee73d0c",s,!0,{})},174:function(t,e,i){"use strict";var s=i(22),a=i(30),o=i(31),n=i(32),r=i(67),c=i(160);const l=(t,e)=>{const{type:i,value:s}=e;let a;if(s)return a="percentage"===i?t*(100-s)/100:t-s,a>0?a:0};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(a.a)(s.r),i19from:()=>Object(a.a)(s.Fb),i19interestFree:()=>Object(a.a)(s.Tb),i19of:()=>Object(a.a)(s.Dc),i19to:()=>Object(a.a)(s.ae),i19upTo:()=>Object(a.a)(s.le),i19youEarn:()=>Object(a.a)(s.te),price(){const t=Object(o.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?l(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(o.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(o.a)(this.product);for(let i=0;i<t.length;i++){if(Object(o.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},d=(i(159),i(40)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=p.exports},175:function(t,e,i){"use strict";i(4);var s=i(24),a=i(82),o=i(39);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],imgWidth:0,imgHeight:0,height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(a.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let a,o;for(const n in s){const r=s[n];if(void 0!==r&&t[n]){if(void 0!==o)if(null===r){if(o>=e)continue}else if(r<e||r-50<=i||null!==o&&r>o)continue;a=n,o=r}}return a})(this.src,t,i,this.containerBreakpoints),a=this.src[s],{url:o,size:n}=a||this.defaultImgObj;e=o,n&&([this.imgWidth,this.imgHeight]=n.split("x").map((t=>parseInt(t,10))),t&&this.imgHeight&&this.canCalcHeight&&(this.height=(t>=this.imgWidth?this.imgHeight:t*this.imgHeight/this.imgWidth)+"px"))}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(o.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,this.imgHeight&&(i.height=this.imgHeight,i.width=this.imgWidth),i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(i(159),i(40)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,a=t.type;return i("source",{key:e,attrs:{srcset:s,type:a}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},176:function(t,e,i){"use strict";var s=i(162),a=i(22),o=i(30),n=i(31),r=i(20),c=i(69),l=i(32),u=i(23),d=i(1),p=i(5),m=i(172),h=i(175),b=i(174),_=i(26),f=i(161);const g=(t,e)=>{if("object"==typeof window){t=`productCard${t}Html`;const i="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof i)return i}};var C={name:"ProductCard",components:{ALink:m.a,APicture:h.a,APrices:b.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>_.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(o.a)(a.m),i19outOfStock:()=>Object(o.a)(a.Pc),i19unavailable:()=>Object(o.a)(a.ge),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(n.a)(this.body)},ratingHtml(){return g("Rating",this.body)},buyHtml(){return g("Buy",this.body)},footerHtml(){return g("Footer",this.body)},name(){return Object(r.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(a.z)},isInStock(){return Object(c.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>_.a.checkAuthorization(),discount(){const{body:t}=this;return Object(l.a)(t)?Math.round(100*(t.base_price-Object(n.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(f.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(d.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:e}=t;this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(a.V))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(f.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(d.g)({url:`/products/${t._id}.json`}).then((e=>{let{data:s}=e;const a=["variations","customizations","kit_composition"];for(let t=0;t<a.length;t++){const e=s[a[t]];if(e&&e.length)return Promise.all([i.e(0),i.e(2),i.e(5),i.e(18),i.e(41)]).then(i.bind(null,375)).then((t=>{new u.a({render:e=>e(t.default,{props:{product:s}})}).$mount(this.$refs.quickview)}))}const{quantity:o,price:n}=s;p.a.addProduct({...t,quantity:o,price:n})})).catch((e=>{console.error(e),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},y=(i(159),i(40)),A=Object(y.a)(C,s.a,s.b,!1,null,null,null);e.a=A.exports},202:function(t,e,i){(e=i(157)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},222:function(t,e,i){"use strict";var s=i(22),a=i(30),o={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(s.O)},watch:{canShow(t){t&&this.count++}}},n=i(40),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[t.canShow?i("div",{key:t.count},[t._m(0)]):t._e()])],1)}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+t.variant,attrs:{role:"alert"}},[t._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":t.i19close},on:{click:function(e){return t.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2)}],!1,null,null,null);e.a=r.exports},232:function(t,e,i){"use strict";e.a=t=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(t):setTimeout(t,500)}},239:function(t,e,i){var s=i(247);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(158).default)("0cf89dda",s,!0,{})},240:function(t,e,i){var s=i(249);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(158).default)("5aefd856",s,!0,{})},242:function(t,e,i){"use strict";i(4);var s=i(22),a=i(30),o=i(77),n=i(1),r=i(48),c=i(5),l=i(0),u=i(232),d={name:"RecommendedItems",components:{ProductCard:i(176).a},props:{pageSize:{type:Number,default:l.isMobile?2:4},sortOrder:{type:String,default:"sales"},canLoadMore:{type:Boolean,default:!0},rowClassName:{type:String,default:"row no-gutters"},colClassName:{type:String,default:"col-6 col-md-4 col-lg-3"},productCardProps:{type:Object,default:()=>({isSmall:!0,buyText:Object(a.a)(s.i),installmentsOption:{},discountOption:{}})},ecomCart:{type:Object,default:()=>c.a},productIds:{type:Array,default:()=>[]},defaultMatchType:{type:String,default:"object"==typeof window&&window.ecomRecommendationsType||"recommended"}},data:()=>({ecomSearch:(new r.a).mergeFilter({range:{quantity:{gt:0}}}).mergeFilter({term:{available:!0}}),pageNumber:1,items:[]}),computed:{i19seeMore:()=>Object(a.a)(s.Hd),i19weRecommendToYou:()=>Object(a.a)(s.qe)},methods:{fetchItems(){delete this.ecomSearch.dsl.aggs,this.ecomSearch.setPageNumber(this.pageNumber).fetch().then((()=>{this.items=this.items.concat(this.ecomSearch.getItems()),this.totalCount=this.ecomSearch.getTotalCount(),this.totalCount&&this.$emit("recommend-items",{items:this.items,totalCount:this.totalCount})})).finally((()=>{this.$emit("fetched")}))}},created(){var t=this;const e=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultMatchType;const s=[],a=t.ecomCart.data.items.sort(((t,e)=>t.quantity>e.quantity?-1:1));for(let t=0;t<a.length&&t<=4;t++)s.push(Object(n.b)({url:`/products/${a[t].product_id}/${i}.json`}));Promise.allSettled(s).then((s=>{const a=[];s.forEach((e=>{let{status:i,value:s}=e;"fulfilled"===i&&Object(o.a)(s.data).forEach((e=>{a.includes(e)||t.ecomCart.data.items.find((t=>t.product_id===e))||a.push(e)}))})),a.length?(t.ecomSearch.setProductIds(a.slice(0,24)),t.fetchItems()):"recommended"===i&&e("related")}))};this.productIds.length?(this.ecomSearch.setProductIds(this.productIds),this.totalCount=this.items.length,this.fetchItems()):Object(u.a)((()=>{e()}))},watch:{pageSize:{handler(t){this.ecomSearch.setPageSize(t)},immediate:!0},sortOrder:{handler(t){this.ecomSearch.setSortOrder(t)},immediate:!0},pageNumber(){this.fetchItems()}}},p=d,m=(i(248),i(40)),h=Object(m.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"recommended-items"},[i("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[t.items.length?i("div",[t.productIds.length?t._e():i("div",{staticClass:"recommended-items__title"},[t._t("title",(function(){return[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19weRecommendToYou)+" ")])]}))],2),i("div",{class:t.rowClassName},t._l(t.items,(function(e){return i("div",{key:e._id,class:t.colClassName},[t._t("item",(function(){return[i("product-card",t._b({attrs:{product:e,"is-loaded":!0}},"product-card",t.productCardProps,!1))]}),null,{item:e})],2)})),0),t.canLoadMore?i("div",{staticClass:"recommended-items__load-more"},[t.totalCount>=t.pageSize*(t.pageNumber+1)?i("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:function(e){t.pageNumber++}}},[i("i",{staticClass:"i-plus mr-1"}),t._v(" "+t._s(t.i19seeMore)+" ")]):t._e()]):t._e()]):t._e()])],1)}),[],!1,null,null,null);e.a=h.exports},246:function(t,e,i){"use strict";i(239)},247:function(t,e,i){(e=i(157)(!0)).push([t.i,".discount-applier{max-width:30rem}.discount-applier__intro{color:var(--secondary)}.discount-applier .alert,.discount-applier__form{margin-top:var(--spacer-3)}.discount-applier .alert{font-size:var(--font-size-sm)}.discount-applier__input{max-width:200px}","",{version:3,sources:["DiscountApplier.scss"],names:[],mappings:"AAAA,kBAAkB,eAAe,CAAC,yBAAyB,sBAAsB,CAAC,iDAAiD,0BAA0B,CAAC,yBAAyB,6BAA6B,CAAC,yBAAyB,eAAe",file:"DiscountApplier.scss",sourcesContent:[".discount-applier{max-width:30rem}.discount-applier__intro{color:var(--secondary)}.discount-applier .alert,.discount-applier__form{margin-top:var(--spacer-3)}.discount-applier .alert{font-size:var(--font-size-sm)}.discount-applier__input{max-width:200px}"]}]),t.exports=e},248:function(t,e,i){"use strict";i(240)},249:function(t,e,i){(e=i(157)(!0)).push([t.i,".recommended-items__title{text-align:center}.recommended-items__load-more{margin-bottom:var(--spacer-3);text-align:center}.recommended-items .row{justify-content:space-around}.recommended-items .product-card{margin-bottom:var(--spacer-2)}.recommended-items .product-card__prices{justify-content:center}.recommended-items .product-card__buy{display:block;opacity:1;position:static}","",{version:3,sources:["RecommendedItems.scss"],names:[],mappings:"AAAA,0BAA0B,iBAAiB,CAAC,8BAA8B,6BAA6B,CAAC,iBAAiB,CAAC,wBAAwB,4BAA4B,CAAC,iCAAiC,6BAA6B,CAAC,yCAAyC,sBAAsB,CAAC,sCAAsC,aAAa,CAAC,SAAS,CAAC,eAAe",file:"RecommendedItems.scss",sourcesContent:[".recommended-items__title{text-align:center}.recommended-items__load-more{margin-bottom:var(--spacer-3);text-align:center}.recommended-items .row{justify-content:space-around}.recommended-items .product-card{margin-bottom:var(--spacer-2)}.recommended-items .product-card__prices{justify-content:center}.recommended-items .product-card__buy{display:block;opacity:1;position:static}"]}]),t.exports=e},258:function(t,e,i){"use strict";i(96);var s=i(22),a=i(30),o=i(67),n=i(1),r=i(5),c=i(26),l=i(222);var u={name:"DiscountApplier",components:{AAlert:l.a},props:{amount:Object,couponCode:String,hasCouponInput:{type:Boolean,default:!0},isFormAlwaysVisible:Boolean,isCouponApplied:Boolean,isAttentionWanted:Boolean,canAddFreebieItems:{type:Boolean,default:!0},modulesPayload:Object,ecomCart:{type:Object,default:()=>r.a},customer:Object,ecomPassport:{type:Object,default:()=>c.a}},data(){return{alertText:null,alertVariant:null,isFormVisible:this.isFormAlwaysVisible||this.couponCode,isLoading:!1,localCouponCode:this.couponCode,localAmountTotal:null,isUpdateSheduled:!1}},computed:{i19add$1ToGetDiscountMsg:()=>Object(a.a)({en_us:"Add more $1 to cart to get the discount.",pt_br:"Adicione mais $1 ao carrinho para ganhar o desconto."}),i19add:()=>Object(a.a)(s.i),i19addDiscountCoupon:()=>Object(a.a)(s.k),i19code:()=>Object(a.a)(s.Q),i19couponAppliedMsg:()=>Object(a.a)(s.db),i19discountCoupon:()=>Object(a.a)(s.ib),i19hasCouponOrVoucherQn:()=>Object(a.a)(s.Kb),i19invalidCouponMsg:()=>Object(a.a)(s.Wb),i19campaignAppliedMsg:()=>Object(a.a)(s.F),canAddCoupon(){return!this.couponCode||!this.isCouponApplied||this.couponCode!==this.localCouponCode}},methods:{fixAmount(){const t=this.amount||{subtotal:this.ecomCart.data.subtotal};this.localAmountTotal=(t.subtotal||0)+(t.freight||0)},parseDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=0;if(t.length){let i,s,a;t.forEach((t=>{const{validated:r,error:c,response:l}=t;if(r&&!c){const r=l.discount_rule;if(r){const s=r.extra_discount.value;e>s||(e=s,i={app_id:t.app_id,...r})}else l.invalid_coupon_message?s=l.invalid_coupon_message:l.available_extra_discount&&l.available_extra_discount.min_amount&&(s=this.i19add$1ToGetDiscountMsg.replace("$1",Object(o.a)(l.available_extra_discount.min_amount-this.amount.subtotal)),a="info");this.canAddFreebieItems&&(u=this.ecomCart,d=l.freebie_product_ids,Array.isArray(d)&&d.forEach((t=>{!u.data.items.find((e=>e.product_id===t&&e.flags&&e.flags.includes("freebie")))&&Object(n.g)({url:`/products/${t}.json`}).then((e=>{let{data:i}=e;!(i.quantity>0)||i.variations&&i.variations.length||u.addProduct({...i,flags:["freebie","__tmp"]},null,d.reduce(((e,i)=>i===t?e+1:e),0))})).catch(console.error)})))}var u,d})),e?(this.localCouponCode?(this.$emit("update:coupon-code",this.localCouponCode),this.alertText=this.i19couponAppliedMsg):this.alertText=this.i19campaignAppliedMsg,this.$emit("set-discount-rule",i),this.alertVariant="info"):(this.localCouponCode?(this.alertText=s||this.i19invalidCouponMsg,this.alertVariant=a||"warning"):this.alertText=null,this.$emit("set-discount-rule",{}))}},fetchDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoading=!0;const e=this.customer||this.ecomPassport.getCustomer();e&&(e._id||e.doc_number)&&(t.customer={},e._id&&(t.customer._id=e._id),e.display_name&&(t.customer.display_name=e.display_name),e.doc_number&&(t.customer.doc_number=e.doc_number)),Object(n.c)({url:"/apply_discount.json",method:"POST",data:{...this.modulesPayload,amount:{subtotal:this.localAmountTotal,...this.amount,total:this.localAmountTotal,discount:0},items:this.ecomCart.data.items,...t}}).then((t=>{let{data:e}=t;return this.parseDiscountOptions(e.result)})).catch((t=>{console.error(t),this.alertVariant="danger",this.alertText=Object(a.a)(s.vb)})).finally((()=>{this.isLoading=!1}))},submitCoupon(t){if(t||this.canAddCoupon){const{localCouponCode:t}=this,e={discount_coupon:t};this.fetchDiscountOptions(e)}},updateDiscount(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.couponCode?!t&&this.isCouponApplied||this.submitCoupon(t):(t||!this.isUpdateSheduled&&this.amount&&this.localAmountTotal)&&this.fetchDiscountOptions()}},watch:{couponCode(t){t!==this.couponCode&&(this.localCouponCode=t,t&&!this.isFormVisible&&(this.isFormVisible=!0))},isFormAlwaysVisible(t){t&&(this.isFormVisible=!0)},isFormVisible(t){t&&this.$nextTick((()=>{this.$refs.input.focus()}))},localAmountTotal(t,e){null!==e&&Math.abs(t-e)>.01&&!this.isUpdateSheduled&&(this.isUpdateSheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.updateDiscount(),this.isUpdateSheduled=!1}),600)})))},amount:{handler(){this.fixAmount()},deep:!0}},mounted(){this.fixAmount(),this.updateDiscount(!1)}},d=u,p=(i(246),i(40)),m=Object(p.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discount-applier"},[t.hasCouponInput?[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isFormVisible?i("form",{key:"form",staticClass:"discount-applier__form",on:{submit:function(e){return e.preventDefault(),t.submitCoupon.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"discount-applier-coupon"}},[t._v(" "+t._s(t.i19discountCoupon)+" ")]),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.localCouponCode,expression:"localCouponCode"}],ref:"input",staticClass:"form-control discount-applier__input",attrs:{type:"text",id:"discount-applier-coupon",required:"",readonly:t.isLoading,placeholder:t.i19code,"aria-label":t.i19code},domProps:{value:t.localCouponCode},on:{input:function(e){e.target.composing||(t.localCouponCode=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[t.isLoading?i("span",{staticClass:"input-group-text"},[i("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}),i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t.canAddCoupon?i("button",{key:"add",staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19add)+" ")]):i("button",{key:"applied",staticClass:"btn btn-outline-success",attrs:{disabled:"",type:"button"}},[i("i",{staticClass:"i-check-circle"})])])])])]):i("div",{key:"button"},[t.isAttentionWanted?i("h6",{staticClass:"discount-applier__intro"},[t._v(" "+t._s(t.i19hasCouponOrVoucherQn)+" ")]):t._e(),i("button",{staticClass:"discount-applier__coupon-btn btn btn-sm",class:"btn-"+(t.isAttentionWanted?"secondary":"light"),attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.isFormVisible=!t.isFormVisible}}},[i("i",{staticClass:"i-tag mr-1"}),t._v(" "+t._s(t.i19addDiscountCoupon)+" ")])])])]:t._e(),i("a-alert",{key:"alert-"+t.alertVariant,attrs:{"can-show":!t.isLoading&&Boolean(t.alertText),variant:t.alertVariant},on:{dismiss:function(e){t.alertText=null}}},[t._v(" "+t._s(t.alertText)+" ")])],2)}),[],!1,null,null,null);e.a=m.exports},270:function(t,e,i){var s=i(318);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(158).default)("599417f6",s,!0,{})},271:function(t,e,i){var s=i(320);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(158).default)("6cb9fe4c",s,!0,{})},317:function(t,e,i){"use strict";i(270)},318:function(t,e,i){(e=i(157)(!0)).push([t.i,".earn-points-progress .progress{height:1.5rem;margin-top:var(--spacer-1)}","",{version:3,sources:["EarnPointsProgress.scss"],names:[],mappings:"AAAA,gCAAgC,aAAa,CAAC,0BAA0B",file:"EarnPointsProgress.scss",sourcesContent:[".earn-points-progress .progress{height:1.5rem;margin-top:var(--spacer-1)}"]}]),t.exports=e},319:function(t,e,i){"use strict";i(271)},320:function(t,e,i){(e=i(157)(!0)).push([t.i,".cart__empty{text-align:center;width:100%}.cart .cart-item{border-top:1px dotted var(--gray);padding-top:1rem}.cart .cart-item__name{margin-bottom:.5rem}.cart__discount{margin:.5rem 0}@media(min-width:576px){.cart__discount{margin:1.5rem 0 1rem}}.cart__info{background:var(--light);border-radius:.25rem;padding:1rem}.cart__summary-row{align-items:center;display:flex;justify-content:space-between;text-align:right}.cart__summary-row>span{color:var(--gray)}.cart__shipping,.cart__total{margin:1rem 0}.cart__total .prices__value{font-size:1.5rem}","",{version:3,sources:["TheCart.scss"],names:[],mappings:"AAAA,aAAa,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,iCAAiC,CAAC,gBAAgB,CAAC,uBAAuB,mBAAmB,CAAC,gBAAgB,cAAc,CAAC,wBAAwB,gBAAgB,oBAAoB,CAAC,CAAC,YAAY,uBAAuB,CAAC,oBAAoB,CAAC,YAAY,CAAC,mBAAmB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,gBAAgB,CAAC,wBAAwB,iBAAiB,CAAC,6BAA6B,aAAa,CAAC,4BAA4B,gBAAgB",file:"TheCart.scss",sourcesContent:[".cart__empty{text-align:center;width:100%}.cart .cart-item{border-top:1px dotted var(--gray);padding-top:1rem}.cart .cart-item__name{margin-bottom:.5rem}.cart__discount{margin:.5rem 0}@media(min-width:576px){.cart__discount{margin:1.5rem 0 1rem}}.cart__info{background:var(--light);border-radius:.25rem;padding:1rem}.cart__summary-row{align-items:center;display:flex;justify-content:space-between;text-align:right}.cart__summary-row>span{color:var(--gray)}.cart__shipping,.cart__total{margin:1rem 0}.cart__total .prices__value{font-size:1.5rem}"]}]),t.exports=e},367:function(t,e,i){"use strict";i.r(e);i(99);var s=i(101),a=i(5),o=i(177),n=i(156),r=(i(96),i(22)),c=i(30),l=i(67),u=i(174),d=i(289),p=i(258),m=i(230),h=i(160),b={name:"EarnPointsProgress",props:{pointsPrograms:Object,cartSubtotal:{type:Number,required:!0}},data(){return{localPointsPrograms:this.pointsPrograms,programName:""}},computed:{i19add$1ToEarn:()=>Object(c.a)(r.j),i19loyaltyPoints:()=>Object(c.a)(r.hc),minSubtotalToEarn(){let t;const e=this.localPointsPrograms;if(e)for(const i in e){const s=e[i],a=s&&s.min_subtotal_to_earn;if(a>=0&&(void 0===t||t>a)&&(t=a,this.programName=s.name,!t))break}return t},earnFromPercentage(){return this.minSubtotalToEarn>=0&&this.cartSubtotal<this.minSubtotalToEarn?Math.round(100*this.cartSubtotal/this.minSubtotalToEarn):null}},methods:{formatMoney:l.a},created(){this.pointsPrograms&&Object.keys(this.pointsPrograms).length||Object(h.a)("list_payments","loyalty_points_programs").then((t=>{this.localPointsPrograms=t,this.$emit("update:points-programs",t)}))}},_=(i(317),i(40)),f=Object(_.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.minSubtotalToEarn>t.cartSubtotal?i("div",{staticClass:"earn-points-progress"},[i("span",[t._v(" "+t._s(t.i19add$1ToEarn.replace("$1",t.formatMoney(t.minSubtotalToEarn-t.cartSubtotal)))+" "),i("strong",[t._v(t._s(t.i19loyaltyPoints.toLowerCase()))])]),t.earnFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+t.earnFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":t.earnFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[t._v(" "+t._s(t.programName)+" "),i("strong",[t._v(t._s(t.earnFromPercentage)+"%")])])])]):t._e()]):t._e()}),[],!1,null,null,null).exports,g=i(242),C={name:"TheCart",components:{APrices:u.a,CartItem:d.a,DiscountApplier:p.a,ShippingCalculator:m.a,EarnPointsProgress:f,RecommendedItems:g.a},props:{amount:{type:Object,default:()=>({})},checkoutUrl:{type:String,default:"/app/#/checkout"},zipCode:String,discountCoupon:String,modulesPayload:Object,ecomCart:{type:Object,default:()=>a.a}},data(){return{localZipCode:this.zipCode,canApplyDiscount:!1,isCouponApplied:!1}},computed:{i19checkout:()=>Object(c.a)(r.L),i19continueShopping:()=>Object(c.a)(r.Z),i19discount:()=>Object(c.a)(r.hb),i19emptyCart:()=>Object(c.a)(r.qb),cart(){return this.ecomCart.data},isValidCart(){return this.ecomCart.data.items.find((t=>{let{quantity:e}=t;return e}))},localDiscountCoupon:{get(){return this.discountCoupon},set(t){this.$emit("update:discount-coupon",t)}}},methods:{formatMoney:l.a,selectShippingService(t){this.$emit("select-shipping",t),this.$nextTick((()=>{this.canApplyDiscount=!0}))},setDiscountRule(t){this.$emit("set-discount-rule",t),this.$nextTick((()=>{this.isCouponApplied=Boolean(this.discountCoupon&&this.amount.discount)}))}},watch:{localZipCode(t){this.$emit("update:zip-code",t)},canApplyDiscount(t){t||(this.isCouponApplied=!1)}},mounted(){this.$nextTick((()=>{this.canApplyDiscount=!this.localZipCode}));const{ecomCart:t}=this,e=()=>t.data.items.reduce(((t,e)=>{let{flags:i,quantity:s}=e;return i&&i.includes("freebie")||(t+=s),t}),0);let i=e();const s=()=>{this.canApplyDiscount=!this.localZipCode;const s=e();i!==s&&(t.data.items.forEach((e=>{let{_id:i,quantity:s,flags:a}=e;Array.isArray(a)&&a.includes("freebie")&&1===s&&t.removeItem(i)})),i=s)};t.on("change",s),this.$once("hook:beforeDestroy",(()=>{t.off("change",s)}))}},y=(i(319),{name:"cart",components:{TheCart:Object(_.a)(C,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.cart.items.length?i("div",{key:"list",staticClass:"row"},[i("div",{staticClass:"col-md-7 col-lg-8"},[i("div",{staticClass:"cart__list"},[t._t("list",(function(){return[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp faster position-absolute"}},t._l(t.cart.items,(function(t){return i("cart-item",{key:t._id,attrs:{item:t,"name-max-length":80}})})),1)]}),null,{items:t.cart.items})],2),i("earn-points-progress",{staticClass:"my-3",attrs:{"cart-subtotal":t.cart.subtotal}}),i("recommended-items",{attrs:{"col-class-name":"col-6 col-lg-3"}}),t._t("back-shopping",(function(){return[i("div",{staticClass:"cart__back d-none d-md-block my-4"},[i("a",{staticClass:"cart__btn-back btn btn-link",attrs:{role:"button",href:"/"}},[i("i",{staticClass:"i-arrow-left mr-1"}),t._v(" "+t._s(t.i19continueShopping)+" ")])])]}))],2),i("div",{staticClass:"col-md-5 col-lg-4 mt-3 mt-md-0"},[i("div",{staticClass:"cart__info"},[t._t("info",(function(){return[i("div",{staticClass:"cart__summary-row",attrs:{"data-subtotal":t.cart.subtotal.toFixed(2)}},[i("span",[t._v("Subtotal")]),i("div",[t._v(t._s(t.formatMoney(t.cart.subtotal)))])]),t.isValidCart?[i("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.amount.discount?i("div",{staticClass:"cart__summary-row mt-1",attrs:{"data-discount":t.amount.discount.toFixed(2)}},[i("span",[i("i",{staticClass:"i-tag mr-1"}),t._v(" "+t._s(t.i19discount)+" ")]),i("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e()]),i("shipping-calculator",{staticClass:"cart__shipping",attrs:{"can-select-services":!0,"shipped-items":t.cart.items,"zip-code":t.localZipCode},on:{"update:zipCode":function(e){t.localZipCode=e},"update:zip-code":function(e){t.localZipCode=e},"select-service":t.selectShippingService}}),i("div",{staticClass:"cart__summary-row cart__total",attrs:{"data-total":(t.amount.total||t.cart.subtotal).toFixed(2)}},[i("span",[t._v("Total")]),i("a-prices",{attrs:{product:{price:t.amount.total||t.cart.subtotal},"discount-option":{value:t.amount.discount},"is-literal":!0,"is-amount-total":!0}})],1)]:t._e(),t._t("checkout",(function(){return[t.isValidCart?i("a",{staticClass:"cart__btn-checkout btn btn-lg btn-block btn-success",attrs:{role:"button",href:t.checkoutUrl}},[i("span",{staticClass:"mr-1"},[i("i",{staticClass:"i-shopping-bag"})]),t._v(" "+t._s(t.i19checkout)+" ")]):t._e(),i("a",{staticClass:"cart__btn-back btn btn-block btn-outline-secondary",class:t.isValidCart?"d-md-none":"mt-3",attrs:{role:"button",href:"/"}},[i("i",{staticClass:"i-arrow-left mr-1"}),t._v(" "+t._s(t.i19continueShopping)+" ")])]}))]}))],2),t.isValidCart&&t.canApplyDiscount?i("discount-applier",{staticClass:"cart__discount",attrs:{amount:t.amount,"is-coupon-applied":t.isCouponApplied,"coupon-code":t.localDiscountCoupon,"modules-payload":t.modulesPayload},on:{"update:couponCode":function(e){t.localDiscountCoupon=e},"update:coupon-code":function(e){t.localDiscountCoupon=e},"set-discount-rule":t.setDiscountRule}}):t._e()],1)]):i("div",{key:"empty",staticClass:"cart__empty"},[t._t("empty",(function(){return[i("p",{staticClass:"lead text-muted"},[t._v(" "+t._s(t.i19emptyCart)+" ... ")]),i("a",{staticClass:"btn btn-primary",attrs:{href:"/"}},[i("span",{staticClass:"mr-1"},[i("i",{staticClass:"i-arrow-left"})]),t._v(" "+t._s(t.i19continueShopping)+" ")])]}))],2)])],1)}),[],!1,null,null,null).exports},computed:{...Object(s.c)(["amount"]),discountCoupon:{get(){return this.$store.getters.discountCoupon},set(t){this.setDiscountCoupon(t)}},baseModulesRequestData:()=>o.a},methods:{...Object(s.d)(["setDiscountCoupon","setDiscountRule","selectShippingService"]),...Object(s.b)(["fetchCartItems"])},created(){const t=t=>{let{item:e}=t;this.fetchCartItems({items:[e]})};a.a.on("addItem",t);const e=new URLSearchParams(window.location.search),i=e.get("cart_items");if(i){try{const t=JSON.parse(i);Array.isArray(t)&&t.forEach((t=>{t&&a.a.addItem({quantity:1,price:1,...t})}))}catch(t){console.error(t)}if(window.history){e.delete("cart_items");const t=e.toString(),{pathname:i}=window.location;window.history.pushState({pathname:i,query:t},document.title,i+(t?`?${t}`:""))}}this.fetchCartItems({}).then((()=>{Object(n.c)().then((()=>{a.a.on("change",n.c)}))})),this.$once("hook:beforeDestroy",(()=>{a.a.off("change",n.c),a.a.off("addItem",t)}))}}),A=Object(_.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"cart"}},[i("the-cart",{attrs:{amount:t.amount,"discount-coupon":t.discountCoupon,"modules-payload":t.baseModulesRequestData},on:{"update:discountCoupon":function(e){t.discountCoupon=e},"update:discount-coupon":function(e){t.discountCoupon=e},"select-shipping":t.selectShippingService,"set-discount-rule":t.setDiscountRule}})],1)}),[],!1,null,null,null);e.default=A.exports}}]);