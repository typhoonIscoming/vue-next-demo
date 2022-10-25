
<script>
import { h } from 'vue';

export default {
    name: 'Wrapper',
    render() {
        return h(this.$slots.default)
    },
    mounted() {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            console.log('浏览器支持dark模式!(^_^)');
        }
    },
}
</script>

<style lang="scss">
:root {
    --backgroundColor: #fff;
    --textColor: #333;
    --linkColor: #b52;
}
@media (prefers-color-scheme: dark) {
    :root {
        --backgroundColor: #111416;
        --textColor: #ccc;
        --linkColor: #f96;
    }
}
@media (prefers-color-scheme: light) {
    :root {
        --backgroundColor: #fff;
        --textColor: #333;
        --linkColor: #b52;
    }
}
</style>