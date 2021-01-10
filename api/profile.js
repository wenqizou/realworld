import {
    request
} from '../plugins/request'


export const getprofile = (username) => request({
    method: 'get',
    url: `/api/profiles/${username}`,
})