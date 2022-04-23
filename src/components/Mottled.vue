<template>
    <div class="MottledContainer">
        <div class="Mottled">
            <img src="~@/assets/changeImageColor/iwatch.png">
        </div>
    </div>
</template>

<script>
// Mottled: 斑纹效果
export default {
    name: 'TseMottled',
}
</script>

<style lang="scss" scoped>
@keyframes animateBg{
    0% { background-position: 0; }
    100% { background-position: 40px; }
}

.MottledContainer{
    width: 200px;
    height: 300px;
    background: #262626;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, transparent, #0004);
    .Mottled{
        width: 160px;
        height: 200px;
        position: relative;
        background: #444444;
        border-radius: 20px;
        background: linear-gradient(45deg, #2da2ff 25%,
        #444 25%, #444 50%, #2da2ff 50%, #2da2ff 75%, #444 75%, #444 100%);
        background-size: 20px 20px;
        filter: grayscale(1);
        animation: animateBg 0.5s linear infinite paused;
        transition: filter 1s;
        img{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 90%;
            transition: height 0.5s;
            object-fit: contain;
        }
    }
    &:hover{
        .Mottled{
            animation-play-state: running;
            filter: grayscale(0);
            img{
                height: 240px;
            }
        }
    }
}
</style>