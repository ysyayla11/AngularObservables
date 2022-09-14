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
  
  //Construct the service, do we need a new name here?
  //Is it assigned to a variable? Why do we have this in 
  //the constructor but not under oninit?
  constructor(private UsernameService: ObservorService) { 
  }

  public searchControl: FormControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(query => {
      this.UsernameService.observable.next(query);
      
    })
  };
      
    
}