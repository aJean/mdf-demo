<template>
  <div @click="add">outer12121 {{ count }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(1);
    function add() {
      count.value = Number(count.value) + 1;
    }
    return {
      count,
      add,
    };
  },
});
</script>

<router>
{
  meta: {
    test: 55555
  },

  async: true,

  props(params) {
    console.log(params);
  },
}
</router>