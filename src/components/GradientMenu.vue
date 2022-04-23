<template>
    <div class="GradientMenu">
        <div class="toggle">
            <ion-icon name="add-outline"></ion-icon>
        </div>
        <li
            v-for="(item, index) in menuList"
            :key="index"
            :style="{'--i': index}"
        >
            <a>
                <ion-icon :name="item.icon"></ion-icon>
            </a>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TseGradientMenu',
    data() {
        return {
            menuList: [
                { icon: 'home-outline' }, { icon: 'person-outline' },
                { icon: 'settings-outline' }, { icon: 'mail-outline' },
                { icon: 'key-outline' }, { icon: 'airplane-outline' },
                { icon: 'car-sport-outline' }, { icon: 'rocket-outline' },
            ],
        }
    },
    mounted() {
        const toggle = document.querySelector('.toggle');
        const menu = document.querySelector('.GradientMenu');

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        })
    },
}
</script>

<style lang="scss" scoped>
.GradientMenu{
    position: relative;
    width: 200px;
    height: 200px;
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        position: absolute;
        left: 0;
        list-style: none;
        transform-origin: 100px;
        transition: 0.5s;
        transition-delay: calc(0.1s * var(--i));
        transform: rotate(0deg) translateX(80px);
        a{
            background: #fff;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotate(calc(360deg / -8 * var(--i)));
            box-shadow: 0 0 4px rgba(0,0,0,0.15);
            color: #111;
            transition: 0.5s;
            &:hover{
                color: #ff1252;
            }
        }
    }
    .toggle{
        position: absolute;
        width: 60px;
        height: 60px;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 4px rgba(0,0,0,0.15);
        font-size: 2em;
        z-index: 100;
        transition: 1.25s;
    }
    &.active{
        .toggle{
            transform: rotate(315deg);
        }
        li{
            transform: rotate(calc(360deg / 8 * var(--i)));
        }
    }
}
</style>
