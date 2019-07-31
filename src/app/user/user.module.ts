import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [UserComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  exports: [UserComponent, LoginComponent, RegistrationComponent]
})
export class UserModule { }
