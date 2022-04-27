<template>
    <div class="GlassCard">
        <div class="Card">

        </div>
    </div>
</template>

<script>
// 逼真的玻璃卡片悬停效果
export default {
    name: 'TseGlassCard',
    mounted() {
        window.VanillaTilt.init(document.querySelectorAll('.Card'), {
            max: 15,
            speed: 400,
            glare: true, // 是否开启炫光效果
            'max-glare': 1, // 最大炫光不透明度
        })
    },
}
</script>

<style lang="scss" scoped>
.GlassCard{
    height: 100%;
    width: 300px;
    background: #161626;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: red;
        /* 30% 表示直径 right 70%表示圆心位置 */
        clip-path: circle(30% at 70% 70%);
    }
    .Card{
        position: relative;
        width: 150px;
        height: 200px;
        background: rgba(255,255,255,0.1);
        border-radius: 15px;
        box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
        border-top: 2px solid rgba(255,255,255,0.5);
        border-left: 2px solid rgba(255,255,255,0.5);
        overflow: hidden;
        /* 背景模糊度 */
        backdrop-filter: blur(5px);
    }
}
</style>
