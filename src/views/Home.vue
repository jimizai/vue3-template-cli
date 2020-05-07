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
import { getCurrentInstance } from 'vue';
export default {
  components: {
    HelloWorld
  },
  setup() {
    // eslint-disable-next-line
    const { ctx }: any = getCurrentInstance();

    return {
      state,
      increment
    };
  }
};
</script>
