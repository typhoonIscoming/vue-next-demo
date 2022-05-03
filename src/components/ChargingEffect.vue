<template>
    <div class="ChargingEffect">
        <div class="ChargingBox">
            <div class="number">98.6%</div>
            <div class="contrast">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble-home"></div>
                <div class="cricle"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseChargingEffect',
}
</script>

<style lang="scss" scoped>
@keyframes hueRotate{
    0%{ filter: contrast(15) hue-rotate(0deg); }
    100%{ filter: contrast(15) hue-rotate(360deg); }
}
@keyframes cricleRotate{
    0%{ transform: rotate(0deg); }
    100%{ transform: rotate(360deg); }
}
@keyframes bubbleup{
    0%{ bottom: 0; }
    100%{ bottom: calc(80% - 100px); }
}
.ChargingEffect{
    .ChargingBox{
        width: 400px;
        height: 100%;
        position: relative;
    }
    .number{
        position: absolute;
        color: white;
        left: 50%;
        top: 44%;
        z-index: 10;
        margin-left: -20px;
    }
    .contrast{
        width: 100%;
        height: 100%;
        position: relative;
        border: 1px solid transparent;
        filter: contrast(15);
        background-color: #000;
        // contrast是设置对比度
        animation: hueRotate 5s linear infinite;
    }
    .cricle{
        width: 300px;
        height: 300px;
        position: absolute;
        // background-color: chartreuse;
        top: 20%;
        left: 50%;
        margin-left: -150px;
        filter: blur(8px);
        animation: cricleRotate 5s linear infinite;
        z-index: 9;
        &::before{
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 42% 38% 63% 49% / 45%;
            background-color: cyan;
        }
        &::after{
            content: '';
            position: absolute;
            width: 178px;
            height: 178px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: #000;
            z-index: 9;
        }
    }

    .bubble-home{
        width: 100px;
        height: 40px;
        background-color: cyan;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -50px;
        border-radius: 100px 100px 0 0;
        filter: blur(8px);
    }

    .bubble{
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: cyan;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        z-index: 2;
        filter: blur(5px);
        animation: bubbleup 5s ease-in-out infinite;
        &:nth-child(1) {
            width: 20px;
            height: 20px;
            left: 50%;
            animation-duration: 5s;
            animation-delay: 1s;
        }
        &:nth-child(2) {
            width: 22px;
            height: 22px;
            left: 49%;
            animation-duration: 4s;
            animation-delay: 2s;
        }
        &:nth-child(3) {
            width: 24px;
            height: 24px;
            left: 47%;
            animation-duration: 3s;
            animation-delay: 3s;
        }
        &:nth-child(4) {
            width: 18px;
            height: 18px;
            left: 53%;
            animation-duration: 3s;
            animation-delay: 4s;
        }
        &:nth-child(5) {
            width: 26px;
            height: 26px;
            left: 51%;
            animation-duration: 4s;
            animation-delay: 5s;
        }
    }
}
</style>
