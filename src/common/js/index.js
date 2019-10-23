const KEY = 'seller_key'
export default {
  // 读取操作
  readTodos (id,key) {
   const seller=JSON.parse(localStorage.getItem(KEY) || '{}')
   if(!seller[id]){
     return false
   }else{
    return seller[id][key] || false
   }
   
  },
  // 写入操作
  saveTodos (id,key,val) {
    const seller=JSON.parse(localStorage.getItem(KEY) || '{}')
    if(!seller[id]){
      seller[id]={}
    }
    seller[id][key]=val
    // 写入操作
    localStorage.setItem(KEY, JSON.stringify(seller))
  }
}
