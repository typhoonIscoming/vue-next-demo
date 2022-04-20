<template>
    <div class="FingerScanning">
        <div class="fingerPrint"></div>
        <h3>scanning...</h3>
    </div>
</template>

<script>
export default {
    name: 'FingerScanning',
}
</script>

<style lang="scss" scoped>
@keyframes animate{
    0%, 100%{ height: 0; }
    50%{ height: 100%; }
}
@keyframes animate_line{
    0%, 100%{ top: 0; }
    50%{ top: 100%; }
}
@keyframes animate_text{
    0%, 100%{ opacity: 0; }
    50%{ opacity: 1; }
}
.FingerScanning{
    position: relative;
    .fingerPrint{
        width: 120px;
        height: 140px;
        background: url('~@/assets/fingerScanning/default.png') no-repeat;
        background-size: 120px 140px;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('~@/assets/fingerScanning/scanning.png') no-repeat;
            background-size: 120px 140px;
            animation: animate 4s linear infinite;
        }
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #3fefef;
            border-radius: 4px;
            filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
            animation: animate_line 4s linear infinite;
        }
    }

    h3{
        text-transform: uppercase; /* 控制文本大小写 */
        font-size: 13px;
        letter-spacing: 2px;
        text-align: center;
        color: #3fefef;
        filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
        animation: animate_text 4s linear infinite;
    }
}
</style>
