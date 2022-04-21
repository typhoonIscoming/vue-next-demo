<template>
    <div class="LiquidDestortedImage">
        <div class="imageBox">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F0F420110430%2F200F4110430-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653062296&t=0d922910a4d856968aee17ad7093e548" />
            <img src="https://img0.baidu.com/it/u=925998594,1358415170&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281" />
        </div>
    </div>
</template>

<script>
import one from '@/assets/liquidImage/1.webp';

export default {
    name: 'LiquidDestortedImage',
    mounted() {
        const imageBox = document.querySelector('.imageBox');
        const img = Array.from(document.querySelectorAll('img'));
        new window.hoverEffect({
            parent: imageBox,
            intensily: 0.3,
            image1: img[0].getAttribute('src'),
            image2: img[1].getAttribute('src'),
            displacementImage: one,
        })
    },
}
</script>

<style lang="scss" scoped>
.LiquidDestortedImage{
    padding: 20px;
    .imageBox{
        position: relative;
        width: 300px;
        height: 200px;
        img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: none;
        }
    }
}
</style>
