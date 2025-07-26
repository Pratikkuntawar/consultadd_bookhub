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
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminSignup } from './admin-signup/admin-signup';
import { RouterModule } from '@angular/router';
import { BuyerDashboard } from './buyer-dashboard/buyer-dashboard';
import { SellerDashboard } from './seller-dashboard/seller-dashboard';
import { Getallusers } from './getallusers/getallusers';
import { Searchbyid } from './searchbyid/searchbyid';
import { Getalldonations } from './getalldonations/getalldonations';
import { Updatedonations } from './updatedonations/updatedonations';
import { Allbookrequest } from './allbookrequest/allbookrequest';
import { Updatebookrequest } from './updatebookrequest/updatebookrequest';
import { Requestbook } from './requestbook/requestbook';
export const routes: Routes = [
    {path:'',component:Home},
    { path: 'browsebooks', component: AllBooksComponent },
    { path: 'book/:id', component: BookDetailsComponent },
    { path: 'signup', component: SignupComponent },
    {path:'login',component:LoginComponent},
    {path:"signup",component:Register},
    {path:"admin-dashboard",component:AdminDashboard},
    {path:"admin-signup",component:AdminSignup},
    {path:"buyer-dashboard",component:BuyerDashboard},
    {path:"seller-dashboard",component:SellerDashboard},
    {path:"admin-getallusers",component:Getallusers},
    {path:"admin-searchbyid",component:Searchbyid},
    {path:"admin-getalldonations",component:Getalldonations},
    {path:"admin-updatedonations",component:Updatedonations},
    {path:"admin-movetoviewallbookrequest",component:Allbookrequest},
    {path:"admin-movetoupdatebookrequest",component:Updatebookrequest},
    {path:"buyer-dashboard/requestbook",component:Requestbook},
    // {path:'dashboard',component:Dashboard,canActivate:[authGuard]},
    {path:'campaiangForm',component:CampaignRegister,canActivate:[authGuard]}
];
