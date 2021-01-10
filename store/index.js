// nuxt 集成了vuex

// 防止数据冲突，每次都是服务器渲染期间都是同一个实例
const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  //这是一个特殊的action,会在服务器渲染期间自动调用
  //作用：初始化容器数据，传递给客户端使用
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    let user = null
    //客户端请求携带cookie
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}