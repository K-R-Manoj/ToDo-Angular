export const navigationRoutes:any = {
    home: {
      label: 'Home',
      routerLink: '/home',
      icon: 'home',
    },
    notes: {
        label: 'Notes',
        routerLink: '/note',
        icon: 'home',
    },
    trash: {
        label: 'Trash',
        routerLink: '/trash',
        icon: 'home',
    }
}
export interface RouteParams {
    label: string; // Label to display in navigation header
    routerLink: string; // Router link
    icon: string;
}  