<template>
    <div class="ClockContainer">
        <div class="Clock">
            <div class="circle" id="sc" style="--clr:#04fc43"><i></i></div>
            <div class="circle circle2" id="mn" style="--clr:#fee800"><i></i></div>
            <div class="circle circle3" id="hr" style="--clr:#ff2972"><i></i></div>

            <span style="--i:1"><b>1</b></span>
            <span style="--i:2"><b>2</b></span>
            <span style="--i:3"><b>3</b></span>
            <span style="--i:4"><b>4</b></span>
            <span style="--i:5"><b>5</b></span>
            <span style="--i:6"><b>6</b></span>
            <span style="--i:7"><b>7</b></span>
            <span style="--i:8"><b>8</b></span>
            <span style="--i:9"><b>9</b></span>
            <span style="--i:10"><b>10</b></span>
            <span style="--i:11"><b>11</b></span>
            <span style="--i:12"><b>12</b></span>
        </div>

        <div id="time">
            <div id="hours" style="--clr:#04fc43">00</div>
            <div id="minutes" style="--clr:#fee800">00</div>
            <div id="seconds" style="--clr:#ff2972">00</div>
            <div id="ampm">00</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TseClock',
    data() {
        return {
            timer: null,
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let hr = document.querySelector('#hr');
            let mn = document.querySelector('#mn');
            let sc = document.querySelector('#sc');

            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            let hours = document.getElementById('hours');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
            let am = h >= 12 ? 'pm' : 'am';

            hours.innerHTML = h.toString().padStart(2, '0');
            minutes.innerHTML = m.toString().padStart(2, '0');
            seconds.innerHTML = s.toString().padStart(2, '0');
            ampm.innerHTML = am;
            this.timer = setTimeout(() => {
                this.init();
            }, 1000)
        },
    },
}
</script>

<style lang="scss" scoped>
.ClockContainer{
    width: fit-content;
    margin: auto;
    position: relative;
    background: #2f363e;
    border-radius: 20px;
    border-top-left-radius: 225px;
    border-top-right-radius: 225px;
    box-shadow: 25px 25px 75px rgba($color: #000000, $alpha: 0.75),
        inset 10px 10px 70px rgba($color: #000000, $alpha: 0.25),
        inset 5px 5px 10px rgba($color: #000000, $alpha: 0.5),
        inset 5px 5px 20px rgba($color: #000000, $alpha: 0.2),
        inset -5px -5px 15px rgba($color: #000000, $alpha: 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Clock{
        position: relative;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        background: #2f363e;
        box-shadow: 10px 50px 70px rgba($color: #000000, $alpha: 0.25),
        inset 5px 5px 10px rgba($color: #000000, $alpha: 0.5),
        inset 5px 5px 20px rgba($color: #000000, $alpha: 0.2),
        inset -5px -5px 15px rgba($color: #000000, $alpha: 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        &::before{
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background: #2f363e;
            border: 3px solid #fff;
            border-radius: 50%;
        }
        span{
            position: absolute;
            inset: 20px;
            color: #fff;
            text-align: center;
            transform: rotate(calc(30deg * var(--i)));
            user-select: none;
            b{
                font-size: 2em;
                opacity: 0.25;
                font-weight: 600;
                transform: rotate(calc(-30deg * var(--i)));
                display: inline-block;
            }
        }

        .circle{
            position: absolute;
            width: 300px;
            height: 300px;
            border: 2px solid rgba($color: #000000, $alpha: 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            z-index: 10;
            i{
                position: absolute;
                width: 6px;
                height: 50%;
                background: var(--clr);
                opacity: 0.75;
                transform-origin: bottom;
                transform: scaleY(0.5);
            }
            &:nth-child(1) {
                i{
                    width: 2px;
                }
            }
            &:nth-child(2) {
                i{
                    width: 6px;
                }
            }
            &::before{
                content: '';
                position: absolute;
                top: -8.5px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: var(--clr);
                box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
            }
        }
        .circle2{
            width: 240px;
            height: 240px;
            z-index: 9;
        }
        .circle3{
            width: 180px;
            height: 180px;
            z-index: 8;
        }
    }

    #time{
        margin-bottom: 40px;
        display: flex;
        padding: 10px 20px;
        font-size: 2em;
        font-weight: 600;
        border: 2px solid rgba($color: #000000, $alpha: 0.5);
        border-radius: 40px;
        box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 0.25),
        inset 5px 5px 20px rgba($color: #ffffff, $alpha: 0.2),
        inset -5px -5px 15px rgba($color: #000000, $alpha: 0.75);
        div{
            position: relative;
            width: 60px;
            text-align: center;
            font-weight: 500;
            color: var(--clr);
            &:nth-child(1)::after, &:nth-child(2)::after{
                content: ':';
                position: absolute;
                right: -4px;
            }
            &:last-child{
                font-size: 0.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
            }
            &:nth-child(2)::after{
                animation: animate 1s steps(1) infinite;
            }
        }
    }
}

@keyframes animate{
    0%{ opacity: 1; }
    50%{ opacity: 0; }
}
</style>