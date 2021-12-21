<template>
    <div class="traffic-light">
        <slot>
            <traffic-light-bulb color="red" :activeColor="state.activelight"></traffic-light-bulb>
            <traffic-light-bulb color="yellow" :activeColor="state.activelight"></traffic-light-bulb>
            <traffic-light-bulb color="green" :activeColor="state.activelight"></traffic-light-bulb>
        </slot>
    </div>

</template>

<script>
import {computed, reactive, onMounted} from "vue";
import TrafficLightBulb from "./TrafficLightBulb";

export default {
	name: "Traffic",
    components: {TrafficLightBulb},
    props: {
        start: {
            type:String,
            default:"red"
        },
        name:String
    },
	setup(props, context){
        let state = reactive({
            activelight:props.start
        })

        function activateLight(color){
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
.traffic-light{
  background-color:black;
  width:100px;
  padding: 5px;
}



.red-light{
  background-color:red;
}

.yellow-light{
  background-color:yellow;
}

.green-light{
  background-color:green;
}
</style>