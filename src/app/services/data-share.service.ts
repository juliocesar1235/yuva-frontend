import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private messageSource = new BehaviorSubject("")
  currentMessage = this.messageSource.asObservable()
  constructor() { }

  getDataStream(){
    return this.messageSource.asObservable()
  }
  
  changeMessage(message: string){
    this.messageSource.next(message)
  }

}
