import {request} from '../plugins/request'

export const login = (user) => request({
    method: 'post',
    url: '/api/users/login',
    data: {
      user: user
    }
})

export const register = (user) => request({
    method: 'post',
    url: '/api/users',
    data: {
      user: user
    }
})