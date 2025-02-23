import { Routes } from '@angular/router';
import { authGuard } from './shared/garde/auth.guard';

export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./partitions/website/website.module').then(m => m.WebsiteModule) },
    { path: 'admin', canActivate: [authGuard], loadChildren: () => import('./partitions/admin/admin.module').then(m => m.AdminModule) },
    {
        path: "**",
        redirectTo: ""
    }
];