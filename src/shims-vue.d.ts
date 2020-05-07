import { ComponentOptions } from 'vue';
import { Router } from 'vue-router';

declare module '*.vue' {
  const component: ComponentOptions;
  export default component;
}
declare module '*store' {
  const vuex: any;
  export default vuex;
}
declare module '*router' {
  const router: Router;
  export default router;
}
