<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="ADD_COUNT">
      测试
    </button>
  </div>
</template>

<script lang="ts">
import { useState, useMutations } from '@/hooks';
import { ADD_COUNT } from '@/store/global/constants';
export default {
  setup() {
    const { count } = useState('global', ['count']);
    useMutations('global', [ADD_COUNT]);
    return { count, ADD_COUNT };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
