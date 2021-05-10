<template>
  <div class="home">
    <HelloWorld msg="Hello World!!!" />
    <counter></counter>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "../components/Counter.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Counter
  }
};
</script>
