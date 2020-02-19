/* eslint-disable func-names */
import request from '@/utils/request';
/**
 *  Get 
 */
export async function getSystemTotal(): Promise<any> {
    return request('/api/dashboard/totals');
}


export async function queryTags() {
    return request('/api/dashboard/tags');
}


export async function querySystemInfo() {
    return request('/api/dashboard/SystemInfo');
}

export async function queryServerNet() {
    return request('/api/dashboard/queryServerNet');
}

export async function queryServerNetDraft() {
    const apikey = 'dxZ5CGygHM6jqBmX3Coo5eXXwG35PeUB';
    const requestTime = new Date().valueOf().toString();

    const requestToken = md5(requestTime + '' + md5(apikey));
    document.cookie = `request_token=${requestToken}`;
    document.cookie = `request_time=${parseInt(new Date().valueOf()/1000)}`;
    console.log(document.cookie);
    let head =  new Headers();
    // head.append('x-http-token', '9PARgdtyWYONNFZaLhIJfnJdiYASOWQ7xBUcJoAN6IxPBNQp');
    head.append('x-cookie-token', '495ed35f64759230318883ad4ad15ec1');
    head.append('Access-Control-Allow-Origin', '*');
    head.append('Access-Control-Allow-Methods', 'GET, POST');
    head.append('X-Requested-With','XMLHttpRequest')
    head.append('Cookie',document.cookie);
    fetch('http://3.16.124.251:8888/system?action=GetNetWork', {
      method: 'POST',
      mode: 'cors',
      headers: head,
      credentials: 'include',
    })
      .then(function(response) {
        console.log(`Response : ${response}`);
      })
      .catch(function(err) {
        console.error(err);
      });
    //  fetch('').then
    
    // return request('/api/dashboard/servernet');
}
