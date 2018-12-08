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

*   node.js

克隆远程库

    <span class="hljs-string">https:</span><span class="hljs-comment">//github.com/didiaoyuwo/VueBlog.git</span>
    `</pre>

    进入项目目录VueBlog后，安装依赖

    <pre>`npm <span class="hljs-keyword">install</span>
    `</pre>

    安装依赖,启动服务

    <pre>`npm <span class="hljs-command">run</span> dev
    `</pre>

    打开浏览器，访问 [http://localhost:8080](http://localhost:8080)

    按F12进入移动端模式

    # 效果展示

    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/VueBlog/demo.gif?raw=true)

    # 目录

    <pre>`    │ <span class="hljs-class">.babelrc</span>            babel配置
        │ <span class="hljs-class">.editorconfig</span>       编辑器配置
        │ <span class="hljs-class">.eslintignore</span>       eslint忽略
        │ <span class="hljs-class">.eslintrc</span><span class="hljs-class">.js</span>        eslintrc配置
        │ <span class="hljs-class">.gitignore</span>          git上传忽略
        │ <span class="hljs-class">.postcssrc</span><span class="hljs-class">.js</span>
        │ index<span class="hljs-class">.html</span>          打包模板
        │ package<span class="hljs-class">.json</span>
        │ README<span class="hljs-class">.md</span>
        │ LICENSE
        │
        ├─build
        │
        ├─config
        │
        ├─src
        │   ├─main<span class="hljs-class">.js</span>         项目入口
        │   ├─App<span class="hljs-class">.vue</span>         根组件
        │   │
        │   ├─assets          
        │   │ 
        │   │     
        │   ├─components         
        │   │  ├─Footer<span class="hljs-class">.vue</span>     尾部组件
        │   │  ├─Header<span class="hljs-class">.vue</span>     头部组件
        │   │  ├─UserLogin<span class="hljs-class">.vue</span>  用户登录组件
        │   │
        │   ├─mock
        │   │  ├─data 
        │   │  │  ├─data<span class="hljs-class">.js</span>     所有的模拟数据
        │   │  ├─index<span class="hljs-class">.js</span>        导出文件
        │   │  ├─mock<span class="hljs-class">.js</span>.        模拟后台
        │   │
        │   ├─styles         
        │   │  ├─<span class="hljs-tag">article</span><span class="hljs-class">.scss</span>          文章组件样式
        │   │  ├─articlecontent<span class="hljs-class">.scss</span>   文章内容组件样式
        │   │  ├─attention<span class="hljs-class">.scss</span>        关注组件样式
        │   │  ├─banner<span class="hljs-class">.scss</span>           轮播图组件样式
        │   │  ├─base<span class="hljs-class">.scss</span>             app组件样式
        │   │  ├─colom<span class="hljs-class">.scss</span>             栏目组件样式
        │   │  ├─<span class="hljs-tag">footer</span><span class="hljs-class">.scss</span>             尾部组件样式
        │   │  ├─<span class="hljs-tag">header</span><span class="hljs-class">.scss</span>           头部组件样式
        │   │  ├─userlogin<span class="hljs-class">.scss</span>        用户登录组件样式
        │   │
        │   │ 
        │   ├─views
        │   │  ├─ArticleContent        
        │   │  │  ├─ArticleContent<span class="hljs-class">.vue</span>     文章内容组件
        │   │  │
        │   │  ├─Attention   文章内容样式
        │   │  │  ├─Attention<span class="hljs-class">.vue</span>         关注组件
        │   │  │
        │   │  ├─Colom        关注组件样式
        │   │  │  ├─Colom<span class="hljs-class">.vue</span>             栏目组件
        │   │  │
        │   │  ├─Home           
        │   │  │  ├─Article<span class="hljs-class">.vue</span>             文章组件
        │   │  │  ├─Banner<span class="hljs-class">.vue</span>             轮播图组件
        │   │  │  ├─Home<span class="hljs-class">.vue</span>             首页组件
        │   │
        │   ├─router             路由
        │   │  ├─index<span class="hljs-class">.js</span>        尾部组件
        │   │  ├─routerMap<span class="hljs-class">.js</span>    路由匹配
        │   │
        │   ├─vuex         
        │   │  ├─actions<span class="hljs-class">.js</span>          
        │   │  ├─getters<span class="hljs-class">.js</span>   
        │   │  ├─store<span class="hljs-class">.js</span>       
        │   │  ├─type<span class="hljs-class">.js</span>    
        │   │ 
        ├─test   
        │
        └─static              静态文件

# 结语

喜欢的小伙伴们可以start哦~ ^-^!