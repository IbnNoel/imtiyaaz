import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MembersComponent } from './components/members/members.component';
import { RegisterComponent } from './components/register/register.component';
import { BookComponent } from './components/book/book.component';

export const router:Routes = [
    {path:'', redirectTo:'members', pathMatch:'full'},
    {path:'login', component: EmailComponent},
    {path:'signup', component:SignupComponent},
    {path:'members', component: MembersComponent, canActivate:[AuthGuardService]},
    {path:'register', component:RegisterComponent, canActivate:[AuthGuardService]},
    {path:'book', component:BookComponent, canActivate:[AuthGuardService]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);