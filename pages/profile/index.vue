<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="data.image" style="border-radius: 100px" />
            <h4>{{ data.username }}</h4>
            <p>{{ data.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab == 'my' }"
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username,
                    },
                    query: {
                      tab: 'my',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab == 'fav' }"
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username,
                    },
                    query: {
                      tab: 'fav',
                    },
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="item in articles"
            :key="item.slug"
          >
            <div class="article-meta">
              <nuxt-link to=""><img :src="item.author.image" /></nuxt-link>
              <div class="info">
                <a href="" class="author">{{ item.author.username }}</a>
                <span class="date">{{
                  item.createdAt | date("MMM DD,YY")
                }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{ item.favoritesCount }}
              </button>
            </div>
            <a href="#" class="preview-link">
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list" v-if="tab=='fav'">
                <li v-for="tag in item.tagList" :key="tag" class="tag-default tag-pill tag-outline">{{tag}}</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getprofile } from '@/api/profile'
import { getArticle } from '@/api/article'
export default {
  middleware: 'auth',
  name: 'profile',
  watchQuery: ['tab'],
  async asyncData({ params, query }) {
    const username = params.username
    const tab = query.tab || 'my'
    const { data } = await getprofile(username)
    const { data: articleList } = await getArticle({
      limit: 20,
      offset: 0,
      author: tab == 'fav' ? '' : username,
      favorited: tab == 'fav' ? username : ''
    })
    return {
      data: data.profile,
      articles: articleList.articles,
      username,
      tab
    }
  },
}
</script>