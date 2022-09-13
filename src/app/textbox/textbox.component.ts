import { Component, OnInit,} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ObservorService } from '../observor.service';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {
  Username: any;
  
  //Construct the service, do we need a new name here?
  //Is it assigned to a variable? Why do we have this in 
  //the constructor but not under oninit?
  constructor(private UsernameService: ObservorService) { 
    
  }

    
  
 
  private debounce: number = 400;
  public searchControl: FormControl = new FormControl('');

  ngOnInit() {
    this.UsernameService.changeUsername('User'); // set the default username
     this.searchControl.valueChanges // detect value changes in textbox
      .pipe(debounceTime(this.debounce), distinctUntilChanged()) //waiting 400 ms after each change to continue, gives you time to type. Whats with the pipe here?
      .subscribe(query => {
        if (query == "") {
          this.UsernameService.changeUsername('User');
         }
         else {
       this.UsernameService.changeUsername(query);
      }

      // Change the username to the typed value, when the value is empty make it 'User'
       
       
       //How did subscribe work here without observables? Subscription is not imported either? Is observables imported via service?
      });
      
    
  }
}