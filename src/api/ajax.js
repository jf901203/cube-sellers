import axios from 'axios'
export default function ajax(url='',params={},type="GET"){
  return new Promise((resolve,reject)=>{
     
    let promise
    if(type==="GET"){
      let dataStr=''
      Object.keys(params).forEach((item)=>{
        dataStr+=item+'='+params[item]+'&'
      })
      if(dataStr!==''){
        dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'))
        url+='?'+dataStr
       
      }
      promise=axios.get(url)
    }else{
      promise=axios.post(url,params)
    }
    promise.then((res)=>{

       resolve(res.data)

    }).catch((error)=>{

      reject(error)

    })



  })


}