<template lang="pug">
.home
  i.ft &#xe663;
  br
  span {{state.counter}}
  HelloWorld
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { state, increment } from '@/states/counter';
export default {
  components: {
    HelloWorld
  },
  setup() {
    return {
      state,
      increment
    };
  }
};
</script>
