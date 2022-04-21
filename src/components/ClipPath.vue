<template>
    <div class="ClipPath">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    name: 'TseClipPath',
}
</script>

<style lang="scss" scoped>
.ClipPath{
    height: 200px;
    width: 200px;
    position: relative;
    .circle{
        position: absolute;
        transition: 0.5s;
        z-index: 2;
        width: 100%;
        height: 100%;
        &:hover{
            z-index: 1;
        }
        &:nth-child(1) {
            background: greenyellow;
            clip-path: circle(50px at 0 0);
            &:hover{
                clip-path: circle(200px at 0 0);
            }
        }
        &:nth-child(2) {
            background: red;
            clip-path: circle(50px at 100% 0);
            &:hover{
                clip-path: circle(200px at 100% 0);
            }
        }
        &:nth-child(3) {
            background: goldenrod;
            clip-path: circle(50px at 0 100%);
            &:hover{
                clip-path: circle(200px at 0 100%);
            }
        }
        &:nth-child(4) {
            background: yellow;
            clip-path: circle(50px at 100% 100%);
            &:hover{
                clip-path: circle(200px at 100% 100%);
            }
        }
    }
}
</style>
