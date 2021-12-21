<template>
    <div class="traffic-light">
        <traffic-light-bulb color="red" :active="state.activelight"></traffic-light-bulb>
        <traffic-light-bulb color="yellow" :active="state.activelight"></traffic-light-bulb>
        <traffic-light-bulb color="green" :active="state.activelight"></traffic-light-bulb>
    </div>
</template>

<script>
import {computed, reactive, onMounted} from "vue";
import TrafficLightBulb from "./TrafficLightBulb_";

export default {
    name: "TrafficLight",
    components: {TrafficLightBulb},
    props: {
        start:String,
        name:String,
    },
    setup(props,  context) { //{attrs, slots, emit, expose}
        let state = reactive({
            activelight: props.start
        })

        function activateLight(color) {
            state.activelight = color
            context.emit("activelight", props.name, color)
        }

        return {
            activateLight,
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
</style>