import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn,moveInLeft } from '../../router.animations';
import { UserService } from '../../services/data/user.service';
import { Promise } from 'q';
import { from, Observable } from 'rxjs';
import { map, tap, mergeMap, flatMap, switchMap } from 'rxjs/operators';
import { UserInfo } from 'src/app/dataModels/userInfo';
import { CollectionService } from 'src/app/services/data/collection.service';
import { Collection } from 'src/app/dataModels/collection';
import { Book } from 'src/app/dataModels/iCollection';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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
  collection: Observable<Collection>;

  userInfo: Observable<UserInfo> = new Observable<UserInfo>();

  constructor(private userService: UserService, private router: Router, private collectionService: CollectionService) { 
    this.collection =  this.collectionService.collection;
    this.userInfo = from(this.userService.getUser())
    .pipe(
      switchMap(user => from(this.userService.getUserDetails(user.uid))),
      map(info => info.payload.toJSON() as UserInfo)
    );
  }

  intToArray(numb){
    return Array(numb).fill(0).map((x,i)=>i);
  }

  enterBook(book:Book){
    debugger;
    this.router.navigate(['/book',{ title: book.info.title, author: book.info.author} ]);
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
