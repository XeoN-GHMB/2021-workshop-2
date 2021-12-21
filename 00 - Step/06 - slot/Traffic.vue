<template>
    <div class="wrapper">
        <traffic-light :start="state.lights.light1" name="light1" @activelight="showState">
            <traffic-light-bulb color="pink" :active="state.lights.light1"></traffic-light-bulb>
            <traffic-light-bulb color="yellow" :active="state.lights.light1"></traffic-light-bulb>
            <traffic-light-bulb color="green" :active="state.lights.light1"></traffic-light-bulb>
        </traffic-light>
        
        <traffic-light :start="state.lights.light2" name="light2" @activelight="showState"></traffic-light>
    </div>

    <div>Light1:{{state.lights.light1}}</div>
    <div>Light2:{{state.lights.light2}}</div>
    <button @click="allGreen">Lets Start</button>
</template>

<script>
import TrafficLight from "../components/TrafficLight";
import {reactive} from "vue";
import TrafficLightBulb from "../components/TrafficLightBulb_";
export default {
    name: "Traffic",
    components: {TrafficLightBulb, TrafficLight},
    props: {},
    setup(props, context) { //{attrs, slots, emit, expose}
        const state = reactive({
            lights:{
                "light1":"pink",
                "light2":"red"
            }
        })

        function showState(name,color){
            state.lights[name] = color
        }

        function allGreen(){
            for(let name in {...state.lights}){
                state.lights[name] = "green"
            }
        }

        return {
            showState,
            allGreen,
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