<template>
    <div>step</div>
</template>

<script>
import stepper from '@/utils/steps';

const msPerFrame = 1000 / 60;

export default {
    name: 'Step',
    methods: {
        step() {
            const { val, stiffness, damping, precision } = this.styleValue;
            let newLastIdealStyleValue = this.newLastIdealStyleValue; // eslint-disable-line
            console.log('===', newLastIdealStyleValue)
            let newLastIdealVelocityValue = 10;
            for (; newLastIdealStyleValue !== val;) {
                [newLastIdealStyleValue, newLastIdealVelocityValue] = stepper(
                    msPerFrame / 1000,
                    newLastIdealStyleValue,
                    newLastIdealVelocityValue,
                    val,
                    stiffness,
                    damping,
                    precision,
                )
                this.styleValue = { ...this.styleValue, val: this.newLastIdealStyleValue }
            }
            this.newLastIdealStyleValue = val
        }
    },
}
</script>

<style>

</style>