import { ClientConfig, DEFAULT_CLIENT_CONFIG } from './config.base';
import { RouteParams, navigationRoutes as BaseLinks } from './link.base';

export const CLIENT_CONFIG: ClientConfig = {
  clientName: 'Todo',
  ...DEFAULT_CLIENT_CONFIG,
  logo: {
    lightLogo: 'assets/logo/TD.png',
    alt: 'TODO',
    width: '130px',
    height: '46px',
  },
};

export const navigationRoutes: RouteParams[] = CLIENT_CONFIG.allowedRoutes.map((x) => BaseLinks[x]);