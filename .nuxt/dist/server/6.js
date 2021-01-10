exports.ids = [6];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/loginOrRegister/index.vue?vue&type=template&id=8b45a626&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"auth-page\">","</div>",[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n          ")+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(msg,key){return ((_vm._ssrList((msg),function(item){return ("<li>"+_vm._ssrEscape(_vm._s(key)+" "+_vm._s(item))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n            ")+"</button></form>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/loginOrRegister/index.vue?vue&type=template&id=8b45a626&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/login.js

const login = user => Object(request["b" /* request */])({
  method: 'post',
  url: '/api/users/login',
  data: {
    user: user
  }
});
const register = user => Object(request["b" /* request */])({
  method: 'post',
  url: '/api/users',
  data: {
    user: user
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loginOrRegister/index.vue?vue&type=script&lang=js&
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
 // 仅在客户端加载

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginOrRegistervue_type_script_lang_js_ = ({
  name: 'Login',
  computed: {
    isLogin() {
      return this.$route.name == 'login';
    }

  },

  data() {
    return {
      "user": {
        username: '',
        email: '122311809@qq.com',
        password: 'P@ssw0rdzwq'
      },
      errors: {}
    };
  },

  methods: {
    async submit() {
      try {
        const {
          data
        } = this.isLogin ? await login(this.user) : await register(this.user);
        console.log(data);
        this.$store.commit('setUser', data.user);
        Cookie.set('user', data.user);
        data && this.$router.push('/');
      } catch (error) {
        console.dir(error);
        this.errors = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/loginOrRegister/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginOrRegistervue_type_script_lang_js_ = (loginOrRegistervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/loginOrRegister/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginOrRegistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6bd16d29"
  
)

/* harmony default export */ var loginOrRegister = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map