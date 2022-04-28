<template>
    <div class="LikeEffect" :class="{ actived: checked }" @click="handleClick">
        <svg class="icon likeIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" /></svg>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'TseLikeEffect',
    data() {
        return {
            checked: true,
        }
    },
    methods: {
        handleClick() {
            this.checked = !this.checked;
        },
    },
}
</script>

<style lang="scss" scoped>
@keyframes drawHeart{
    0%{ stroke-dashoffset: 2600; }
    80%{ fill: #eee; stroke-dashoffset: 0; }
    100%{ fill: var(--c); stroke-dashoffset: 0; }
}
@keyframes blink{
    0%{ transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
    50%{ transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100%{ transform: translate(-50%, -50%) scale(1.1); opacity: 0; }
}
@keyframes beat{
    0%{ transform: scale(1); }
    70%{ transform: scale(1); }
    80%{ transform: scale(1.2); }
    100%{ transform: scale(1); }
}
.LikeEffect{
    width: fit-content;
    height: fit-content;
    position: relative;
    --c: red;
    &.actived{
        .likeIcon {
            animation: beat 0.5s linear forwards;
        }
        path{
            animation: drawHeart 0.5s linear forwards;
        }
        span{
            // animation-delay: 1.05s;
            animation: blink 0.5s ease-in-out forwards;
        }

    }
    .likeIcon{
        width: 80px;
        height: 80px;
        path{
            fill: #eee;
            stroke: red;
            stroke-width: 20px;
            /**
            stroke-dasharray:用于创建虚线，之所以后面跟的是array的，是因为值其实是数组
            stroke-dasharray为一个参数时： 其实是表示虚线长度和每段虚线之间的间距
            两个参数或者多个参数时：一个表示长度，一个表示间距
            stroke-dasharray = '20, 10, 5' 表示：虚线长20，间距10，虚线长5，接着是间距20，
            虚线10，间距5，之后开始如此循环
             */ 
            stroke-dasharray: 2600;
            /*
            stroke-dashoffset： offset：偏移的意思。这个属性是相对于起始点的偏移，正数偏移x值
            的时候，相当于往左移动了x个长度单位，负数偏移x的时候，相当于往右移动了x个长度单位
            */
            stroke-dashoffset: 2600;
            stroke-linecap: round;
        }
    }
    span{
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        box-shadow: 0 -60px 0 var(--c),
        0 60px 0 var(--c),
        -60px 0 0 var(--c),
        60px 0 0 var(--c),
        -45px -45px 0 var(--c),
        45px -45px 0 var(--c),
        45px 45px 0 var(--c),
        -45px 45px 0 var(--c);
    }
}
</style>