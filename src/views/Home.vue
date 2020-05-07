<template>
  <div class="home">
    <i class="ft">&#xe663;</i>
    <br />
    {{ state.counter }}
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
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
