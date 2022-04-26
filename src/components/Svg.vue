<template>
    <div class="TseSvg">
        <!-- <svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" rx="20" ry="20" class="square"></rect>
            <circle cx="40" cy="50" r="40" stroke="black" stroke-width="1" fill="#FF8C00" />
        </svg> -->
        <svg width="80px" height="80px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10 C 30 30, 50 40, 70 10" stroke="black" fill="transparent"/>
            <circle cx="30" cy="10" r="2" fill="red"/>
            <circle cx="20" cy="40" r="2" fill="red"/>
            <line x1="30" y1="10" x2="20" y2="40" style="stroke:rgb(255,0,0);stroke-width:2"/>
            <circle cx="80" cy="40" r="2" fill="red"/>
            <circle cx="70" cy="10" r="2" fill="red"/>
            <line x1="80" y1="40" x2="70" y2="10" style="stroke:rgb(255,0,0);stroke-width:2"/>
        </svg>
        <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 80 Q 52.5 10, 95 80 T  180 80" stroke="black" fill="transparent"/>

            <circle cx="10" cy="80" r="2" fill="red"/>
            <circle cx="52.5" cy="10" r="2" fill="red"/>
            <line x1="10" y1="80" x2="52.5" y2="10" style="stroke:rgb(255,0,0);stroke-width:1"/>

            <circle cx="95" cy="80" r="2" fill="red"/>
            <line x1="95" y1="80" x2="52.5" y2="10" style="stroke:rgb(255,0,0);stroke-width:1"/>

            <circle cx="180" cy="80" r="2" fill="blue"/>
            <circle cx="137.5" cy="150" r="2" fill="blue"/>
            <line x1="95" y1="80" x2="137.5" y2="150" style="stroke:rgb(0,0,255);stroke-width:1"/>
            <line x1="137.5" y1="150" x2="180" y2="80" style="stroke:rgb(0,0,255);stroke-width:1"/>
        </svg>
        <svg width="280px" height="280px" class="svg3" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 265
                L 110 215
                A 30 50 0 0 1 162.55 162.45
                L 172.55 152.45
                A 30 50 -45 0 1 215.1 109.9
                L 265 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
        </svg>
    </div>
</template>

<script>
/**
 * 
矩形 <rect>
圆形 <circle>
椭圆 <ellipse>
线 <line>
折线 <polyline>
多边形 <polygon>
路径 <path>
 */
export default {
    name: 'TseSvg',
}
</script>

<style lang="scss" scoped>
.TseSvg{
    height: 100%;
    .square{
        fill:rgb(99,99,99);
        stroke-width: 2;
        stroke: rgb(33,33,33);
        fill-opacity: 0.1;
        stroke-opacity: 0.9;
        opacity: 0.9;
        width: 200px;
        height: 100px;
    }
    .svg3{
        background-color: #dcdcdc;
    }
}
</style>