import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn } from '../../router.animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { UserService } from '../../services/data/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]' : ''}
})
export class LoginComponent implements OnInit {

  error: any;
  // TODO:- Create an authentication service and inject
  constructor(public af:AngularFireAuth, private router: Router, private userService : UserService) { 
  }

  loginFb(){
    this.af.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then( (success) => {
        this.router.navigate(['/members']);
      }).catch((err) => {
        this.error = err;
      });
  }

  loginGoogle(){
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((success) => {
        this.router.navigate(['/members']);
      }).catch((err) => {
        this.error = err;
      });
  }

  ngOnInit() {
  }

}
