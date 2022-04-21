<template>
    <div class="StarrySky">
        <div class="scene">
            <div class="moon"></div>
            <div class="forest"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseStarrySky',
    mounted() {
        const sence = document.querySelector('.scene');
        const senceHeight = sence.getBoundingClientRect().height;
        const count = 100;
        let i = 0;
        while(i < count) {
            const star = document.createElement('i');
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * senceHeight);
            const duration = Math.random() * 8;
            const size = Math.random() * 2;

            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            star.style.width = `${1 + size}px`;
            star.style.height = `${1 + size}px`;
            star.style.animationDuration = `${5 + duration}s`;
            star.style.animationDelay = `${duration}s`;
            sence.appendChild(star)
            i += 1;
        }
    },
}
</script>

<style lang="scss" scoped>
@keyframes starMove{
    0%{ opacity: 0; transform: translateY(0); }
    10%,90%{ opacity: 1; }
    100%{ opacity: 1; transform: translateY(-100px); }
}
.StarrySky{
    .scene{
        height: 300px;
        position: relative;
        background: linear-gradient(to bottom, #111425 5%, #3751e0 40%);
        background-attachment: fixed;
        overflow: hidden;
    }
    :deep i{
        position: absolute;
        background: white;
        border-radius: 50%;
        z-index: 1001;
        animation: starMove linear infinite;
    }
    .moon{
        position: absolute;
        top: 80px;
        left: 100px;
        width: 100px;
        height: 100px;
        background: #fff;
        border-radius: 50%;
        z-index: 1000;
        &::after{
            content: '';
            position: absolute;
            top: -15px;
            left: 15px;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(to bottom, #111425 5%, #3751e0 40%);
            background-attachment: fixed;
        }
    }
    .forest{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        background: url('~@/assets/starrySky/forest.png');
        background-size: 100% 1;
        background-position: top;
        background-repeat: repeat-x;
        z-index: 1005;
    }
}
</style>
