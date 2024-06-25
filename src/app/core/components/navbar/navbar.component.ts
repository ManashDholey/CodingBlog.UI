import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/feature/auth/models/user.model';
import { AuthService } from 'src/app/feature/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user?: User;

  constructor(private authService: AuthService,
    private router: Router) {
  }


  ngOnInit(): void {
    
    this.authService.user()
    .subscribe({
      next: (response) => {
        this.user = response;
       // console.log("user=>",this.user);
      }
    });
    this.user = this.authService.getUser();
    console.log("user1=>",this.user);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
    this.router.navigate(['/login']);
  }
  onLogin():void {
    this.router.navigate(['/login']);
  }
}
