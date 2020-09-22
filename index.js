exports.aggeregation=(function(){
  return {
    obj:{},
    setData:function(target,key,value){
        let tmpArr=[]
        tmpArr=target.filter(item=>{
        return item[key]===value && item 
      })
      tmpArr.forEach((item,index)=>{
        delete item[key]
      }) 
       this.obj[value]=tmpArr  
    },
    getData(){
      return this.obj
    }

  } 

})()
