import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b148f44 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _b1d6710e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _679e59d6 = () => interopDefault(import('..\\pages\\loginOrRegister' /* webpackChunkName: "" */))
const _178778cf = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _6aa7b1bd = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _2f45b587 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _035c87c8 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3b148f44,
    children: [{
      path: "",
      component: _b1d6710e,
      name: "home"
    }, {
      path: "/login",
      component: _679e59d6,
      name: "login"
    }, {
      path: "/register",
      component: _679e59d6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _178778cf,
      name: "profile"
    }, {
      path: "/settings",
      component: _6aa7b1bd,
      name: "settings"
    }, {
      path: "/editor",
      component: _2f45b587,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _035c87c8,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
