interface Logo {
    lightLogo: string;
    alt: string;
    width?: string;
    height?: string;
  }
  
export interface ClientConfig {
    clientName: string;
    logo: Logo;
    showLogo: boolean;
    showUserProfile: boolean;
    allowedRoutes: string[];
    authRoutes: string[];
    wildcardRoute: string;
    showLogoutButton: boolean;
  }
export const DEFAULT_CLIENT_CONFIG = {
    logo: {
      path: '',
      alt: '',
      width: '',
      height: '',
    },
    showLogo: true,
    showUserProfile: true,
    allowedRoutes: [
      'home',
      'notes',
      'trash',
    ],
    authRoutes: ['callback',],
    wildcardRoute: 'callback',
    showLogoutButton: true,
};