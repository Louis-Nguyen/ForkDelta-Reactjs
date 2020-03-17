import { faCoffee } from '@fortawesome'

export type Route = {
    readonly path: string;
    readonly exact?: boolean;
    readonly showInNav?: boolean;
    readonly pathAbsolute?: string;
    readonly displayName: string;
    readonly icon?: faCoffee;
  };
export type RoutesConfig = { [key: string]: Route };
export const RoutesConfig = Object.freeze<RoutesConfig>({
    Login: {
      path: '/',
      showInNav: false,
      displayName: 'Logout',
    },
    Account: {
      path: '/account',
      showInNav: true,
      displayName: 'Account',
    },
  });