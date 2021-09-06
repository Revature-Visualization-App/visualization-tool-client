import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  //styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  email: string = localStorage.getItem('email');
  userId: number = parseInt(localStorage.getItem('userId'));
  error: boolean = false;
  
  showProfile() {
    console.log(this.userId, this.email)
    this.userService.getUserById(this.userId)
      .subscribe(data => {
        this.userService.user = {
          id: this.userId,
          email: this.email
        }
        this.error = false;
        console.log(data);
      },
        (error) => this.error = true);
  }



  ngOnInit(): void {
    this.showProfile()

  }

}
