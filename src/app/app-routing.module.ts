import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { NewloginComponent } from './Component/newlogin/newlogin.component';
import { NewregisterComponent } from './Component/newregister/newregister.component';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import { KeepComponent } from './Component/keep/keep.component';
import { CreatenoteComponent } from './Component/createnote/createnote.component';
import { NoteiconsComponent } from './Component/noteicons/noteicons.component';
import { AuthGuard } from './AuthGaurdForHome/authgaurd.guard';
import { GetnoteComponent } from './Component/getnote/getnote.component';
import { ArchivenoteComponent } from './Component/archivenote/archivenote.component';
import { TrashnoteComponent } from './Component/trashnote/trashnote.component';


const routes: Routes = [{path:'login',component:LoginComponent},
{path:'reg',component:RegisterComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'resetpassword/:token',component:ResetpasswordComponent},
{path:'newlogin', component:NewloginComponent},
{path:'newreg',component:NewregisterComponent},
{path:'sidenav',component:SidenavComponent},
{path:'keep', component:KeepComponent,
canActivate:[AuthGuard],
children:[
  {
    path:'getnotes',component:GetnoteComponent
  },
  {
    path:'archive',component:ArchivenoteComponent
    
  },
  {
    path:'trash',component:TrashnoteComponent
  }
]},
{path:'createnote',component:CreatenoteComponent},
{path:'icons', component:NoteiconsComponent},
{path:'archive',component:ArchivenoteComponent},
{path:'trash',component:TrashnoteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
