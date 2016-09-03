import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../../components/home/home.component";
import {LoginComponent} from "../../components/login/login.component";
import {FourOFourComponent} from "../../components/404/404.component";
import {RegisterComponent} from "../../components/register/register.component";


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: FourOFourComponent }

];

export const homeroutesproviders: any[] = [

];

export const routing = RouterModule.forChild(routes);
