import { Component, OnInit } from '@angular/core';
import { ObservorService } from '../observor.service';
import { TextboxComponent } from '../textbox/textbox.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  Username: any;

  constructor(private UsernameService: ObservorService) { 
    this.subscription = this.UsernameService.getUsername().
    subscribe(Username => {this.Username = Username})
    
  }


  

  ngOnInit(): void {
   
    
  }

}

