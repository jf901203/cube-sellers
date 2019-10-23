
import ajax from './ajax'
const URL_BASE='/api'

import qs from 'query-string'
// 函数式声明函数
// parse()把字符串解析成一个对象
export const reqSeller=()=>ajax(`${URL_BASE}/seller`,{id:qs.parse(location.search).id})

export const reqGood=()=>ajax(`${URL_BASE}/goods`)
export const reqRatings=()=>ajax(`${URL_BASE}/ratings`)


 

