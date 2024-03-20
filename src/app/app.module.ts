import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewloginComponent } from './Component/newlogin/newlogin.component';
import { NewregisterComponent } from './Component/newregister/newregister.component';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import { KeepComponent } from './Component/keep/keep.component';
import { AuthService } from './Services/Auth/auth.service';
import { CreatenoteComponent } from './Component/createnote/createnote.component';
import { NoteiconsComponent } from './Component/noteicons/noteicons.component';
import { DisplaynoteComponent } from './Component/displaynote/displaynote.component';
import {MatCardModule} from '@angular/material/card';
import { GetnoteComponent } from './Component/getnote/getnote.component';
import { UpdatenoteComponent } from './Component/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchivenoteComponent } from './Component/archivenote/archivenote.component';
import {MatMenuModule} from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TrashnoteComponent } from './Component/trashnote/trashnote.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    NewloginComponent,
    NewregisterComponent,
    SidenavComponent,
    KeepComponent,
    CreatenoteComponent,
    NoteiconsComponent,
    DisplaynoteComponent,
    GetnoteComponent,
    UpdatenoteComponent,
    ArchivenoteComponent,
    TrashnoteComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    AuthService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
