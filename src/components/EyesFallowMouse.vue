<template>
    <div class="TseEyesFallowMouse">
        <div class="Face">
            <div class="eyes">
                <div class="eye"></div>
                <div class="eye"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseEyesFallowMouse',
    mounted() {
        document.querySelector('body').addEventListener('mousemove', (event) => {
            let eyes = document.querySelectorAll('.eye');
            Array.from(eyes).forEach((el) => {
                let x = el.getBoundingClientRect().left + el.clientWidth / 2;
                let y = el.getBoundingClientRect().top + el.clientHeight / 2;

                const radian = Math.atan2(event.pageX - x, event.pageY - y);
                const rot = radian * (180 / Math.PI) * -1 + 270;

                el.style.transform = `rotate(${rot}deg)`;
            })
        })
    },
}
</script>

<style lang="scss" scoped>
.TseEyesFallowMouse{
    display: inline-block;
    .Face{
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #ffcd00;
        display: flex;
        justify-content: center;
        align-items: center;
        &::before{
            content: '';
            position: absolute;
            top: 130px;
            width: 75px;
            height: 30px;
            background-color: #b57700;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            transition: 0.5s;
        }
        &:hover::before{
            height: 20px;
            top: 140px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
    .eyes{
        position: relative;
        display: flex;
        top: -20px;
    }
    .eye{
        position: relative;
        width: 60px;
        height: 60px;
        background: #fff;
        margin: 0 15px;
        border-radius: 50%;
        &::before{
            content: '';
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #333;
        }
    }
}
</style>
