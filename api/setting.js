import {
    request
} from '../plugins/request'


export const getCurUser = () => request({
    method: 'get',
    url: '/api/user',
})
export const updateUser = (user) => request({
    method: 'PUT',
    url: '/api/user',
    data: {
        user: user
    }
})