import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    user: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
