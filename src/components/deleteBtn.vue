<template>
    <a class="DeleteButton" :class="{ active: status }" @click="handleClick">
        <span></span>
        <text>Delete</text>
    </a>
</template>

<script>
export default {
    name: 'DeleteButton',
    data() {
        return {
            status: false,
        }
    },
    methods: {
        handleClick() {
            this.status = !this.status;
        },
    },
}
</script>

<style lang="scss" scoped>
.DeleteButton{
    position: relative;
    cursor: pointer;
    width: 160px;
    height: 50px;
    background: #333;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    overflow: hidden;
    user-select: none;
    &:hover{
        span{
            transform: scale(1.75) rotate(60deg) translateY(10px);
            &::before{
                transform: rotate(-90deg) translateX(50%) translateY(-10px);
            }
        }
        text{
            transform: translateX(-50px) translateY(-5px) scale(0);
        }
    }
    &.active{
        background: #2196f3;
        span{
            left: 50%;
            transform: translateX(-50%) rotate(-45deg);
            border-radius: 0;
            width: 20px;
            height: 10px;
            background: transparent;
            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            &::before{
                transform: scale(0);
            }
        }
        text{
            transform: translateX(-50px) translateY(-5px) scale(0);
        }
    }
    span{
        position: absolute;
        width: 18px;
        height: 20px;
        left: 40px;
        display: inline-block;
        background: #fff;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        transition-duration: 0.5s;
        &::before{
            content: '';
            position: absolute;
            top: -4px;
            width: 100%;
            height: 2px;
            background: #fff;
            box-shadow:
                12px -2px 0 #333,
                12px -3px 0 #333,
                15px -1px 0 #333,
                6px -2px 0 #fff
            ;
            transition: 0.5s;
        }
    }
    text{
        color: #fff;
        position: absolute;
        right: 40px;
        transition-duration: 0.5s;
    }
}
</style>