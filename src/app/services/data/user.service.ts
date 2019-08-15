import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Promise } from 'q';
import { AngularFireDatabase } from '@angular/fire/database';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public af: AngularFireAuth, private afDb: AngularFireDatabase) { }

  isUserSignedIn(){
    return this.af.authState.pipe(
      take(1),
      map(auth => !!auth)).toPromise();
  }

  isUserSignedInObservable(): Observable<boolean>{
    return this.af.authState.pipe(
      map(auth => !!auth));
  }

  logIn(email: string, password : string) {
    let promise = Promise((resolve,reject) => {
      this.af.auth.signInWithEmailAndPassword(email, password).then((user) => {
          if(user){
            resolve(user);
          }
          else{
            reject(user);
          }
      });
    });
    return promise;
  }

  logout(){
    return this.af.auth.signOut();
  }

  getUser(){
    return this.af.authState.pipe(
      take(1)).toPromise();
  }

  getUserDetails(uid){
    return this.afDb.object(`/personalInfo/${uid}`).snapshotChanges()
      .pipe(take(1)).toPromise();
  }

  setUserDetails(uid, infoObj){
    return this.afDb.object(`/personalInfo/${uid}`).set(infoObj)
  }

}
