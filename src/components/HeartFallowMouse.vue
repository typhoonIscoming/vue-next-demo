<template>
    <div class="HeartFallowMouse">

    </div>
</template>

<script>
export default {
    name: 'TseHeartFallowMouse',
    mounted() {
        const container = document.querySelector('.HeartFallowMouse');
        container.addEventListener('mousemove', (e) => {
            let x = e.offsetX, y = e.offsetY;
            let heart = document.createElement('span');
            heart.style.left = x + 'px';
            heart.style.top = y + 'px';
            const size = Math.random() * 20;
            heart.style.width = 20 + size + 'px';
            heart.style.height = 20 + size + 'px';

            const transformValue = Math.random() * 360;
            heart.style.transform = `rotate(${transformValue}deg)`;

            container.appendChild(heart);

            const timer = setTimeout(() => {
                heart.remove();
                clearTimeout(timer);
            }, 1000)
        })
    },
    beforeUnmount() {
        const container = document.querySelector('.HeartFallowMouse');
        container.removeEventListener('mousemove', () => {})
    },
}
</script>

<style lang="scss" scoped>
@keyframes moveShape {
    0%{ transform: translate(0) rotate(0deg); }
    100%{ transform: translate(100px) rotate(360deg); }
}
@keyframes fadeInOut{
    0%, 100%{ opacity: 0; }
    20%, 80%{ opacity: 1; }
}
.HeartFallowMouse{
    height: 200px;
    width: 100%;
    position: relative;
    background: #333;
    /deep/span{
        position: absolute;
        display: inline-block;
        animation: fadeInOut 1s linear infinite;
        filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('~@/assets/scrollHeart/heart.png')no-repeat;
            background-size: contain;
            animation: moveShape 1s linear infinite;
        }
    }
}
</style>