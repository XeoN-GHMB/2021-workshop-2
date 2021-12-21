<template>
  <div class="about">
    <h1>This is an about page</h1>
      Params: {{ route.params}}<br>
      Query: {{ route.query}}<br>
  </div>
</template>
<script>
import {useRoute} from "vue-router";

export default {
  setup() {
    const route = useRoute()

      return {
        route
      }
  }
}


</script>
