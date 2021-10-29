<template>
  <div class="flex justify-center flex-col w-40 mx-auto mt-4">
    <p class="bg-green-400 p-6 border rounded font-bold">
      Times clicked: {{ count }}
    </p>
    <button class="bg-blue-400 p-6 border rounded" @click="increment">
      increment
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Counter',
  data: () => ({}),
  methods: {
    increment() {
      this.dispatchIncrement(10)
    },
    ...mapActions({
      dispatchIncrement: 'increment',
    }),
  },
  computed: {
    ...mapState(['count']),
  },
}
</script>
