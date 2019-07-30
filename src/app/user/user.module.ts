import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [UserComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule
  ],
  exports: [UserComponent, LoginComponent, RegistrationComponent]
})
export class UserModule { }
