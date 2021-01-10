<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{ active: $route.query.tab == 'your_feed' }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active:
                      $route.query.tab == 'global_feed' || !$route.query.tab,
                  }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                    },
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li v-if="$route.query.tag" class="nav-item">
                <a class="nav-link active" href="">#{{ $route.query.tag }}</a>
              </li>
            </ul>
          </div>

          <div
            v-for="article in articles"
            :key="article.slug"
            class="article-preview"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{
                  article.createdAt | date("MMM DD,YY")
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                @click="favorite(article)"
                :disabled="article.favoriteDisable"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <!-- pagation -->
          <nav>
            <ul class="pagination">
              <li
                v-for="item in pages"
                :key="'page' + item"
                class="page-item"
                :class="{ active: item == curPage }"
              >
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab: $route.query.tag,
                    },
                  }"
                  class="page-link"
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: tag,
                  },
                }"
                class="tag-pill tag-default"
                v-for="(tag, i) in tags"
                :key="'tag' + i"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { getArticle, getTag, getfeedArticle, addfeed, removefeed } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'home',
  watchQuery: ['page', 'tag', 'tab'],
  // asyncData函数的上下文就是方法
  async asyncData({ query, store }) {
    const curPage = Number.parseInt((query.page || 1))
    const limit = 20
    const _getArticle = (store.state.user && query.tab == 'your_feed') ? getfeedArticle : getArticle
    const [articleRest, TagData] = await Promise.all([
      _getArticle({
        limit,
        offset: (curPage - 1) * limit,
        tag: query.tag
      }),
      getTag()
    ])
    articleRest.data.articles.forEach(e => e.favoriteDisable = false)
    return {
      articles: articleRest.data.articles,
      articlesTotal: articleRest.data.articlesCount,
      limit,
      curPage,
      tags: TagData.data.tags
    }
  },
  computed: {
    ...mapState(['user']),
    pages() {
      return Math.ceil(this.articlesTotal / this.limit)
    }
  },
  methods: {
    async favorite(article) {
      article.favoriteDisable = true
      if (article.favorited) {
        await removefeed(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addfeed(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisable = false
    }
  }
}
</script>