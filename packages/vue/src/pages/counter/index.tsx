import { defineComponent } from 'vue';
import TsxComponent from './components/TsxComponent';
import VueComponent from './components/VueComponent.vue';

const FuncComponent = () => <div>这是函数组件</div>;

export default defineComponent({
  setup() {
    const add: any = () => console.log('add', 1);

    return () => {
      return (
        <>
          <h1>测试tsx文件导入 vue 和 tsx 文件</h1>
          <TsxComponent></TsxComponent>
          <VueComponent clickHandle={add}></VueComponent>
          <FuncComponent></FuncComponent>
        </>
      );
    };
  },
});
