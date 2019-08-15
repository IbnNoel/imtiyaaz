import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/data/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn:boolean;

  constructor(private userService: UserService, private router: Router, private activeRoute: ActivatedRoute) {
    /*
      read the personal info for role details, to decide what links to show.
    */
    userService.isUserSignedInObservable().subscribe( loggedIn => {
      this.loggedIn = loggedIn;
    });

   }

  logOut(){
    this.userService.logout().then((success) => {
      this.router.navigateByUrl('/login');
    })
  }
 
  ngOnInit() {
  }

}
