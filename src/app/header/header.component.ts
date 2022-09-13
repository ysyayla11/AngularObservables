import { Component, OnInit } from '@angular/core';
import { ObservorService } from '../observor.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  Username: any; //define username

   //Construct the service
  constructor(private UsernameService: ObservorService) { 
    this.subscription = this.UsernameService.getUsername().
    subscribe(UpdateUserName=> {this.Username = UpdateUserName})
    //subscribe to the getUsername method, this will let the header know that the username is. 
  }


  

  ngOnInit(): void {
   
    
  }

}

