<template>
    <div class="ScaleInputText">
        <div :class="{ shake: inputting }" class="InputBox">
            <input type="text" id="txtMessage" v-model="message">
            <label for="txtMessage">
                <span
                    v-for="(chapter, index) in copyMessage"
                    :key="index"
                    class="InputAnimate">
                    {{ chapter }}
                </span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScaleInputText',
    data() {
        return {
            message: '',
            copyMessage: '',
            inputting: false,
        }
    },
    watch: {
        message(newval, oldvalue) {
            if (newval.length > oldvalue.length) {
                this.inputting = true;
                setTimeout(() => {
                    this.inputting = false
                }, 200)
            }
            this.copyMessage = newval.split('')
        },
    },
}
</script>

<style lang="scss" scoped>
.ScaleInputText{
    display: inline-block;
    .InputBox{
        position: relative;
        input{
            opacity: 0;
            &:focus ~ label{
                box-shadow: 0 5px 20px #6a86b6;
            }
        }
        label{
            min-width: 100%;
            min-height: 40px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: text;
            padding: 0 10px;
            border-radius: 4px;
        }
        .InputAnimate{
            animation: print 0.2s ease-in-out;
        }
    }
    .shake{
        animation: shake 0.2s ease-in-out;
    }
}
@keyframes print{
    0%{
        position: absolute;
        transform: scale(50);
    }
    99%{
        position: absolute;
    }
    100%{
        position: relative;
    }
}
@keyframes shake{
    50%{
        transform: scale(0.95);
    }
}
</style>