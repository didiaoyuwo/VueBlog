# VueBlog

> 一个用Vue写的仿新闻网站移动端
> 
> （个人觉得非常适合刚学vue的小伙伴们练手的哦~）

# 主要技术构成

> vue.js
> 
> vue-router
> 
> vuex
> 
> axios (用于请求数据)
> 
> mock.js (用于模拟数据)
> 
> axios-mock-adapter (用于模拟后台)

# Build Setup

运行环境
测试一下

*   node.js

克隆远程库

```
git clone https://github.com/didiaoyuwo/VueBlog.git
```

进入项目目录VueBlog后，安装依赖

```
npm install
```

安装依赖,启动服务

```
npm run dev
```

打开浏览器，访问 [http://localhost:8080](http://localhost:8080)

按F12进入移动端模式

# 效果展示

 ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/VueBlog/demo.gif?raw=true)

# 目录

        │ .babelrc          babel配置
        │ .editorconfig     编辑器配置
        │ .eslintignore     eslint忽略
        │ .eslintrc.js      eslintrc配置
        │ .gitignore        git上传忽略
        │ .postcssrc.js
        │ index.html        打包模板
        │ package.json
        │ README.md
        │ LICENSE
        │
        ├─build
        │
        ├─config
        │
        ├─src
        │   ├─main.js         项目入口
        │   ├─App.vue         根组件
        │   │
        │   ├─assets          
        │   │ 
        │   │     
        │   ├─components         
        │   │  ├─Footer.vue     尾部组件
        │   │  ├─Header.vue     头部组件
        │   │  ├─UserLogin.vue  用户登录组件
        │   │
        │   ├─mock
        │   │  ├─data 
        │   │  │  ├─data.js     所有的模拟数据
        │   │  ├─index.js       导出文件
        │   │  ├─mock.js        模拟后台
        │   │
        │   ├─styles         
        │   │  ├─article.scss          文章组件样式
        │   │  ├─articlecontent.scss   文章内容组件样式
        │   │  ├─attention.scss        关注组件样式
        │   │  ├─banner.scss           轮播图组件样式
        │   │  ├─base.scss             app组件样式
        │   │  ├─colom.scss            栏目组件样式
        │   │  ├─footer.scss           尾部组件样式
        │   │  ├─header.scss           头部组件样式
        │   │  ├─userlogin.scss        用户登录组件样式
        │   │
        │   │ 
        │   ├─views
        │   │  ├─ArticleContent        
        │   │  │  ├─ArticleContent.vue     文章内容组件
        │   │  │
        │   │  ├─Attention   
        │   │  │  ├─Attention.vue          关注组件
        │   │  │
        │   │  ├─Colom        
        │   │  │  ├─Colom.vue              栏目组件
        │   │  │
        │   │  ├─Home           
        │   │  │  ├─Article.vue            文章组件
        │   │  │  ├─Banner.vue             轮播图组件
        │   │  │  ├─Home.vue               首页组件
        │   │
        │   ├─router             
        │   │  ├─index.js        尾部组件
        │   │  ├─routerMap.js    路由匹配
        │   │
        │   ├─vuex         
        │   │  ├─actions.js         
        │   │  ├─getters.js
        │   │  ├─store.js     
        │   │  ├─type.js  
        │   │ 
        ├─test   
        │
        └─static              静态文件

# 结语

喜欢的小伙伴们可以start哦~ ^-^!
