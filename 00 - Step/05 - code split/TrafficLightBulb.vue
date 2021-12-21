<template>
     <div @click="activateLight"
         :class="{'is-active':active===color}"
         class="light">
     </div>
</template>

<script>
import {computed, reactive, onMounted, getCurrentInstance} from "vue";

export default {
    name: "TrafficLightBulb",
    props: {
        active: {
            type:String,
            default:""
        },
        color: {
            type:String,
            default:"red"
        }

    },
    setup(props, context) { //{attrs, slots, emit, expose}
        const instance = getCurrentInstance();
         let state = reactive({})

        function activateLight(){
            instance.parent.setupState.activateLight(props.color)
        }

        return {
            state,
            activateLight
        }
    }
}
</script>

<style scoped lang="less">
    .light {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: gray;
    }

    .is-active{
        background-color:v-bind(color);
    }
</style>