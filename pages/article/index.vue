<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <ArticleMate :article="article"></ArticleMate>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <ArticleMate :article="article"></ArticleMate>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                class="comment-author-img"
              />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>

          <div class="card" v-for="(card, i) in comments" :key="'card' + i">
            <div class="card-block">
              <p class="card-text">
                {{ card.body }}
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img
                  :src="card.author.image"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="#" class="comment-author">{{card.author.username}}</a>
              <span class="date-posted">{{card.createdAt|date('MMM DD')}}</span>
            </div>
          </div>

          <!-- <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit"></i>
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticleDetail, getComments } from '@/api/article'
import MarkdownIt from 'markdown-it'
import ArticleMate from './components/article-mate'
export default {
  components: { ArticleMate },
  middleware: 'auth',
  name: 'articleIndex',
  async asyncData({ params }) {
    const [articleRes, commentsRes] = await Promise.all([
      getArticleDetail(params.slug),
      getComments(params.slug)
    ])
    const { article } = articleRes.data
    const { comments } = commentsRes.data
    console.log(article, comments);
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article,
      comments
    }
  },
  head() {
    return {
      title: `${this.article.title} - RealWord`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>