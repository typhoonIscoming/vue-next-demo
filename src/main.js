import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';

import './assets/icons/iconfont.css';

import 'element-plus/es/components/button/style/css';
import piniaGlobalPlugin from './store/plugins/global';
import piniaDebouncePlugin from './store/plugins/debouncePlugin';

let app = createApp(App);
const pinia = createPinia();
pinia.use(piniaGlobalPlugin);
pinia.use(piniaDebouncePlugin);
app.use(router);
app.use(pinia);

// 任何以 'ion-' 开头的元素都会被识别为自定义元素
// 在 Vue 3.x 中，对自定义元素是否是组件名的检查已经移动到模板编译阶段执行。所以，
// 只有“Runtime + Compiler”构建器支持app.config.isCustomElement。如果，使用的是“ Runtime-only”构建器，
// 则必须在构建器中配置isCustomElement。例如，通过在webpack的配置文件中的vue-loader的compilerOptions配置

app.config.compilerOptions.isCustomElement = tag => {
    return tag.startsWith('define-') || tag.startsWith('ion-')
}

function render() {
    app.mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap () {
    console.log('[vue] vue app bootstraped')
  }
  
export async function mount (props) {
    console.log('[vue] props from main framework', props)
    render();
}
  
export async function unmount () {
    app.$destroy()
    app.$el.innerHTML = ''
    app = null
}

