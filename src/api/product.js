import request from 'api/request';

import window from 'window';

// export const sessionInfoReq = request('/session');
// export const userInfoReq = request('/users/id');
// export const login = request('/login','POST');
export const getProduct = request('/product');
export const productList = request('/productList');
export const placeOrder = request('/placeOrder','POST');
export const cancelOrder = request('/cancelOrder');

export const getOrderInfo = request('/getOrderInfo');
export const addCart = request('/addCart','POST');

// export const register = request('/register','POST');
// export const getCookie = key => {
//   return $.cookie(key);
// }

// export const clearCookie = () => {
//   window.token = null;
//   $.removeCookie('token', { domain: '.spiderdt.com', path: '/' });
//   $.removeCookie('token');
// }
