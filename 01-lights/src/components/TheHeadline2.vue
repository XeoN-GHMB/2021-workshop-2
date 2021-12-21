<template>
    <h2 :class="{'bold':bold}">
        <slot> Nix gefunden</slot>
    </h2>

    <sub>
        <slot name="subline">
            Test
        </slot>
    </sub>
</template>

<script>
import {computed, reactive, onMounted} from "vue";

export default {
    name: "TheHeadline2",
    props: {
        bold:Boolean,
        color:String,
    },
    setup(props, context) { //{attrs, slots, emit, expose}
        const state = reactive({});

        return {
            state
        }
    }
}
</script>

<style scoped lang="less">
    .bold{
        font-weight: 800;
    }

    h2{
        color:v-bind(color);
    }
</style>