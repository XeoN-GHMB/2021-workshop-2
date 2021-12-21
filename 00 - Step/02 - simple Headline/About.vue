<template>
  <div class="about">
    <h1>This is an about page</h1>
      Params: {{ route.params}}<br>
      Query: {{ route.query}}<br>

      <the-headline color="red" bold>
          Test
      </the-headline>

      <the-headline color="#546433">
          Test2
      </the-headline>

      <the-headline color="green">
      </the-headline>

      <the-headline color="blue">
          <div v-for="aid in route.params['id']" :key="aid">
              {{aid}}
          </div>
      </the-headline>

  </div>
</template>
<script>
import {useRoute} from "vue-router";
import TheHeadline from "../components/TheHeadline";

export default {
    components: {TheHeadline},
    setup() {
    const route = useRoute()

      return {
        route
      }
  }
}


</script>
