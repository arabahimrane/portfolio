
import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { StatisticsComponent } from "./Views/statistics/statistics.component";
import { EditHomeComponent } from "./Views/edit-home/edit-home.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: "", component: AdminComponent,
    children: [
      { path: "", component: StatisticsComponent },
      { path: "editHome", component: EditHomeComponent },
    ]
  },
];