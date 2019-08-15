import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { UserService } from '../../services/data/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[moveIn(), fallIn()],
  host:{'[@moveIn]':''}
})
export class RegisterComponent implements OnInit {

  user:any;

  constructor(private userService: UserService ,private router: Router) {
    this.userService.getUser().then(auth => {
      if(auth){
        this.user = auth;
      }
    });
  }

  ngOnInit() {
  }

  onSubmit(formData){
    if(formData.value){
      this.userService.setUserDetails(this.user.uid,formData.value).then((result) => {
        this.router.navigateByUrl('/members');
      })
    }
  }

}
