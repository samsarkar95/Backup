import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HelpAndSupportComponent } from './help-and-support/help-and-support.component';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RewardComponent } from './reward/reward.component';
import { SignupComponent } from './signup/signup.component';

// 1. Give appropriate route for routing
// 2. Any invalid route should redirect to HomeComponent
const routes: Routes = [
//  give appropriate route for reward and help component and render it in navbar component
{path:'login',component:LoginComponent},

{path:'home/:book',component:BookComponent},

{path:'home',component:HomePageComponent},

{ path:'signup', component:SignupComponent},

{ path:'reward', component:RewardComponent},

{ path:'help', component:HelpAndSupportComponent},

{path:'**',redirectTo:'/home',pathMatch:'full'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
