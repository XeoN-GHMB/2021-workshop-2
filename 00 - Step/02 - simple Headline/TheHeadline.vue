<template>
    <h2 :class="{'bold':bold}">
        <slot>Placeholder</slot>
    </h2>
</template>

<script>
import {computed, reactive, onMounted} from "vue";

export default {
    name: "TheHeadline",
    props: {
        color:String,
        bold:Boolean
    },
    setup(props, context) { //{attrs, slots, emit, expose}
    }
}
</script>

<style scoped lang="less">
    h2{
        color:v-bind(color);
    }

    .bold{
        font-weight:800;
    }

</style>