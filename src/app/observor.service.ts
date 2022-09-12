import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ObservorService {

  
 
  private subject = new Subject<any>();
  

  changeUsername(Username: string){
    this.subject.next({text: Username})
  }

  getUsername(): Observable<any> {
    return this.subject.asObservable();
  }

 
  
}

