var StarRating=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}var n={classNames:{active:"gl-active",base:"gl-star-rating",selected:"gl-selected"},clearable:!0,maxStars:10,stars:null,tooltip:"Select a Rating"},s=function(e,t,i){e.classList[t?"add":"remove"](i)},a=function(e){var t=document.createElement("span");for(var i in e=e||{})t.setAttribute(i,e[i]);return t},o=function(e,t,i){var n=a(i);return e.parentNode.insertBefore(n,t?e.nextSibling:e),n},l=function e(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var s={};return i.forEach((function(t){Object.keys(t||{}).forEach((function(n){if(void 0!==i[0][n]){var a=t[n];"Object"!==r(a)||"Object"!==r(s[n])?s[n]=a:s[n]=e(s[n],a)}}))})),s},r=function(e){return{}.toString.call(e).slice(8,-1)},c=function(){function t(i,n){var s,a,o;e(this,t),this.direction=window.getComputedStyle(i,null).getPropertyValue("direction"),this.el=i,this.events={change:this.onChange.bind(this),keydown:this.onKeyDown.bind(this),mousedown:this.onPointerDown.bind(this),mouseleave:this.onPointerLeave.bind(this),mousemove:this.onPointerMove.bind(this),reset:this.onReset.bind(this),touchend:this.onPointerDown.bind(this),touchmove:this.onPointerMove.bind(this)},this.indexActive=null,this.indexSelected=null,this.props=n,this.tick=null,this.ticking=!1,this.values=function(e){var t=[];return[].forEach.call(e.options,(function(e){var i=parseInt(e.value,10)||0;i>0&&t.push({index:e.index,text:e.text,value:i})})),t.sort((function(e,t){return e.value-t.value}))}(i),this.widgetEl=null,s=this.values.length,a=1,o=this.props.maxStars,/^\d+$/.test(s)&&a<=s&&s<=o?this.build():this.destroy()}return i(t,[{key:"build",value:function(){this.destroy(),this.buildWidget(),this.selectValue(this.indexSelected=this.selected(),!1),this.handleEvents("add")}},{key:"buildWidget",value:function(){var e=this,t=o(this.el,!1,{class:this.props.classNames.base});t.appendChild(this.el),t.classList.add(this.props.classNames.base+"--"+this.direction);var i=o(this.el,!0,{class:this.props.classNames.base+"--stars"});this.values.forEach((function(t,n){var s=a({"data-index":n,"data-value":t.value});"function"==typeof e.props.stars&&e.props.stars.call(e,s,t,n),[].forEach.call(s.children,(function(e){return e.style.pointerEvents="none"})),i.innerHTML+=s.outerHTML})),this.props.tooltip&&i.setAttribute("role","tooltip"),this.widgetEl=i}},{key:"changeIndexTo",value:function(e,t){var i=this;if(this.indexActive!==e||t){if(this.widgetEl.childNodes.forEach((function(t,n){s(t,n<=e,i.props.classNames.active),s(t,n===i.indexSelected,i.props.classNames.selected)})),"function"!=typeof this.props.stars&&(this.widgetEl.classList.remove("s"+10*(this.indexActive+1)),this.widgetEl.classList.add("s"+10*(e+1))),this.props.tooltip){var n=e<0?this.props.tooltip:this.values[e].text;this.widgetEl.setAttribute("aria-label",n)}this.indexActive=e}this.ticking=!1}},{key:"destroy",value:function(){this.indexActive=null,this.indexSelected=this.selected();var e=this.el.parentNode;e.classList.contains(this.props.classNames.base)&&(this.handleEvents("remove"),e.parentNode.replaceChild(this.el,e))}},{key:"eventListener",value:function(e,t,i,n){var s=this;i.forEach((function(i){return e[t+"EventListener"](i,s.events[i],n||!1)}))}},{key:"handleEvents",value:function(e){var t=this.el.closest("form");t&&"FORM"===t.tagName&&this.eventListener(t,e,["reset"]),this.eventListener(this.el,e,["change"]),"add"===e&&this.el.disabled||(this.eventListener(this.el,e,["keydown"]),this.eventListener(this.widgetEl,e,["mousedown","mouseleave","mousemove","touchend","touchmove"],!1))}},{key:"indexFromEvent",value:function(e){var t,i,n=(null===(t=e.touches)||void 0===t?void 0:t[0])||(null===(i=e.changedTouches)||void 0===i?void 0:i[0])||e,s=document.elementFromPoint(n.clientX,n.clientY);return parseInt(s.dataset.index||-1,10)}},{key:"onChange",value:function(){this.changeIndexTo(this.selected(),!0)}},{key:"onKeyDown",value:function(e){var t=e.key.slice(5);if(~["Left","Right"].indexOf(t)){var i="Left"===t?-1:1;"rtl"===this.direction&&(i*=-1);var n=this.values.length-1,s=Math.min(Math.max(this.selected()+i,-1),n);this.selectValue(s,!0)}}},{key:"onPointerDown",value:function(e){e.preventDefault(),this.el.focus();var t=this.indexFromEvent(e);this.props.clearable&&t===this.indexSelected&&(t=-1),this.selectValue(t,!0)}},{key:"onPointerLeave",value:function(e){var t=this;e.preventDefault(),cancelAnimationFrame(this.tick),requestAnimationFrame((function(){return t.changeIndexTo(t.indexSelected)}))}},{key:"onPointerMove",value:function(e){var t=this;e.preventDefault(),this.ticking||(this.tick=requestAnimationFrame((function(){return t.changeIndexTo(t.indexFromEvent(e))})),this.ticking=!0)}},{key:"onReset",value:function(){var e;this.selectValue((null===(e=this.el.querySelector("[selected]"))||void 0===e?void 0:e.index)||-1,!1)}},{key:"selected",value:function(){var e=this;return this.values.findIndex((function(t){return t.value===+e.el.value}))}},{key:"selectValue",value:function(e,t){var i;this.el.value=(null===(i=this.values[e])||void 0===i?void 0:i.value)||"",this.indexSelected=this.selected(),!1===t?this.changeIndexTo(this.selected(),!0):this.el.dispatchEvent(new Event("change"))}}]),t}();return function(){function t(i,n){e(this,t),this.destroy=this.destroy.bind(this),this.rebuild=this.rebuild.bind(this),this.widgets=[],this.buildWidgets(i,n)}return i(t,[{key:"buildWidgets",value:function(e,t){var i=this;this.queryElements(e).forEach((function(e){var s=l(n,t,JSON.parse(e.getAttribute("data-options")));"SELECT"!==e.tagName||e.parentNode.classList.contains(s.classNames.base)||i.widgets.push(new c(e,s))}))}},{key:"destroy",value:function(){this.widgets.forEach((function(e){return e.destroy()}))}},{key:"queryElements",value:function(e){return"HTMLSelectElement"===r(e)?[e]:"NodeList"===r(e)?[].slice.call(e):"String"===r(e)?[].slice.call(document.querySelectorAll(e)):[]}},{key:"rebuild",value:function(){this.widgets.forEach((function(e){return e.build()}))}}]),t}()}();
