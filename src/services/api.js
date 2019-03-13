import fetchjsonp from 'fetch-jsonp'

const bookApi = 'https://api.douban.com/v2/book/search'
const musicApi = 'https://api.douban.com/v2/music/search'
const movieApi = 'https://api.douban.com/v2/movie/search'
const movieTopApi = 'https://api.douban.com/v2/movie/top250'

//参数   搜索内容
export function fetchBook(value, start, callBack) {
  let url = `${bookApi}?q=${value}&start=${start}&count=100`
  getData(url, callBack)
}
//参数   搜索内容1
export function fetchMusic(value, start, callBack) {
  let url = `${musicApi}?q=${value}&start=${start}&count=100`
  getData(url, callBack)
}
//参数   搜索内容  回调函数
export function fetchMovie(value, start, callBack) {
  let url = `${movieApi}?q=${value}&start=${start}&count=100`
  getData(url, callBack)
}
// 参数  回调函数
export function fetchTopMovie(callBack) {
  getData(movieTopApi, callBack)
}

function getData(reqUrl, callBack) {
  fetchjsonp(reqUrl)
    .then(res => res.json())
    .then(data => {
      callBack(data)
    })
}