<template>
  <div class="about">
    <h1>This is an about page</h1>
     <the-headline2 bold color="#ff00ee">
         Mein Cooler Text

         <template v-slot:subline>
            Meine Subline
         </template>
     </the-headline2>

     <the-headline2>
     </the-headline2>
  </div>
</template>
<script>
import {useRoute} from "vue-router";
import TheHeadline2 from "../components/TheHeadline2";


export default {
    components: {TheHeadline2},
    setup() {
    const route = useRoute()

      return {
        route
      }
  }
}


</script>
