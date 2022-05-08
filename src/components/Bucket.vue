<template>
    <div class="BucketContainer">
        <div class="Bucket">
            <div ref="liquid" class="liquid"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseBucket',
    props: {
        percent: {
            type: Number,
            default: 10,
        },
    },
    mounted() {
        const liquid = this.$refs.liquid;
        liquid.style.height = `${this.percent}%`;
    },
}
</script>

<style lang="scss" scoped>
.BucketContainer{
    display: flex;
    align-items: center;
    .Bucket{
        width: 300px;
        height: 200px;
        border-left: 1px solid white;
        border-right: 1px solid white;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        &::before, &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 80px;
            border-radius: 50%;
            filter: drop-shadow(0 0 80px #41c1fb);
        }
        &::before{
            bottom: -40px;
            background: #0B92C4;
            border-bottom: 1px solid white;
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
        &::after{
            top: -40px;
            border: 1px solid white;
        }
    }
    .liquid{
        width: 100%;
        background-color: #0B92C4;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 24px;
        &::before{
            content: '';
            position: absolute;
            top: -40px;
            width: 100%;
            height: 80px;
            text-align: center;
            line-height: 80px;
            border-radius: 50%;
            background: #4CB6DC;
            filter: drop-shadow(0 0 80px #41c1fb);
        }
    }
}
</style>