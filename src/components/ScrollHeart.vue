<template>
    <div class="ScrollHeart">
        <div class="bg"></div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    name: 'ScrollHeart',
    mounted() {
        const container = document.querySelector('.ScrollHeart');
        const bg = document.querySelector('.bg');
        container.addEventListener('scroll', (e) => {
            const scrollY = e.target.scrollTop;
            bg.style.backgroundSize = 0 + scrollY * 2 + 'px';
        })
    },
}
</script>

<style lang="scss" scoped>
.ScrollHeart{
    width: 100%;
    height: 200px;
    overflow-y: auto;
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242312005c1-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653038571&t=1036f82e09e49805aad1f6902276b584');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    -webkit-overflow-scrolling: touch;
    .content{
        height: 100vh;
        width: 100%;
        position: absolute;
    }
    .bg{
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #3fefef url('~@/assets/scrollHeart/heart.svg')no-repeat;
        background-position: center;
        background-size: 0px;
        mix-blend-mode: screen; /* mix-blend-mode 属性描述了元素的内容需要与父元素的背景颜色进行混合 */
    }
}
</style>
