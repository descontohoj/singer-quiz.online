!function(e,t){"use strict";jQuery.fn.extend({createRepeater:function(t){const{scope:n}=t;e(document).on("input",".mf-repeater-textarea",(function(){this.style.height="",this.style.height=this.scrollHeight+"px"}));const r=e=>{const t=n.find(".mf-input-repeater-items")||[];t.each(((n,r)=>{const a=r.querySelector(".mf-repeater-remove-btn")||{};return e(t,a)}))},a=jQuery("body").find(".metform-form-main-wrapper").children().attr("data-elementor-id"),i=JSON.parse(localStorage.getItem(`metform-${a}`));var o=function(t,i){var o=t,f=o.data("group");o.find("input,select,textarea").each((function(t,n){var r=e(n).data("name");1!=e(n).data("skip-name")?r.lastIndexOf("[]")>0?(r=r.replace("[]",""),e(n).attr("name",f+"["+i+"]["+r+"][]")):e(n).attr("name",f+"["+i+"]["+r+"]"):"undefined"!=r&&e(n).attr("name",r),e(n).attr("value",e(n).data("value"));var a=e(n).attr("id");if(a!=undefined){var o=(a+"["+i+"]").replace("["+(i-1)+"]","");e(n).attr("id",o),e(n).parent().find("label").attr("for",o)}}));var m=t;n.on("click",".remove-btn",(t=>{if(n.find(".mf-input-repeater-items").length>1){let n=[];e(t.target).parents(".mf-input-repeater-items").remove();const r=jQuery(t.target).parent().siblings(".mf-input-repeater-content").find(".mf-repeater-field");Array.from(r).forEach(((e,t)=>{n.push(e.name)}));const i=JSON.parse(localStorage.getItem(`metform-${a}`));if(i||null!==i){for(let e in i)n.includes(e)&&delete i[e];localStorage.setItem(`metform-${a}`,JSON.stringify(i))}}1===n.find(".mf-input-repeater-items").length&&r(((e,t)=>t.style.display="none"))}));var s=e("<div class='mf-input-repeater-items attr-items'>"+m.html()+"<div/>");s.attr("data-index",i),s.hide().appendTo(l).fadeIn(),jQuery(s).find(".mf-input-select").each((function(){var t=e(this);t.select2({placeholder:"Select an option",dropdownParent:t.parents(".attr-form-group").eq(0)})}));var p=s.find('.mf-repater-range-input[type="range"]'),d=p.attr("min"),c=p.attr("max"),u=p.attr("step");jQuery(s).find('.mf-repater-range-input[type="range"]').each((function(){e(this).asRange({step:u,min:d,max:c})}))},l=this;if(i){let e=0;setTimeout((()=>{for(let t in i){let n=t.match(/mf-simple-repeater\[(\d+)\]/);n&&0==n[1]&&e++}0==e&&l.find('[data-index="0"]').remove()}),10)}let f=null,m=0;i?setTimeout((()=>{f=l.find(".attr-items").last().attr("data-index"),m=f}),10):m=0;var s=l.find(".attr-items"),p=l.parent().find(".repeater-add-btn");s.each((function(n,r){var a;s.remove(),a="showFirstItemToDefault",(t.hasOwnProperty(a)&&1==function(e){return t[e]}("showFirstItemToDefault")||s.length>1)&&(o(e(r),m),m++)})),i?setTimeout((()=>{r(((e,t)=>t.style.display=1===e.length?"none":"block"))}),10):r(((e,t)=>t.style.display=1===e.length?"none":"block")),p.on("click",(function(){r(((e,t)=>t.style.display="block")),i?(m++,o(e(s[0]),m)):(o(e(s[0]),m),m++)}))}});var n={init:function(){var r={"mf-simple-repeater.default":n.SimpleRepeater};e.each(r,(function(e,n){t.hooks.addAction("frontend/element_ready/"+e,n)}))},SimpleRepeater:function(e){e.find(".mf-input-repeater").createRepeater({showFirstItemToDefault:!0,scope:e})}};e(window).on("elementor/frontend/init",n.init)}(jQuery,window.elementorFrontend);