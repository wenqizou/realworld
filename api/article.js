import {
    request
} from '../plugins/request'

export const getArticle = (params) => request({
    method: 'get',
    url: '/api/articles',
    params
})
export const getfeedArticle = (params) => request({
    method: 'get',
    url: '/api/articles/feed',
    params
})
export const getTag = () => request({
    method: 'get',
    url: '/api/tags'
})

export const addfeed = (slug) => request({
    method: 'post',
    url: `/api/articles/${slug}/favorite`
})

export const removefeed = (slug) => request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
})

export const getArticleDetail = (slug) => request({
    method: 'get',
    url: `/api/articles/${slug}`
})

export const getComments = (slug) => request({
    method: 'get',
    url: `/api/articles/${slug}/comments`
})