import { AxiosRequestConfig } from 'axios';

// tslint:disable-next-line:no-empty-interface
export interface State {}

export const state = () => ({} as State);

/*
 * mutation ここでstateを変更する。複雑なことはなるべくactionでやる
 */
export const mutations = {};

/*
 * action stateに反映したい値を取得・作成する。非同期処理もここ。
 * 各componentからはこれを呼ぶ @Action('ACTION_NAME') onButtonClick: void; みたいな。
 */
export const actions = {
  async nuxtServerInit({ commit }: IncludeCommitObject, { app, isStatic, isDev, isHMR, route }: NuxtApp) {
    console.log('nuxtServerInit');
  },
};

/*
 * TODO 強引
 */
interface IncludeCommitObject {
  commit(action: string, value: any): void;
}

interface NuxtApp {
  app: {
    $axios: {
      $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    };
  };
  route: { name: string };
  isStatic: boolean;
  isDev: boolean;
  isHMR: boolean;
}
