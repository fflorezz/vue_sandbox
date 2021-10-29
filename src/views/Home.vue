<template>
  <div class="home">
    <HelloWorld msg="Hello World!!!" />
    <counter></counter>
    <renderless-component v-model="tags">
      <div
        slot-scope="{ tags, removeTag, inputAtts, inputEvents }"
        class="mt-10"
      >
        <span v-for="tag in tags" :key="tag">
          <span>{{ tag }}, </span>
          <button
            @click="removeTag(tag)"
            type="button"
            class="bg-red-400 px-2 rounded text-white hover:bg-red-500"
          >
            &times;
          </button>
        </span>
        <input v-bind="inputAtts" v-on="inputEvents" placeholder="Add tag..." />
      </div>
    </renderless-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '../components/Counter.vue'
import RenderlessComponent from '../components/renderless-component.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter,
    RenderlessComponent,
  },
  data() {
    return {
      tags: ['uno', 'dos', 'tres'],
    }
  },
}
</script>
