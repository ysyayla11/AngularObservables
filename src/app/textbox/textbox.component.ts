import { Component, OnInit,} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ObservorService } from '../observor.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {
  Username: any;
  

  constructor(private UsernameService: ObservorService) { 
    
  }

    
  
  
  private debounce: number = 400;
  public searchControl: FormControl = new FormControl('');

  ngOnInit() {
    this.UsernameService.changeUsername('User');
     this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
       console.log(query)
       this.UsernameService.changeUsername(query);
       
      });
      
    
  }
}