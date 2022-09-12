import { Component, OnInit } from '@angular/core';
import { ObservorService } from '../observor.service';
import { TextboxComponent } from '../textbox/textbox.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private UsernameService: ObservorService) { 
    
  }

  public Username:string | undefined;

  ngOnInit(): void {
    this.Username=this.UsernameService.Username;
    
  }

}

