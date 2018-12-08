<template>
    <div class="user-login">
        <div class="user-info">
            <div class="pic-container">
                <img src="../../static/headimg.png" alt="" class="user-pis">
            </div>
            <div class="login-register">
                <li>登陆</li>
                <li>/</li>
                <li>注册</li>
            </div>
            <div class='attention-fans'>
                <li class="attention">
                    <p>0</p>
                    <p class="p-border">关注</p>
                </li>
                <li class="fans">
                    <p>0</p>
                    <p>粉丝</p>
                </li>
            </div>
        </div>
        <div class="blog-info">
            <ul class="blog-ul">
                <li class="blog-li">
                    <img src="../../static/gk_text.png" alt="">
                    <span>公开博文</span>
                    <div class="count">
                        <span>0</span>
                        <img src="../../static/next_img.png" alt="">
                    </div>
                </li>
                <li class="blog-li">
                    <img src="../../static/mm_text.png" alt="">
                    <span>秘密博文</span>
                    <div class="count">
                        <span>0</span>
                        <img src="../../static/next_img.png" alt="">
                    </div>
                </li>
                <li class="blog-li">
                    <img src="../../static/cg_text.png" alt="">
                    <span>草稿箱</span>
                    <div class="count">
                        <span>0</span>
                        <img src="../../static/next_img.png" alt="">
                    </div>
                </li>
                <li class="blog-li">
                    <img src="../../static/sc_text.png" alt="">
                    <span>收藏夹</span>
                    <div class="count">
                        <span>0</span>
                        <img src="../../static/next_img.png" alt="">
                    </div>
                </li>
                <li class="blog-li" id='last-li'></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang='scss' scoped>
@import '../styles/userlogin.scss';
</style>
