import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn,moveInLeft } from '../../router.animations';
import { UserService } from '../../services/data/user.service';
import { Promise } from 'q';
import { from, Observable } from 'rxjs';
import { map, tap, mergeMap, flatMap, switchMap } from 'rxjs/operators';
import { UserInfo } from 'src/app/dataModels/userInfo';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations:[moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]' : ''}
})
export class MembersComponent implements OnInit {
  state: string = '';
  user: any;

  userInfo: Observable<UserInfo> = new Observable<UserInfo>();

  constructor(private userService: UserService, private router: Router) { 
    this.userInfo = from(this.userService.getUser())
    .pipe(
      switchMap(user => from(this.userService.getUserDetails(user.uid))),
      map(info => info.payload.toJSON() as UserInfo)
    );
  }
  
  private handleExistingUser = (existingUser) => {
    if(!existingUser.key){
    /* if user equals null create a new user form that pops up */
    /* on a save of form create a new user  */
    //this.afDb.object(`/personalInfo/${this._user.uid}`).set({test:true});
    }else{
      // display form to enter info
    }
  }

  ngOnInit() {
  }

}
