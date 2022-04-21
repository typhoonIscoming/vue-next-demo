<template>
    <div class="MagicMenu">
        <ul class="nav">
            <li
                v-for="(item, index) in menuList"
                :key="index"
                :class="{ active: selectedIndex === index }"
                class="menuItem"
                @click="handleSelect(index)"
            >
                <a>
                    <span class="icon iconfont" :class="item.icon"></span>
                    <span class="text">{{ item.name }}</span>
                </a>
            </li>
            <div class="indicator" :style="{ '--i': selectedIndex }"></div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TseMagicMenu',
    data() {
        return {
            menuList: [
                { name: 'Home', icon: 'icon-xingming' }, { name: 'Profile', icon: 'icon-mima' },
                { name: 'Messages', icon: 'icon-youxiang' }, { name: 'Photo', icon: 'icon-shoujihao' },
                { name: 'User', icon: 'icon-zhanghao' },
            ],
            selectedIndex: 0,
        }
    },
    methods: {
        handleSelect(index) {
            this.selectedIndex = index;
        },
    },
}
</script>

<style lang="scss" scoped>
.MagicMenu{
    padding: 20px;
    background: #333;
    display: flex;
    align-items: center;
    .nav{
        display: flex;
        background: white;
        position: relative;
        padding: 0 20px;
        border-radius: 10px;
    }
        .menuItem{
            &.active~.indicator{
                transform: translateX(calc(70px * var(--i)));
            }
        }
    .menuItem{
        list-style: none;
        position: relative;
        width: 70px;
        height: 60px;
        z-index: 2;
        cursor: pointer;
        a{
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            text-align: center;
            font-weight: 500;
        }
        .icon{
            position: relative;
            display: block;
            line-height: 60px;
            font-size: 1.5em;
            transition: 0.5s;
            color: #222327;
        }
        .text{
            position: absolute;
            background: #2196f3;
            color: #fff;
            padding: 2px 7px;
            border-radius: 12px;
            font-weight: 400;
            font-size: 0.75em;
            letter-spacing: 0.05em;
            transition: 0.5s;
            opacity: 0;
            transform: translateY(15px);
        }
        &.active{
            .icon{
                transform: translateY(-32px);
                color: #2196f3;
            }
            .text{
                transform: translateY(0px);
                opacity: 1;
            }
        }
    }
    .indicator{
        position: absolute;
        top: -35px;
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 50%;
        z-index: 1;
        transition: 0.3s;
        &::before, &::after{
            content: '';
            position: absolute;
            top: 5px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: transparent;
        }
        &::before{
            left: -28px;
            box-shadow: 15px 18px #fff;
        }
        &::after{
            right: -28px;
            box-shadow: -15px 18px #fff;
        }
    }
}
</style>
