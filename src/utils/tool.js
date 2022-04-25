export function getBrowser() {
    const { userAgent } = window.navigator; // 取得浏览器的userAgent字符串
    const isOpera = userAgent.indexOf('Opera') > -1; // 判断是否Opera浏览器
    const isIE = userAgent.indexOf('compatible') > -1
            && userAgent.indexOf('MSIE') > -1 && !isOpera; // 判断是否IE浏览器
    const isEdge = userAgent.indexOf('Edge') > -1; // 判断是否IE的Edge浏览器
    const isFF = userAgent.indexOf('Firefox') > -1; // 判断是否Firefox浏览器
    const isSafari = userAgent.indexOf('Safari') > -1
            && userAgent.indexOf('Chrome') === -1; // 判断是否Safari浏览器
    const isChrome = userAgent.indexOf('Chrome') > -1
            && userAgent.indexOf('Safari') > -1; // 判断Chrome浏览器

    if (isIE) {
        // const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
        // reIE.test(userAgent);
        const IEVersion = parseFloat('$1');
        console.log('IEVersion', IEVersion)
        switch (IEVersion) {
        case 7: return 'IE7';
        case 8: return 'IE8';
        case 9: return 'IE9';
        case 10: return 'IE10';
        case 11: return 'IE11';
        default: return false; // 版本过低
        }
    }
    if (isOpera) {
        return 'Opera';
    }
    if (isEdge) {
        return 'Edge';
    }
    if (isFF) {
        return 'FF';
    }
    if (isSafari) {
        return 'Safari';
    }
    if (isChrome) {
        return 'Chrome';
    }
    return false
}


export const isWindow = (el) => el === window;

let prev = Date.now();

function fallback(fn) {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

// 动画器执行者
export const animator = window.requestAnimationFrame || fallback;

export const getVisibleHeight = (el) => {
    if (!el) {
        return 0
    } else if (isWindow(el)) {
        return el.innerHeight;
    }
    return el.getBoundingClientRect().height;
}

export const getVisibleWidth = (el) => {
    if (!el) {
        return 0
    } else if (isWindow(el)) {
        return el.innerWidth;
    }
    return el.getBoundingClientRect().width;
}

// 获取元素到可视区域顶部的距离
export const getVisibleTop = (el) => {
    if (isWindow(el)) {
        return 0;
    }
    return el.getBoundingClientRect().top
}

export function setScrollTop(el, value) {
    if ('scrollTop' in el) {
        el.scrollTop = value; // eslint-disable-line
    } else {
        el.scrollTo(el.scrollX, value);
    }
}

export const getCurrentIndexOnScroll = (parentEl, position = 60) => {
    const children = parentEl.children;
    const parentOffsetTop = getVisibleTop(parentEl);
    for (let index = 0; index < children.length; index += 1) {
        // 每一个子元素距离可是区域顶部的距离
        const top = getVisibleTop(children[index]);
        // 每一个子元素相对于父元素顶部的距离
        const relativeTop = top - parentOffsetTop;
        if (relativeTop >= position) {
            return index === 0 ? 0 : index - 1;
        }
    }
    return children.length - 1
}

export const getScrollTop = (el) => {
    const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
    return Math.max(top, 0);
}

/**
 * @param {require, elementNode} scroller 容器
 * @param {require, number} to 要滚动到的Y轴位置
 * @param {可选, number} duration 设定滚动时间
 */
// let animateid = null;
export const scrollTopTo = (scroller, to, duration) => {
    // 当前滚动到那个位置
    let current = getScrollTop(scroller)
    const frames = duration === 0 ? 1 : Math.round(duration / 16);
    const step = (to - current) / frames;
    const isDown = current < to;


    function animation() {
        current += step;
        if ((isDown && current > to) || (!isDown && current < to)) {
            current = to;
        }
        // 走一帧
        setScrollTop(scroller, current);
        // requestAnimationFrame不会进行重绘或回流
        if ((isDown && current < to) || (!isDown && current > to)) {
            animator(animation);
        }
    }
    animation()
}

// 点击对应索引的tab，页面滚动到对应子元素的到顶部
/**
 * @param {require, elementNode} scrollEl 容器
 * @param {require, elementNode} parentEl 父元素
 * @param {require, number} index 要滚动到子元素的索引
 * @param {可选, boolean} immediate 是否立刻滚动还是有一个滚动过渡
 */
 export const scrollToCurrentContent = (scrollEl, parentEl, index, immediate) => {
    const duration = immediate ? 0 : 300;
    const children = parentEl.children;
    // 要滚动到的那个元素的位置的高度，index = 0时，就滚动到Y = 0的位置
    let scrollHeight = 0;
    for (let n = 0; n < children.length; n += 1) {
        const styles = window.getComputedStyle(children[n])
        if (n < index) {
            // 这里只能是index >= 1的情况
            const marginTop = parseInt(styles.marginTop, 10)
            const marginBottom = parseInt(styles.marginBottom, 10)
            const margin = marginTop + marginBottom;
            // 当前元素的可视区域高度
            const currentItemHeight = getVisibleHeight(children[n])
            // 应该滚动到的高度
            scrollHeight += (currentItemHeight + margin);
        }
    }
    scrollTopTo(scrollEl, scrollHeight, duration)
}
