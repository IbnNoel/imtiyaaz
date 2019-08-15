import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from '../../services/data/user.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations:[moveIn(), fallIn()],
  host:{'[@moveIn]':''}
})
export class EmailComponent implements OnInit, OnDestroy {

  state: string = '';
  error: any;
  user: any;

  // find a way to create a collection of subscriptions to add and remove on onDestroy
  subscription: Subscription;
  userSubs: Subscription;


  constructor(public af: AngularFireAuth, private afDb: AngularFireDatabase, private router: Router, private userService: UserService) {

    this.userService.getUser().then((user) => {
      if(user){
        this.handleRegistration(user);
      }
    });
  }

  onSubmit(formData){
    if(formData){
        this.userService.logIn(formData.value.email, formData.value.password).then((success)=>{
          this.handleRegistration(success['user']);
        })
    }
  }

  private handleRegistration = (user) => {
    this.userService.getUserDetails(user.uid).then((info) => {
      if(!info.key){
        this.router.navigateByUrl('/register');
      }
      else{
        this.router.navigateByUrl('/members');
      }
    });
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
