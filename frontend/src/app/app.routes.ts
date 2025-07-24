import { Routes } from '@angular/router';
import {LoginComponent} from './login/login'
import { Home } from './home/home';
import { Register } from './register/register';
// import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { CampaignRegister } from './campaign-register/campaign-register';
import { NavbarComponent } from './navbar/navbar';
import { AllBooksComponent } from './all-books/all-books';
import { BookDetailsComponent } from './bookdetails/bookdetails';
import { SignupComponent } from './signup/signup';
export const routes: Routes = [
    {path:'',component:Home},
    { path: 'allbooks', component: AllBooksComponent },
    { path: 'book/:id', component: BookDetailsComponent },
    { path: 'signup', component: SignupComponent },
    {path:'login',component:LoginComponent},
    {path:"signup",component:Register},
    // {path:'dashboard',component:Dashboard,canActivate:[authGuard]},
    {path:'campaiangForm',component:CampaignRegister,canActivate:[authGuard]}
];
