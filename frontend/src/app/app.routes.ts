import { Routes } from '@angular/router';
import {LoginComponent} from './login/login'
import { Home } from './home/home';
// import { Dashboard } from './dashboard/dashboard';
import { AuthGuard } from './auth-guard';

import { AllBooks } from './all-books/all-books';
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
import { AddBook } from './addbook/addbook';
import { Updatebook } from './updatebook/updatebook';
import { Cart } from './cart/cart';
import { BookRequest } from './bookrequest/bookrequest';
import { DonateBook } from './donatebook/donatebook';
import { Profile } from './profile/profile';
export const routes: Routes = [
    {path:'',component:Home},
    { path: 'browsebooks', component: AllBooks, canActivate: [AuthGuard]},
    { path: 'signup', component: SignupComponent},
    {path:'login',component:LoginComponent},
    {path:"admin-dashboard",component:AdminDashboard, canActivate: [AuthGuard]},
    {path:"admin-signup",component:AdminSignup, canActivate: [AuthGuard]},
    {path:"buyer-dashboard",component:BuyerDashboard, canActivate: [AuthGuard]},
    {path:"seller-dashboard",component:SellerDashboard, canActivate: [AuthGuard]},
    {path:"admin-getallusers",component:Getallusers, canActivate: [AuthGuard]},
    {path:"admin-searchbyid",component:Searchbyid, canActivate: [AuthGuard]},
    {path:"admin-getalldonations",component:Getalldonations, canActivate: [AuthGuard]},
    {path:"admin-updatedonations",component:Updatedonations, canActivate: [AuthGuard]},
    {path:"admin-movetoviewallbookrequest",component:Allbookrequest , canActivate: [AuthGuard]},
    {path:"admin-movetoupdatebookrequest",component:Updatebookrequest , canActivate: [AuthGuard]},
    {path:"buyer-dashboard/requestbook",component:Requestbook , canActivate: [AuthGuard]},
    {path:"addBook",component:AddBook, canActivate: [AuthGuard]},
    {path:"updateBook",component:Updatebook, canActivate: [AuthGuard]},
    {path:"viewcart",component:Cart, canActivate: [AuthGuard]},
    {path:"bookrequest",component:BookRequest, canActivate: [AuthGuard]},
    {path:"donatebook",component:DonateBook, canActivate: [AuthGuard]},
    {path:"profile",component:Profile, canActivate: [AuthGuard]},
    // {path:'dashboard',component:Dashboard,canActivate:[authGuard]},
   //{path:'campaiangForm',component:CampaignRegister,canActivate:[authGuard]}
];
