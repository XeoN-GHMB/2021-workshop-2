<template>
    <div
        @click="activateLight(value)"
        :class="{'is-active':activeColor===color}"
        class="light">
    </div>
</template>

<script>
import {computed, reactive, onMounted, getCurrentInstance} from "vue";

export default {
    props: {
        color:String,
        activeColor:String
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
.light{
  width:100px;
  height:100px;
  border-radius: 50%;
  background-color:gray;
}

.is-active{
    background-color:v-bind(color);
}

</style>