!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=212)}({212:function(e,t){function n(){return u||a.dom.getParent(a.selection.getNode(),"a[href]")}var i,r,l,a,s,o,c,p,u,d,h,f,w,k;i=jQuery,r=window.wpLinkL10n,l=window.wp,d=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i,h=/^(https?|ftp):\/\/[A-Z0-9.-]+\.[A-Z]{2,63}[^ "]*$/i,f={},w={},k="ontouchend"in document,window.wpLink={timeToTriggerRiver:150,minRiverAJAXDuration:200,riverBottomThreshold:5,keySensitivity:100,lastSearch:"",textarea:"",modalOpen:!1,init:function(){f.wrap=i("#wp-link-wrap"),f.dialog=i("#wp-link"),f.backdrop=i("#wp-link-backdrop"),f.submit=i("#wp-link-submit"),f.close=i("#wp-link-close");var e=i('<div class="link-nofollow"><label><span> </span> <input type="checkbox" id="wp-link-nofollow"> '+r.relCheckbox+'</label></div><div class="link-sponsored"><label><span> </span> <input type="checkbox" id="wp-link-sponsored"> '+r.sponsoredCheckbox+"</label></div>"),t=i('<div class="wp-link-title-field"> <label><span>'+r.linkTitle+'</span> <input id="wp-link-title" type="text"></label></div>');e.insertAfter("#wp-link .link-target"),t.insertAfter("#wp-link .wp-link-text-field"),i("#wp-link .query-results").css("top","260px"),f.text=i("#wp-link-text"),f.url=i("#wp-link-url"),f.nonce=i("#_ajax_linking_nonce"),f.openInNewTab=i("#wp-link-target"),f.search=i("#wp-link-search"),f.nofollow=i("#wp-link-nofollow"),f.sponsored=i("#wp-link-sponsored"),f.title=i("#wp-link-title"),w.search=new o(i("#search-results")),w.recent=new o(i("#most-recent-results")),w.elements=f.dialog.find(".query-results"),f.queryNotice=i("#query-notice-message"),f.queryNoticeTextDefault=f.queryNotice.find(".query-notice-default"),f.queryNoticeTextHint=f.queryNotice.find(".query-notice-hint"),f.dialog.keydown(wpLink.keydown),f.dialog.keyup(wpLink.keyup),f.submit.click((function(e){e.preventDefault(),wpLink.update()})),f.close.add(f.backdrop).add("#wp-link-cancel button").click((function(e){e.preventDefault(),wpLink.close()})),w.elements.on("river-select",wpLink.updateFields),f.search.on("focus.wplink",(function(){f.queryNoticeTextDefault.hide(),f.queryNoticeTextHint.removeClass("screen-reader-text").show()})).on("blur.wplink",(function(){f.queryNoticeTextDefault.show(),f.queryNoticeTextHint.addClass("screen-reader-text").hide()})),f.search.on("keyup input",(function(){window.clearTimeout(s),s=window.setTimeout((function(){wpLink.searchInternalLinks()}),500)})),f.url.on("paste",(function(){setTimeout(wpLink.correctURL,0)})),f.url.on("blur",wpLink.correctURL)},correctURL:function(){var e=i.trim(f.url.val());e&&p!==e&&!/^(?:[a-z]+:|#|\?|\.|\/)/.test(e)&&(f.url.val("http://"+e),p=e)},open:function(e,t,n,r){var l,s=i(document.body);s.addClass("modal-open"),wpLink.modalOpen=!0,u=r,wpLink.range=null,e&&(window.wpActiveEditor=e),window.wpActiveEditor&&(this.textarea=i("#"+window.wpActiveEditor).get(0),void 0!==window.tinymce&&(s.append(f.backdrop,f.wrap),l=window.tinymce.get(window.wpActiveEditor),a=l&&!l.isHidden()?l:null),!wpLink.isMCE()&&document.selection&&(this.textarea.focus(),this.range=document.selection.createRange()),f.wrap.show(),f.backdrop.show(),wpLink.refresh(t,n),i(document).trigger("wplink-open",f.wrap))},isMCE:function(){return a&&!a.isHidden()},refresh:function(e,t){w.search.refresh(),w.recent.refresh(),wpLink.isMCE()?wpLink.mceRefresh(e,t):(f.wrap.hasClass("has-text-field")||f.wrap.addClass("has-text-field"),document.selection?document.selection.createRange():void 0!==this.textarea.selectionStart&&this.textarea.selectionStart!==this.textarea.selectionEnd&&(t=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd)||t||""),f.text.val(t),wpLink.setDefaultValues()),k?f.url.focus().blur():window.setTimeout((function(){f.url[0].select(),f.url.focus()})),w.recent.ul.children().length||w.recent.ajax(),p=f.url.val().replace(/^http:\/\//,"")},hasSelectedText:function(e){var t,n,i,r=a.selection.getContent();if(/</.test(r)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(r)||!~r.indexOf("href=")))return!1;if(e){if(0===(n=e.childNodes).length)return!1;for(i=n.length-1;0<=i;i--)if(3!=(t=n[i]).nodeType&&!window.tinymce.dom.BookmarkManager.isBookmarkNode(t))return!1}return!0},mceRefresh:function(e,t){var l,s,o=n(),c=this.hasSelectedText(o);o?(l=o.textContent||o.innerText,s=a.dom.getAttrib(o,"href"),i.trim(l)||(l=t||""),e&&(h.test(e)||d.test(e))&&(s=e),"_wp_link_placeholder"!==s?(f.url.val(s),f.openInNewTab.prop("checked","_blank"===a.dom.getAttrib(o,"target")),f.nofollow.prop("checked","nofollow"===a.dom.getAttrib(o,"rel")),f.sponsored.prop("checked","sponsored"===a.dom.getAttrib(o,"rel")),f.title.val(a.dom.getAttrib(o,"title")),f.submit.val(r.update)):this.setDefaultValues(l),f.search.val(e&&e!==s?e:""),window.setTimeout((function(){wpLink.searchInternalLinks()}))):(l=a.selection.getContent({format:"text"})||t||"",this.setDefaultValues(l)),c?(f.text.val(l),f.wrap.addClass("has-text-field")):(f.text.val(""),f.wrap.removeClass("has-text-field"))},close:function(e){i(document.body).removeClass("modal-open"),wpLink.modalOpen=!1,"noReset"!==e&&(wpLink.isMCE()?(a.plugins.wplink&&a.plugins.wplink.close(),a.focus()):(wpLink.textarea.focus(),wpLink.range&&(wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select()))),f.backdrop.hide(),f.wrap.hide(),f.title.val(""),p=!1,i(document).trigger("wplink-close",f.wrap)},getAttrs:function(){wpLink.correctURL();var e=f.nofollow.prop("checked")?"nofollow":"";f.sponsored.prop("checked")&&(e=e?e+" sponsored":"sponsored");var t={href:i.trim(f.url.val()),target:f.openInNewTab.prop("checked")?"_blank":null,rel:e};return i.trim(f.title.val())&&(t.title=i.trim(f.title.val())),t},buildHtml:function(e){var t='<a href="'+e.href+'"';return e.target&&(t+=' target="'+e.target+'"'),e.rel&&(t+=' rel="'+e.rel+'"'),e.title&&(t+=' title="'+e.title+'"'),t+">"},update:function(){wpLink.isMCE()?wpLink.mceUpdate():wpLink.htmlUpdate()},htmlUpdate:function(){var e,t,n,a,s,o,c,p=wpLink.textarea;if(p){e=wpLink.getAttrs(),t=f.text.val();var u=document.createElement("a");u.href=e.href,"javascript:"!==u.protocol&&"data:"!==u.protocol||(e.href=""),e.href&&(n=wpLink.buildHtml(e),document.selection&&wpLink.range?(p.focus(),wpLink.range.text=n+(t||wpLink.range.text)+"</a>",wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select(),wpLink.range=null):void 0!==p.selectionStart&&(s=p.selectionEnd,o=(a=p.selectionStart)+(n=n+(c=t||p.value.substring(a,s))+"</a>").length,a!==s||c||(o-=4),p.value=p.value.substring(0,a)+n+p.value.substring(s,p.value.length),p.selectionStart=p.selectionEnd=o),wpLink.close(),p.focus(),i(p).trigger("change"),l.a11y.speak(r.linkInserted))}},mceUpdate:function(){var e,t,s,o,c=wpLink.getAttrs(),p=document.createElement("a");if(p.href=c.href,"javascript:"!==p.protocol&&"data:"!==p.protocol||(c.href=""),!c.href)return a.execCommand("unlink"),void wpLink.close();e=a.$(n()),a.undoManager.transact((function(){e.length||(a.execCommand("mceInsertLink",!1,{href:"_wp_link_placeholder","data-wp-temp-link":1}),e=a.$('a[data-wp-temp-link="1"]').removeAttr("data-wp-temp-link"),s=i.trim(e.text())),e.length?(f.wrap.hasClass("has-text-field")&&((t=f.text.val())?e.text(t):s||e.text(c.href)),c["data-wplink-edit"]=null,c["data-mce-href"]=null,c.hasOwnProperty("rel")&&!c.rel&&(c.rel=null),e.attr(c)):a.execCommand("unlink")})),wpLink.close("noReset"),a.focus(),e.length&&((o=e.parent("#_mce_caret")).length&&o.before(e.removeAttr("data-mce-bogus")),a.selection.select(e[0]),a.selection.collapse(),a.plugins.wplink&&a.plugins.wplink.checkLink(e[0])),a.nodeChanged(),f.title.val(""),l.a11y.speak(r.linkInserted)},updateFields:function(e,t){f.url.val(t.children(".item-permalink").val()),f.wrap.hasClass("has-text-field")&&!f.text.val()&&f.text.val(t.children(".item-title").text())},getUrlFromSelection:function(e){return e||(this.isMCE()?e=a.selection.getContent({format:"text"}):document.selection&&wpLink.range?e=wpLink.range.text:void 0!==this.textarea.selectionStart&&(e=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd))),(e=i.trim(e))&&d.test(e)?"mailto:"+e:e&&h.test(e)?e.replace(/&amp;|&#0?38;/gi,"&"):""},setDefaultValues:function(e){f.url.val(this.getUrlFromSelection(e)),f.search.val(""),wpLink.searchInternalLinks(),f.submit.val(r.save)},searchInternalLinks:function(){var e,t=f.search.val()||"";if(2<t.length){if(w.recent.hide(),w.search.show(),wpLink.lastSearch===t)return;wpLink.lastSearch=t,e=f.search.parent().find(".spinner").addClass("is-active"),w.search.change(t),w.search.ajax((function(){e.removeClass("is-active")}))}else w.search.hide(),w.recent.show()},next:function(){w.search.next(),w.recent.next()},prev:function(){w.search.prev(),w.recent.prev()},keydown:function(e){var t,n;27===e.keyCode?(wpLink.close(),e.stopImmediatePropagation()):9===e.keyCode&&("wp-link-submit"!==(n=e.target.id)||e.shiftKey?"wp-link-close"===n&&e.shiftKey&&(f.submit.focus(),e.preventDefault()):(f.close.focus(),e.preventDefault())),e.shiftKey||38!==e.keyCode&&40!==e.keyCode||document.activeElement&&("link-title-field"===document.activeElement.id||"url-field"===document.activeElement.id)||(t=38===e.keyCode?"prev":"next",clearInterval(wpLink.keyInterval),wpLink[t](),wpLink.keyInterval=setInterval(wpLink[t],wpLink.keySensitivity),e.preventDefault())},keyup:function(e){38!==e.keyCode&&40!==e.keyCode||(clearInterval(wpLink.keyInterval),e.preventDefault())},delayedCallback:function(e,t){var n,i,r,l;return t?(setTimeout((function(){if(i)return e.apply(l,r);n=!0}),t),function(){if(n)return e.apply(this,arguments);r=arguments,l=this,i=!0}):e}},o=function(e,t){var n=this;this.element=e,this.ul=e.children("ul"),this.contentHeight=e.children("#link-selector-height"),this.waiting=e.find(".river-waiting"),this.change(t),this.refresh(),i("#wp-link .query-results, #wp-link #link-selector").scroll((function(){n.maybeLoad()})),e.on("click","li",(function(e){n.select(i(this),e)}))},i.extend(o.prototype,{refresh:function(){this.deselect(),this.visible=this.element.is(":visible")},show:function(){this.visible||(this.deselect(),this.element.show(),this.visible=!0)},hide:function(){this.element.hide(),this.visible=!1},select:function(e,t){var n,i,r,l;e.hasClass("unselectable")||e===this.selected||(this.deselect(),this.selected=e.addClass("selected"),n=e.outerHeight(),i=this.element.height(),r=e.position().top,l=this.element.scrollTop(),r<0?this.element.scrollTop(l+r):i<r+n&&this.element.scrollTop(l+r-i+n),this.element.trigger("river-select",[e,t,this]))},deselect:function(){this.selected&&this.selected.removeClass("selected"),this.selected=!1},prev:function(){var e;this.visible&&this.selected&&(e=this.selected.prev("li")).length&&this.select(e)},next:function(){if(this.visible){var e=this.selected?this.selected.next("li"):i("li:not(.unselectable):first",this.element);e.length&&this.select(e)}},ajax:function(e){var t=this,n=1==this.query.page?0:wpLink.minRiverAJAXDuration,i=wpLink.delayedCallback((function(n,i){t.process(n,i),e&&e(n,i)}),n);this.query.ajax(i)},change:function(e){this.query&&this._search===e||(this._search=e,this.query=new c(e),this.element.scrollTop(0))},process:function(e,t){var n="",l=!0,a="",s=1===t.page;e?i.each(e,(function(){a=l?"alternate":"",n+=(a+=this.title?"":" no-title")?'<li class="'+a+'">':"<li>",n+='<input type="hidden" class="item-permalink" value="'+this.permalink+'" />',n+='<span class="item-title">',n+=this.title?this.title:r.noTitle,n+='</span><span class="item-info">'+this.info+"</span></li>",l=!l})):s&&(n+='<li class="unselectable no-matches-found"><span class="item-title"><em>'+r.noMatchesFound+"</em></span></li>"),this.ul[s?"html":"append"](n)},maybeLoad:function(){var e=this,t=this.element,n=t.scrollTop()+t.height();this.query.ready()&&n>=this.contentHeight.height()-wpLink.riverBottomThreshold&&setTimeout((function(){var n=t.scrollTop(),i=n+t.height();e.query.ready()&&i>=e.contentHeight.height()-wpLink.riverBottomThreshold&&(e.waiting.addClass("is-active"),t.scrollTop(n+e.waiting.outerHeight()),e.ajax((function(){e.waiting.removeClass("is-active")})))}),wpLink.timeToTriggerRiver)}}),i.extend((c=function(e){this.page=1,this.allLoaded=!1,this.querying=!1,this.search=e}).prototype,{ready:function(){return!(this.querying||this.allLoaded)},ajax:function(e){var t=this,n={action:"wp-link-ajax",page:this.page,_ajax_linking_nonce:f.nonce.val()};this.search&&(n.search=this.search),this.querying=!0,i.post(window.ajaxurl,n,(function(i){t.page++,t.querying=!1,t.allLoaded=!i,e(i,n)}),"json")}}),i(document).ready(wpLink.init)}});