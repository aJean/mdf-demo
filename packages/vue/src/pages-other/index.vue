<template>
  <h2>MPA 项目 - 2级入口</h2>
  <ProvideFeature>
    <ul>
      <li :class="$style.li"><a href="/">跳转到 index</a></li>
      <li><RouterLink to="/study">内部跳转到 study</RouterLink></li>
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
        .then((res) => console.log(res))
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
    request.get('/qy/yapi').then((res) => console.log(res));
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
