import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ToastrService } from './../../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;

              default:
              this.toastr.error(element.description, 'Registration failed.');
              break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
