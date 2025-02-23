
import { Routes } from "@angular/router";
import { WebsiteComponent } from "./website.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { HomeComponent } from "./Views/home/home.component";
import { ProjetListComponent } from "./components/projet-list/projet-list.component";

export const WEBSITE_ROUTES: Routes = [
    {
        path: "", component: WebsiteComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "login",
                component: LoginFormComponent
            },
            {
                path: "projet",
                component: ProjetListComponent
            },
            {
                path: "**",
                redirectTo: ""
            }
        ]
    },
];