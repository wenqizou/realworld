<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="form.image"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="form.username"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="form.bio"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="form.email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  v-model="form.password"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                @click.prevent="update"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { updateUser, getCurUser } from '@/api/setting.js'
// 仅在客户端加载
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'auth',
  name: 'settings',
  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        image: '',
        bio: ''
      }
    }
  },
  mounted() {
    getCurUser().then(res => {
      console.log(res)
      const userinfo = res.data.user
      Object.keys(this.form).forEach(e => {
        this.form[e] = userinfo[e]
      })
    })
  },
  methods: {
    logout() {
      Cookie.remove('user')
      this.$store.commit('setUser', null)
      this.$router.push('/')
    },
    update() {
      console.log(this.form, this.user);
      updateUser(this.form).then(res => {
        console.log(res)
        if (res.data.user) {
          Cookie.set('user', res.data.user)
          this.$store.commit('setUser', res.data.user)
          this.$router.push({
            name: 'profile',
            params: {
              username: res.data.user.username
            }
          })
        }
      })
    }
  }
}
</script>