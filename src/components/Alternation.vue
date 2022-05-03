<template>
    <div class="SunMoonAlternation">
        <div class="btn-box">
            <div @click="handleClick('light')">
                <span class="iconfont icon-sun"></span>
            </div>
            <div @click="handleClick('dark')">
                <span class="iconfont icon-moon"></span>
            </div>
        </div>
        <div class="dark" id="container">
            <div class="bg"></div>
            <div class="moon-box">
                <div class="moon"></div>
            </div>
            <div class="sun-box">
                <div class="sun"></div>
            </div>
            <div class="sea"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseSunMoonAlternation',
    methods: {
        handleClick(str) {
            const container = document.getElementById('container');
            container.setAttribute('class', str);
            console.log('container', container, str)
        },
    },
}
</script>

<style lang="scss" scoped>
.SunMoonAlternation{
    width: 300px;
    position: relative;
    #container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .bg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .sun, .moon{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        
    }
    .sun{
        transform: translate(-50%, -50%);
        // display: none;
        background-color: orange;
    }
    .moon{
        transform: translate(calc(-50% + -60px), calc(-50% + -60px));
        box-shadow: 60px 60px 0 cyan;
    }
    .sea{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 35%;
        backdrop-filter: blur(100px);
        z-index: 100;
    }
    .sun, .moon, .sun-box, .moon-box, .bg{
        transition: all 1s ease-in-out;
    }
    .sun-box, .moon-box{
        position: relative;
        overflow: hidden;
    }
    .light{
        .sun-box{
            height: 100%;
        }
        .moon-box{
            height: 0;
        }
        .bg{
            background-color: #ffeea2;
        }
    }
    .dark{
        .sun-box{
            height: 0;
        }
        .moon-box{
            height: 100%;
        }
        .bg{
            background-color: #040720;
        }
    }
    .btn-box{
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 101;
        display: flex;
        div{
            background: rgba($color: #ffffff, $alpha: 0.7);
            color: black;
            width: 90px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
        }
    }
}
</style>
