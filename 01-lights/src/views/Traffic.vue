<template>
    <div class="wrapper">
        <traffic-light name="light1" start="yellow" @activelight="showLights">
            <traffic-light-bulb color="pink" :activeColor="state.lights.light1"></traffic-light-bulb>
            <traffic-light-bulb color="lime" :activeColor="state.lights.light1"></traffic-light-bulb>
            <traffic-light-bulb color="green" :activeColor="state.lights.light1"></traffic-light-bulb>
        </traffic-light>
        <traffic-light name="light2" @activelight="showLights"></traffic-light>
    </div>




    <div>Light1:{{ state.lights.light1 }}</div>
    <div>Light2: {{ state.lights.light2 }}</div>

</template>

<script>
import {computed, reactive, onMounted} from "vue";
import TrafficLight from "../components/TrafficLight";
import TrafficLightBulb from "../components/TrafficLightBulb";

export default {
    components: {TrafficLightBulb, TrafficLight},
    props: {},
	setup(){
        let state = reactive({
            lights:{
                "light1":"red",
                "light2":"yellow"
            }
        })

        function showLights(name,color){
            state.lights[name] = color
        }

        return {
            state,
            showLights
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