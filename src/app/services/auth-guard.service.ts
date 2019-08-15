import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './data/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private af: AngularFireAuth, private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.userService.isUserSignedInObservable().pipe(
      take(1),
      tap(authenticated => {
        if(!authenticated)
          this.router.navigate(['/login']);
      })
    );
  }

}
