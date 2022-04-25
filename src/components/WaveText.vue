<template>
    <div class="WaveText">
        <h2>Water</h2>
        <h2>Water</h2>
    </div>
</template>

<script>
export default {
    name: 'TseWaveText',
}
</script>

<style lang="scss" >
@keyframes textWave{
    0%,100%{
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%,
            84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }
    50% {
        clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%,
            84% 45%, 100% 46%, 100% 100%, 0% 100%); 

    }
}
.WaveText{
    position: relative;
    background: black;
    display: inline-block;
    width: 200px;
    height: 300px;
    h2{
        position: absolute;
        font-size: 48px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;
        width: fit-content;
        &:nth-child(1){
            color: transparent;
            -webkit-text-stroke: 2px #03a9f4;
        }
        &:nth-child(2){
            z-index: 2;
            color: #03a9f4;
            animation: textWave 4s ease-in-out infinite;
        }
    }
}
</style>