### 格式化json数据的插件
1. 开发背景
* 前端开发项目中，很多后端返回的json的数据格式是
```
  {
    data:[
          {name:'zhangsan',age:11,type:'大数据'},
          {name:'lisi',age:22,type:'人工智能'},
          {name:'小明',age:22,type:'大数据'},
          {name:'效力',age:33,type:'人工智能'}
         ]
  }
```
* 然而我们需要的数据格式是这种
```
  {
    '大数据':[
              {name:'zhangsan',age:11},
              {name:'小明',age:22}
              ],
     '人工智能':[
                {name:'lisi',age:22},
                {name:'效力',age:33}
                 ]   
  }
```
2. 使用说明
#### 安装
* cnpm安装
```
cnpm install web-format-json
```
* npm安装
```
npm install web-format-json
```
* 引入 const fn=require(module).aggeregation
```
const formatter=require("web-format-json").aggeregation;
```
* 使用 fn.setData(target,key,value) 
```
const a=[
  {name:'zhangsan',age:11,type:'大数据'},
  {name:'lisi',age:22,type:'人工智能'},
  {name:'小明',age:22,type:'大数据'},
  {name:'效力',age:33,type:'人工智能'}
 ]
 formatter.setData(a,'type','大数据')
 const b=formatter.getData()

 ```


