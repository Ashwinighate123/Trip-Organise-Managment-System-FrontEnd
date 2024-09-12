import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ThingtodoComponent } from './thingtodo/thingtodo.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PlacetogoComponent } from './placetogo/placetogo.component';


export const routes: Routes = [

    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'placetogo',component:PlacetogoComponent},
    {path:'thingtodo',component:ThingtodoComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent}, 
    {path:'adminlogin',component:AdminloginComponent}

];
