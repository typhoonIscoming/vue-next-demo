<template>
    <div class="ChangeImageColor">
        <img src="~@/assets/changeImageColor/iwatch.png">
        <div class="nav">
            <span class="btn one active"></span>
            <i class="one"></i>
            <span class="btn two"></span>
            <i class="two"></i>
            <span class="btn three"></span>
            <i class="three"></i>
            <span class="btn four"></span>
            <i class="four"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseChangeImageColor',
    mounted() {
        const span = document.querySelectorAll('.btn');
        span.forEach((el) => {
            el.addEventListener('click', function() {
                const active = document.querySelectorAll('.btn.active');
                active.forEach((item) => {
                    item.classList.remove('active');
                })
                el.classList.add('active')
            })
        })
    },
}
</script>

<style lang="scss" scoped>
.ChangeImageColor{
    width: 300px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .nav{
        display: flex;
        flex-direction: column;
        
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .btn{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-top: 10px;
        cursor: pointer;
        z-index: 2;
        &.active{
            border: 2px solid #000;
            transform: scale(1.2);
            &+i{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                mix-blend-mode: hue;
            }
        }
        &.one, &~i.one{
            background: #F1D56B;
        }
        &.two, &~i.two{
            background: #BCCCBB;
        }
        &.three, &~i.three{
            background: #617165;
        }
        &.four, &~i.four{
            background: #F36154;
        }
    }
}
</style>
