exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getfeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addfeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removefeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const getArticle = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: '/api/articles',
  params
});
const getfeedArticle = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: '/api/articles/feed',
  params
});
const getTag = () => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: '/api/tags'
});
const addfeed = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: `/api/articles/${slug}/favorite`
});
const removefeed = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'DELETE',
  url: `/api/articles/${slug}/favorite`
});
const getArticleDetail = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/articles/${slug}`
});
const getComments = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/articles/${slug}/comments`
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=f1b03172&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.data.image))+" style=\"border-radius: 100px\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.data.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.data.bio))+"</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>\n              Follow Eric Simons\n          </button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab == 'my' },attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.username,
                  },
                  query: {
                    tab: 'my',
                  },
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab == 'fav' },attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.username,
                  },
                  query: {
                    tab: 'fav',
                  },
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(item.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt,"MMM DD,YY")))+"</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" <a href=\"#\" class=\"preview-link\"><h1>"+_vm._ssrEscape(_vm._s(item.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(item.description))+"</p> <span>Read more...</span> "+((_vm.tab=='fav')?("<ul class=\"tag-list\">"+(_vm._ssrList((item.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape(_vm._s(tag))+"</li>")}))+"</ul>"):"<!---->")+"</a>")],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=f1b03172&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js

const getprofile = username => Object(request["b" /* request */])({
  method: 'get',
  url: `/api/profiles/${username}`
});
// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: 'profile',
  watchQuery: ['tab'],

  async asyncData({
    params,
    query
  }) {
    const username = params.username;
    const tab = query.tab || 'my';
    const {
      data
    } = await getprofile(username);
    const {
      data: articleList
    } = await Object(article["b" /* getArticle */])({
      limit: 20,
      offset: 0,
      author: tab == 'fav' ? '' : username,
      favorited: tab == 'fav' ? username : ''
    });
    return {
      data: data.profile,
      articles: articleList.articles,
      username,
      tab
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ce5d863"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map