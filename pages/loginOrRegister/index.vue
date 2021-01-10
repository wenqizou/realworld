<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </h1>
            <p class="text-xs-center">
              <!-- <a href="">Have an account?</a> -->
              <nuxt-link v-if="isLogin" to="/register"
                >Need an account?</nuxt-link
              >
              <nuxt-link v-else to="/login">Have an account?</nuxt-link>
            </p>

            <ul class="error-messages">
              <template v-for="(msg, key) in errors">
                <li v-for="item in msg" :key="item">{{ key }} {{ item }}</li>
              </template>
            </ul>

            <form @submit.prevent="submit">
              <fieldset v-if="!isLogin" class="form-group">
                <input
                  v-model="user.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{ isLogin ? "Sign in" : "Sign up" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from '../../api/login'
// 仅在客户端加载
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'Login',
  computed: {
    isLogin() {
      return this.$route.name == 'login'
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
    }
  },
  methods: {
    async submit() {
      try {
        const { data } = this.isLogin ? await login(this.user) : await register(this.user)
        console.log(data);
        this.$store.commit('setUser', data.user)
        Cookie.set('user', data.user)

        data && this.$router.push('/')
      } catch (error) {
        console.dir(error)
        this.errors = error.response.data.errors
      }
    }
  }
}
</script>