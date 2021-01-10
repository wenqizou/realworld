exports.ids = [1];
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=59c68400&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMate',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('ArticleMate',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "+(_vm._ssrList((_vm.comments),function(card,i){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n              "+_vm._s(card.body)+"\n            ")+"</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img"+(_vm._ssrAttr("src",card.author.image))+" class=\"comment-author-img\"></a>\n             \n            <a href=\"#\" class=\"comment-author\">"+_vm._ssrEscape(_vm._s(card.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(card.createdAt,'MMM DD')))+"</span></div></div>")}))+"</div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=59c68400&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-mate.vue?vue&type=template&id=5d5800f4&
var article_matevue_type_template_id_5d5800f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD,YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ actice: _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>\n      Follow Eric Simons <span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ actice: _vm.article.author.favorited }))+"><i class=\"ion-heart\"></i>\n      Favorite Post <span class=\"counter\">(29)</span></button>")],2)}
var article_matevue_type_template_id_5d5800f4_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-mate.vue?vue&type=template&id=5d5800f4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-mate.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_matevue_type_script_lang_js_ = ({
  name: 'ArticleMate',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-mate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_matevue_type_script_lang_js_ = (article_matevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-mate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_matevue_type_script_lang_js_,
  article_matevue_type_template_id_5d5800f4_render,
  article_matevue_type_template_id_5d5800f4_staticRenderFns,
  false,
  null,
  null,
  "45be94c0"
  
)

/* harmony default export */ var article_mate = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    ArticleMate: article_mate
  },
  middleware: 'auth',
  name: 'articleIndex',

  async asyncData({
    params
  }) {
    const [articleRes, commentsRes] = await Promise.all([Object(api_article["c" /* getArticleDetail */])(params.slug), Object(api_article["d" /* getComments */])(params.slug)]);
    const {
      article
    } = articleRes.data;
    const {
      comments
    } = commentsRes.data;
    console.log(article, comments);
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article,
      comments
    };
  },

  head() {
    return {
      title: `${this.article.title} - RealWord`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62c21f70"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map