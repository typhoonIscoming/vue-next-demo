<template>
    <div class="lightingContainer">
        <div class="shadow"></div>
        <div class="LightingBowl">
            <div class="liquid"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LightingBowl',
}
</script>

<style lang="scss" scoped>

@keyframes animate{
    0%{ transform: rotate(0deg); filter: hue-rotate(0deg); }
    25%{ transform: rotate(15deg); }
    50%{ transform: rotate(0deg); }
    75%{ transform: rotate(-15deg); }
    100%{ transform: rotate(0deg); filter: hue-rotate(360deg); }
}
@keyframes liquidAnimate{
    0%{ transform: rotate(0deg); }
    25%{ transform: rotate(-20deg); }
    50%{ transform: rotate(0deg); }
    75%{ transform: rotate(20deg); }
    100%{ transform: rotate(0deg); }
}
.LightingBowl{
    position: relative;
    width: 300px;
    height: 300px;
    background: rgba(255,255,255, 0.1);
    border-radius: 50%;
    border: 8px solid transparent;
    animation: animate 5s linear infinite;
    transform-origin: bottom;
    &::before{
        content: '';
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
        height: 30px;
        border: 15px solid #444;
        border-radius: 50%;
        box-shadow: 0 10px #222;
    }
    &::after{
        content: '';
        position: absolute;
        top: 40%;
        left: 50%;
        width: 150px;
        height: 80px;
        background: rgba(255,255,255, 0.05);
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    .liquid{
        position: absolute;
        top: 50%;
        left: 5px;
        right: 5px;
        bottom: 5px;
        background: #41c1fb;
        border-bottom-left-radius: 150px;
        border-bottom-right-radius: 150px;
        filter: drop-shadow(0 0 80px #41c1fb);
        animation: liquidAnimate 5s linear infinite;
        transform-origin: top center;
        &::before{
            content: '';
            position: absolute;
            top: -10px;
            width: 100%;
            height: 20px;
            background: #1fa4e0;
            border-radius: 50%;
            filter: drop-shadow(0 0 80px #41c1fb);
        }
    }
}
.lightingContainer{
    position: relative;
    .shadow{
        position: absolute;
        top: calc(50% + 150px);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 30px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
    }
}
</style>