
import ajax from './ajax'
const URL_BASE='/api'

// 函数式声明函数

export const reqSeller=()=>ajax(`${URL_BASE}/seller`)
export const reqGood=()=>ajax(`${URL_BASE}/goods`)
export const reqRatings=()=>ajax(`${URL_BASE}/ratings`)


 

