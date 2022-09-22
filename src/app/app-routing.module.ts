import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"index", component:IndexComponent,canActivate:[LoginGuard]},
  {path:"register", component:RegisterComponent},
  {path:"explore", component:ExploreComponent ,canActivate:[LoginGuard]},
  {path:"profile", component:ProfileComponent ,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
