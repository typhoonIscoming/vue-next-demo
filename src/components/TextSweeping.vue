<template>
    <div class="TextSweeping">
        <h1>文本背景扫光效果</h1>

        <div class="LuminousWord">
            <span>发光字特效</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseTextSweeping',
}
</script>

<style lang="scss" scoped>
@keyframes move{
    0%{ background-position: -200%; }
    100%{ background-position: 200%; }
}

@keyframes textLight{
    to{ filter: hue-rotate(360deg); }
}

$BgColor: #06252e;

.TextSweeping{
    height: 200px;
    width: 400px;
    background: $BgColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h1{
        color: transparent;
        font-size: 30px;
        letter-spacing: 5px;
        background: linear-gradient(to right, $BgColor, #fff, $BgColor);
        -webkit-background-clip: text;
        background-size: 70%; // 显示背景的宽度
        background-repeat: no-repeat;
        background-position: center;
        animation: move 3s linear infinite;
    }

    .LuminousWord{
        margin-top: 20px;
        font-size: 30px;
        color: white;
        -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0,0,0,0.2));
        span{
            letter-spacing: 5px;
            --c: lightgreen;
            text-shadow: 0 0 10px var(--c),
            0 0 20px var(--c),
            0 0 40px var(--c),
            0 0 80px var(--c),
            0 0 100px var(--c);
            animation: textLight 5s linear infinite;
        }
    }
}
</style>