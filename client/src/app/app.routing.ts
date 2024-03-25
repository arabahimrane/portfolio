import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./partitions/website/website.module').then(m => m.WebsiteModule) },
    { path: 'admin', loadChildren: () => import('./partitions/admin/admin.module').then(m => m.AdminModule) },
];