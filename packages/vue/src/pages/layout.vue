<template>
  <ProvideFeature>
    <p :class="$style.line">
      <img src="../assets/image/logo.png" />
      <button @click="handleClick">点我好吗，好的</button>
    </p>
    <ul>
      <li><a href="/other">跳转到 other 页面</a></li>
      <li :class="$style.li"><RouterLink to="/home">进入内部 home</RouterLink></li>
      <li><RouterLink to="/about">进入 about</RouterLink></li>
    </ul>
  </ProvideFeature>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProvideFeature from '@/components/feature.vue';
import request from '@/api/request';

export default defineComponent({
  setup() {
    const value = ref(1);

    const handleClick = function () {
      this.showLoading('测试 loading 插件');
      request
        .get('/platform/checkApp', { headers: { Authorization: 1 } })
        .then((res: any) => console.log(res))
        .finally(() => this.hideLoading());
    };

    return {
      value,
      handleClick,
    };
  },

  components: {
    ProvideFeature,
  },

  mounted() {
    console.log(this['$style']);
    request.get('/qy/yapi').then((res: any) => console.log(res));
  },
});
</script>

<style lang="scss" module>
@import '@/styles/common.scss';

.line {
  padding: 20px;
  background: rgb(193, 178, 236);
}

.button {
  padding: 10px;
  background: rgb(189, 167, 167);
}
</style>

<router>
{
  meta: {
    test: 1
  },
}
</router>
