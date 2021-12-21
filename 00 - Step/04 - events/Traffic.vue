<template>
    <div class="wrapper">
        <traffic-light :start="state.lights.light1" name="light1" @activelight="showState"></traffic-light>
        <traffic-light :start="state.lights.light2" name="light2" @activelight="showState"></traffic-light>
    </div>
    <div>Light1:{{state.lights.light1}}</div>
    <div>Light2:{{state.lights.light2}}</div>
</template>

<script>
import TrafficLight from "../components/TrafficLight";
import {reactive} from "vue";
export default {
    name: "Traffic",
    components: {TrafficLight},
    props: {},
    setup(props, context) { //{attrs, slots, emit, expose}
        const state = reactive({
            lights:{
                "light1":"yellow",
                "light2":"red"
            }
        })

        function showState(name,color){
            state.lights[name] = color
        }

        return {
            showState,
            state
        }
    }
}
</script>

<style scoped lang="less">
.wrapper{
        display:flex;
        align-items: center;
        justify-content: center;
    }
</style>