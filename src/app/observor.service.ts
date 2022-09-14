import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// Observables can "return" multiple values over time, 
// something which functions cannot.
// Subscribing to an Observable is analogous to calling a Function.

  // While plain Observables are unicast 
  // (each subscribed Observer owns an independent
  //  execution of the Observable), Subjects are multicast.

  // Every Subject is an Observable,
  //  Given a Subject, you can subscribe to it

  // Every Subject is an Observer. 
  // It is an object with the methods next(v), error(e), and complete(). 
  


//Decorator that marks a class as available 
//to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root' 
  //root' : The application-level injector in most apps.
})
export class ObservorService {
  public observable = new BehaviorSubject<string>("User");
  
 
}

