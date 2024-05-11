
import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { StatisticsComponent } from "./Views/statistics/statistics.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { CertificatesComponent } from "../admin/components/certificates/certificates.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: "", component: AdminComponent,
    children: [
      { path: "", component: StatisticsComponent, },
      { path: "certificates", component: CertificatesComponent },
      { path: "logout", component: LogoutComponent },
    ]
  },
];