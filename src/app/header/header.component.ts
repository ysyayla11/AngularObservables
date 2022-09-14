import { Component, OnInit } from '@angular/core';
import { ObservorService } from '../observor.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  subscriptions: Subscription[] = [];
  
  Username: any; //define username

   //Construct the service
  constructor(private UsernameService: ObservorService) { 
    this.subscriptions.push(this.UsernameService.observable.subscribe(verdi => this.Username = verdi)); 
  }
}

