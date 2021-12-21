<template>
    <div class="traffic-light">
        <div v-for="value in ['red','yellow','green']" :key="value" @click="activateLight(value)"
             :class="[getLight(value)]"
             class="light"></div>
    </div>
</template>

<script>
import {computed, reactive, onMounted} from "vue";

export default {
    name: "TrafficLight",
    props: {
        start:String,
        name:String,
    },
    setup(props,  context) { //{attrs, slots, emit, expose}
        let lights = ['red', 'yellow', 'green']
        let state = reactive({
            activelight: props.start
        })

        function activateLight(color) {
            state.activelight = color
            context.emit("activelight", props.name, color)
        }

        function getLight(color) {
            if (color === state.activelight) {
                return `${color}-light`
            }
            return ''
        }

        return {
            getLight,
            activateLight,
            lights,
            state,
        }
    }
}
</script>

<style scoped lang="less">

    .traffic-light {
        background-color: black;
        width: 100px;
        padding: 5px;
    }

    .light {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: gray;
    }

    .red-light {
        background-color: red;
    }

    .yellow-light {
        background-color: yellow;
    }

    .green-light {
        background-color: green;
    }
</style>