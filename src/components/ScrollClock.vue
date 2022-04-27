<template>
    <div class="ClockContainer">
        <div class="ScrollClock">
            <div
                class="column hours"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
                <div v-for="item in 3" :key="item" class="num">{{ item - 1 }}</div>
            </div>
            <div
                class="column hours"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
                <div v-for="item in isBigger20 ? 4 : 10" :key="item" class="num">{{ item - 1 }}</div>
            </div>
            <div
                class="colon"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
            </div>
            <div
                class="column miunts"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
                <div v-for="item in 6" :key="item" class="num">{{ item - 1 }}</div>
            </div>
            <div
                class="column miunts"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
                <div v-for="item in 10" :key="item" class="num">{{ item - 1 }}</div>
            </div>
            <div
                class="colon"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
            </div>
            <div
                class="column seconds"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
                <div v-for="item in 6" :key="item" class="num">{{ item - 1 }}</div>
            </div>
            <div
                class="column seconds"
                :style="{ 'font-size': sizeResult, 'line-height': sizeResult }"
            >
                <div v-for="item in 10" :key="item" class="num">{{ item - 1 }}</div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
    name: 'TseScrollClock',
    props: {
        size: {
            type: Number,
            default: 86,
        },
    },
    data() {
        return {
            isBigger20: false,
        }
    },
    computed: {
        sizeResult() {
            return `${this.size}px`
        },
    },
    mounted() {
        const size = this.size; // 单个数字的偏移量
        const columns = Array.from(document.querySelectorAll('.column'));
        const classList = ['visible', 'near', 'far', 'far', 'distant', 'distant'];
        const is_24_hours_clock = true; // 是否是24小时制

        const getClock = () => {
            const d = new Date();
            // 等于0时显示12点
            let hour = is_24_hours_clock ? d.getHours() : (d.getHours() % 12 || 12);
            this.isBigger20 = hour >= 20;
            hour = (hour).toString().padStart(2, '0');
            let minuts = (d.getMinutes()).toString().padStart(2, '0');
            let seconds = (d.getSeconds()).toString().padStart(2, '0');
            return `${hour}${minuts}${seconds}`
        }
        const getClass = (n, i) => {
            return classList.find((_class, index) => i - index === n || i + index === n) || '';
        }

        const handleClass = () => {
            let c = getClock();
            columns.forEach((ele, i) => {
                // 获取时分秒的每一位数，并转为整形
                let n = parseInt(c[i]);
                let offset = n * size;
                // 设置每一位数的位置
                ele.style.transform = `translateY(calc(50vh - ${offset}px - ${size / 2}px))`;

                Array.from(ele.children).forEach((ele2, index) => {
                    ele2.className = `num ${getClass(n, index)}`
                })
            })
        }
        handleClass();
        setInterval(() => {
            handleClass();
        }, 1000)
    },
}
</script>

<style lang="scss" scoped>
.ClockContainer{
    display: flex;
    align-items: center;
    height: 300px;
    overflow: hidden;
}
.ScrollClock{
    background-color: #0e141b;
    color: #e0e5eb;
    text-align: center;
    transform: translateY(-55px);
    .column,.colon{
        display: inline-block;
        // font-size: 86px;
        // line-height: 86px;
        vertical-align: top;
        transition: 0.3s;
    }
    .colon{
        transform: translateY(calc(50vh - 50px));
        &::after{
            content: ':';
        }
    }
    .num{
        opacity: 0.25;
        transition: 0.5s;
        &.visible{
            opacity: 1;
            text-shadow: 1px 1px 0 #2c6299;
        }
        &.near{
            opacity: 0.35;
        }
        &.far{
            opacity: 0.15;
        }
        &.distant{
            opacity: 0.1;
        }
    }
}
</style>
